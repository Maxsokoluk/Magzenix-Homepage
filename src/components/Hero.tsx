import { SITE } from '../constants/content'

function Lattice() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.28 }}
    >
      <defs>
        <pattern id="lp" x="0" y="0" width="54" height="54" patternUnits="userSpaceOnUse">
          <circle cx="0"  cy="0"  r="1.4" style={{ fill: 'rgba(var(--accent2-rgb),0.55)' }} />
          <circle cx="54" cy="0"  r="1.4" style={{ fill: 'rgba(var(--accent2-rgb),0.55)' }} />
          <circle cx="0"  cy="54" r="1.4" style={{ fill: 'rgba(var(--accent2-rgb),0.55)' }} />
          <circle cx="54" cy="54" r="1.4" style={{ fill: 'rgba(var(--accent2-rgb),0.55)' }} />
          <circle cx="27" cy="27" r="1.8" style={{ fill: 'rgba(var(--accent2-rgb),0.4)'  }} />
          <line x1="0"  y1="0"  x2="27" y2="27" style={{ stroke: 'rgba(var(--accent2-rgb),0.18)' }} strokeWidth="0.6" />
          <line x1="54" y1="0"  x2="27" y2="27" style={{ stroke: 'rgba(var(--accent2-rgb),0.18)' }} strokeWidth="0.6" />
          <line x1="0"  y1="54" x2="27" y2="27" style={{ stroke: 'rgba(var(--accent2-rgb),0.18)' }} strokeWidth="0.6" />
          <line x1="54" y1="54" x2="27" y2="27" style={{ stroke: 'rgba(var(--accent2-rgb),0.18)' }} strokeWidth="0.6" />
          <line x1="27" y1="0"  x2="27" y2="27" style={{ stroke: 'rgba(var(--accent2-rgb),0.07)' }} strokeWidth="0.5" />
          <line x1="0"  y1="27" x2="27" y2="27" style={{ stroke: 'rgba(var(--accent2-rgb),0.07)' }} strokeWidth="0.5" />
          <circle cx="27" cy="0"  r="0.8" style={{ fill: 'rgba(var(--accent-rgb),0.35)' }} />
          <circle cx="0"  cy="27" r="0.8" style={{ fill: 'rgba(var(--accent-rgb),0.35)' }} />
          <circle cx="54" cy="27" r="0.8" style={{ fill: 'rgba(var(--accent-rgb),0.35)' }} />
          <circle cx="27" cy="54" r="0.8" style={{ fill: 'rgba(var(--accent-rgb),0.35)' }} />
        </pattern>
        <radialGradient id="lm-grad" cx="50%" cy="50%" r="58%">
          <stop offset="0%"   stopColor="black" stopOpacity="1"   />
          <stop offset="38%"  stopColor="black" stopOpacity="0.85"/>
          <stop offset="62%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="1"   />
        </radialGradient>
        <mask id="lm">
          <rect width="100%" height="100%" fill="url(#lm-grad)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#lp)" mask="url(#lm)" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '80px',
        background: 'var(--bg)',
      }}
    >
      {/* ── Grid layers ─────────────────────────────────────────── */}
      <div className="absolute inset-0 hero-lattice" aria-hidden="true" />
      <Lattice />

      {/*
        OPTION 3 — Grid-only radial fade behind the logo area.
        Sits above the grid layers (z-index 2) but below all content (z-10).
        Uses rgba black so it only mutes the grid dots/lines underneath —
        it does NOT add a visible dark plate; it simply quiets visual noise.
        NOT applied to the whole hero — only the logo region.
      */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '860px',
          height: '760px',
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Wide ambient section glow — static */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background:
            'radial-gradient(ellipse, rgba(var(--accent2-rgb),0.09) 0%, rgba(var(--accent-rgb),0.04) 55%, transparent 72%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* ── Content ─────────────────────────────────────────────── */}
      {/*
        pb-24 reserves space at the bottom so CTA buttons never
        overlap the absolutely-positioned scroll indicator.
      */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 pb-24"
        style={{ maxWidth: '800px' }}
      >
        {/*
          Logo wrapper — contains the brand glow only (no dark scrim).

          Layer B (outermost) — brand glow: accent colors, blur 64px, slow pulse.
          img                 — sits on top; all contrast work is done via CSS
                                filter directly on the element (Options 1 + 2).
        */}
        <div
          className="animate-fade-in anim-delay-1"
          style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: '2.75rem',
            zIndex: 1,
          }}
        >
          {/* Layer B — brand glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-90px',
              left: '-90px',
              right: '-90px',
              bottom: '-90px',
              background:
                'radial-gradient(closest-side, rgba(var(--accent-rgb),0.20) 0%, rgba(var(--accent2-rgb),0.11) 40%, transparent 75%)',
              filter: 'blur(64px)',
              pointerEvents: 'none',
              animation: 'glow-pulse 9s ease-in-out infinite',
              zIndex: 0,
            }}
          />

          {/*
            Logo — +30% larger across all breakpoints vs previous sizing.
            max-w-[85vw] prevents overflow on narrow viewports (iPhone SE).
            sm:max-w-none removes the cap once there's enough horizontal room.

            filter breakdown (applied left-to-right):
              brightness(1.18) contrast(1.05)
                → OPTION 2: dark-mode optimisation — ~15-18% luminance lift on
                  all rendered logo colors. The logo SVG embeds a rasterized PNG
                  (~530KB); there are no editable path nodes, so CSS filter is the
                  correct implementation of the "dark variant" requirement.
              drop-shadow(0 14px 34px rgba(0,0,0,0.60))
                → OPTION 1a: deep shadow for depth separation.
              drop-shadow(0 0 6px rgba(255,255,255,0.05))
                → OPTION 1b: extremely subtle light edge-lift. Not a visible
                  outline — just barely enough to separate letter edges.
          */}
          <img
            src="/logo.svg"
            alt="Magzenix Innovations"
            className="w-[374px] max-w-[85vw] sm:max-w-none sm:w-[416px] lg:w-[499px]"
            style={{
              position: 'relative',
              zIndex: 2,
              height: 'auto',
              display: 'block',
              filter:
                'brightness(1.18) contrast(1.05) drop-shadow(0 14px 34px rgba(0,0,0,0.60)) drop-shadow(0 0 6px rgba(255,255,255,0.05))',
            }}
          />
        </div>

        {/* Brand chip */}
        <div
          className="chip animate-fade-up anim-delay-2"
          style={{
            marginBottom: '1.5rem',
            borderColor: 'rgba(var(--accent-rgb),0.35)',
            color: 'var(--accent)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent2)',
              marginRight: '8px',
              flexShrink: 0,
            }}
          />
          Precise · Engineered · Frontier-focused
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up anim-delay-2"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '1.25rem',
            color: 'var(--fg)',
          }}
        >
          {SITE.tagline}
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up anim-delay-3"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'var(--muted)',
            lineHeight: 1.7,
            maxWidth: '580px',
            marginBottom: '0.75rem',
          }}
        >
          {SITE.description}
        </p>

        {/* Credibility line */}
        <p
          className="animate-fade-up anim-delay-3"
          style={{
            fontSize: '0.875rem',
            color: 'rgba(var(--accent2-rgb),0.7)',
            lineHeight: 1.5,
            maxWidth: '520px',
            marginBottom: '2.5rem',
            letterSpacing: '0.01em',
          }}
        >
          {SITE.credibilityLine}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-up anim-delay-4">
          <a href="#contact" className="btn-primary">
            Discuss a project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#capabilities" className="btn-ghost">
            View capabilities
          </a>
        </div>
      </div>

      {/* Scroll hint — safe-area-aware, never covered by buttons */}
      <div
        className="absolute left-1/2 -translate-x-1/2 animate-fade-in anim-delay-6"
        style={{
          bottom: 'max(1.5rem, calc(1rem + env(safe-area-inset-bottom, 0px)))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <span style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--accent2), transparent)' }} />
      </div>
    </section>
  )
}
