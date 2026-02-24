import { PILLARS } from '../constants/content'

const accentMap: Record<string, string> = {
  accent:  'var(--accent)',
  accent2: 'var(--accent2)',
  navy:    'var(--navy)',
}

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
      <path d="M2 6.5h9M7.5 3l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Pillars() {
  return (
    <section
      id="capabilities"
      aria-label="Core capabilities"
      style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: 'DM Mono, ui-monospace, monospace',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent2)',
              marginBottom: '0.875rem',
            }}
          >
            Capabilities
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              maxWidth: '480px',
              lineHeight: 1.2,
            }}
          >
            End-to-end R&amp;D and manufacturing expertise
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}
        >
          {PILLARS.map((p, i) => {
            const accentColor = accentMap[p.accent] ?? 'var(--accent)'
            return (
              <article
                key={p.id}
                className="card animate-fade-up"
                style={{
                  padding: '2.25rem 2rem',
                  animationDelay: `${0.1 + i * 0.12}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
                aria-label={p.title}
              >
                {/* Index + accent bar row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'DM Mono, ui-monospace, monospace',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      color: accentColor,
                      letterSpacing: '0.10em',
                      minWidth: '20px',
                    }}
                  >
                    {p.label}
                  </span>
                  <div
                    style={{
                      height: '2px',
                      width: '28px',
                      borderRadius: '2px',
                      background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--fg)',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.title}
                </h3>

                {/* Bullets — minimal, no summary paragraph */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginTop: 'auto',
                  }}
                >
                  {p.bullets.map(b => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.625rem',
                        fontSize: '0.875rem',
                        color: 'var(--muted)',
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ color: accentColor, marginTop: '1px' }}>
                        <ArrowRight />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
