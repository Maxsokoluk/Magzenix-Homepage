import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/theme.css'
import palette from './theme/palette.json'

// Apply extracted palette to CSS variables synchronously (no FOUC).
// Fallback values are defined in theme.css; this overrides them at runtime.
function hexToRgbStr(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `${r},${g},${b}`
}

const root = document.documentElement
;(Object.keys(palette) as Array<keyof typeof palette>).forEach(key => {
  root.style.setProperty(`--${key}`, palette[key])
})
// Expose RGB channel strings so rgba(var(--accent-rgb),opacity) works in CSS/JS
root.style.setProperty('--accent-rgb',  hexToRgbStr(palette.accent))
root.style.setProperty('--accent2-rgb', hexToRgbStr(palette.accent2))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
