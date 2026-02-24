/**
 * extractPalette.ts
 * Finds the logo PNG, samples its pixels via pngjs, extracts dominant
 * non-white/near-white colors, and writes src/theme/palette.json.
 *
 * Falls back to a hardcoded palette derived from visual inspection of the
 * Magzenix logo if parsing fails.
 */
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT = path.join(ROOT, 'src', 'theme', 'palette.json')

// ─── Fallback palette (visually extracted from Magzenix logo) ───────────────
const FALLBACK = {
  bg: '#07090F',
  surface: '#0C1420',
  border: '#162338',
  fg: '#E3EDF7',
  muted: '#6B8AA6',
  accent: '#1DAECC',   // teal — "INNOVATIONS" text / lower leaf
  accent2: '#4BB543',  // green — upper leaf
  navy: '#1B2D6B',     // deep navy — "MAGZENIX" wordmark
  silver: '#B2C5D9',   // metallic silver — leaf highlights
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function toHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
}

function colorDistance(a: number[], b: number[]): number {
  return Math.sqrt(
    (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
  )
}

// Quantise a channel to reduce colour space
function quantise(v: number, step = 24): number {
  return Math.round(v / step) * step
}

function isNearWhite(r: number, g: number, b: number): boolean {
  return r > 230 && g > 230 && b > 230
}

function isNearBlack(r: number, g: number, b: number): boolean {
  return r < 25 && g < 25 && b < 25
}

// Saturation: range of RGB channels. Low = near-gray.
function saturation(r: number, g: number, b: number): number {
  return Math.max(r, g, b) - Math.min(r, g, b)
}

function extractDominant(pixels: Buffer, totalPixels: number, topN = 5): string[] {
  const freq: Record<string, number> = {}
  const stride = 4 // RGBA
  const step = Math.max(1, Math.floor(totalPixels / 16000)) // sample ~16k pixels

  for (let i = 0; i < totalPixels * stride; i += stride * step) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]
    const a = pixels[i + 3]
    if (a < 128) continue
    if (isNearWhite(r, g, b)) continue
    if (isNearBlack(r, g, b)) continue
    // Skip near-gray (low-saturation) colors — we want brand chromas
    if (saturation(r, g, b) < 40) continue

    const qr = quantise(r)
    const qg = quantise(g)
    const qb = quantise(b)
    const key = `${qr},${qg},${qb}`
    freq[key] = (freq[key] ?? 0) + 1
  }

  const sorted = Object.entries(freq)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key.split(',').map(Number))

  // Filter near-duplicates (perceptual clustering)
  const distinct: number[][] = []
  for (const col of sorted) {
    if (distinct.every(d => colorDistance(d, col) > 40)) {
      distinct.push(col)
      if (distinct.length >= topN) break
    }
  }

  // Sort by relative luminance descending so the most visible (bright) color
  // ends up first — best suited as a foreground accent on dark backgrounds.
  const luminance = ([r, g, b]: number[]) =>
    0.2126 * r + 0.7152 * g + 0.0722 * b

  distinct.sort((a, b) => luminance(b) - luminance(a))

  return distinct.map(([r, g, b]) => toHex(r, g, b))
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function run() {
  // Look for logo in common locations
  const candidates = [
    path.join(ROOT, 'public', 'logo.png'),
    path.join(ROOT, 'public', 'logo.svg'),
    path.join(ROOT, 'src', 'assets', 'logo.png'),
    path.join(ROOT, 'src', 'assets', 'logo.svg'),
    ...fs.readdirSync(ROOT)
      .filter(f => /magzenix.*\.(png|svg)/i.test(f))
      .map(f => path.join(ROOT, f)),
  ]

  const logoPath = candidates.find(p => fs.existsSync(p))

  let extracted: string[] = []

  if (logoPath && logoPath.endsWith('.png')) {
    try {
      const { PNG } = await import('pngjs')
      const data = fs.readFileSync(logoPath)
      const png = PNG.sync.read(data)
      extracted = extractDominant(
        Buffer.from(png.data),
        png.width * png.height
      )
      console.log(`[palette] Extracted ${extracted.length} colors from ${path.basename(logoPath)}:`, extracted)
    } catch (err) {
      console.warn('[palette] PNG extraction failed, using fallback:', (err as Error).message)
    }
  } else {
    console.log('[palette] No PNG logo found, using fallback palette.')
  }

  // Build final palette — merge extracted into fallback slots
  const [c0, c1, c2, c3] = extracted
  const palette = {
    bg: FALLBACK.bg,
    surface: FALLBACK.surface,
    border: FALLBACK.border,
    fg: FALLBACK.fg,
    muted: FALLBACK.muted,
    accent:  c0 ?? FALLBACK.accent,
    accent2: c1 ?? FALLBACK.accent2,
    navy:    c2 ?? FALLBACK.navy,
    silver:  c3 ?? FALLBACK.silver,
  }

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
  fs.writeFileSync(OUTPUT, JSON.stringify(palette, null, 2))
  console.log('[palette] Written to', OUTPUT)
}

run().catch(err => {
  console.error('[palette] Fatal error:', err)
  process.exit(1)
})
