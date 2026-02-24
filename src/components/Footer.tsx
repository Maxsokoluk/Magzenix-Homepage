import { SITE } from '../constants/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 1.5rem',
      }}
    >
      <div
        className="max-w-6xl mx-auto"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Magzenix Innovations — back to top"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <span
            style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '4px 10px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="/logo.png"
              alt="Magzenix Innovations"
              style={{ height: '24px', width: 'auto', display: 'block' }}
            />
          </span>
        </a>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {SITE.nav.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    color: 'var(--muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e =>
                    ((e.target as HTMLAnchorElement).style.color = 'var(--fg)')
                  }
                  onMouseLeave={e =>
                    ((e.target as HTMLAnchorElement).style.color = 'var(--muted)')
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
          }}
        >
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          marginTop: '2rem',
          height: '2px',
          background:
            'linear-gradient(90deg, var(--accent) 0%, var(--accent2) 50%, transparent 100%)',
          borderRadius: '2px',
          opacity: 0.3,
          maxWidth: '1152px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        aria-hidden="true"
      />
    </footer>
  )
}
