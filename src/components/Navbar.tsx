import { useState, useEffect } from 'react'
import { SITE } from '../constants/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        background: scrolled ? 'rgba(7,9,15,0.90)' : 'rgba(7,9,15,0.30)',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid rgba(var(--accent2-rgb),0.06)',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: '68px' }}
        aria-label="Primary navigation"
      >
        {/*
          Brand wordmark.
          Mobile (< sm): two-line stacked — MAGZENIX / INNOVATIONS — with tighter
          tracking so it stays compact beside the hamburger (and "Discuss" on sm).
          sm+: single line, nowrap.
          textTransform: uppercase on the parent applies to both variants.
        */}
        <a
          href="/"
          aria-label="Magzenix Innovations — home"
          style={{
            color: 'var(--fg)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            lineHeight: 1,
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
        >
          {/* Mobile: two-line stacked */}
          <span
            className="flex flex-col sm:hidden"
            style={{ lineHeight: 1.05, letterSpacing: '0.10em', gap: '1px' }}
          >
            <span>Magzenix</span>
            <span>Innovations</span>
          </span>
          {/* sm+: single line */}
          <span className="hidden sm:inline" style={{ whiteSpace: 'nowrap', letterSpacing: '0.12em' }}>
            Magzenix Innovations
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {SITE.nav.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  color: '#9BB8CE',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#9BB8CE')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/*
          Right-side actions grouped so CTA and hamburger sit flush together.

          CTA visibility:
            hidden sm:inline-flex — appears from sm (640px) upward.
          CTA label:
            "Discuss"          on sm–md (beside the hamburger, space is tight)
            "Discuss a project" on md+ (hamburger gone, full room available)
        */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-primary hidden sm:inline-flex"
            style={{ fontSize: '0.875rem', padding: '0.6rem 1.375rem' }}
          >
            <span className="md:hidden">Discuss</span>
            <span className="hidden md:inline">Discuss a project</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: 'var(--fg)',
                  borderRadius: '2px',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform:
                    menuOpen && i === 0 ? 'rotate(45deg) translate(3px,3px)'  :
                    menuOpen && i === 2 ? 'rotate(-45deg) translate(3px,-3px)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(7,9,15,0.97)',
            borderTop: '1px solid var(--border)',
            padding: '1.5rem 1.5rem 2rem',
          }}
        >
          <ul className="flex flex-col gap-5 list-none m-0 p-0 mb-6">
            {SITE.nav.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--fg)', fontSize: '1.1rem', fontWeight: 500, textDecoration: 'none' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-primary w-full justify-center"
            onClick={() => setMenuOpen(false)}
          >
            Discuss a project
          </a>
        </div>
      )}
    </header>
  )
}
