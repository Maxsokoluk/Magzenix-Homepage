import { PROCESS_STEPS } from '../constants/content'

export default function Process() {
  return (
    <section
      id="process"
      aria-label="How we work"
      style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
              fontFamily: 'DM Mono, ui-monospace, monospace',
            }}
          >
            How we work
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              lineHeight: 1.2,
            }}
          >
            A pragmatic path from unknown to production-ready
          </h2>
        </div>

        {/* Steps */}
        <div
          className="grid gap-0"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            position: 'relative',
          }}
        >
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.step}
              className="animate-fade-up"
              style={{
                animationDelay: `${0.1 + i * 0.12}s`,
                padding: '2rem 1.75rem',
                position: 'relative',
                borderLeft: '1px solid var(--border)',
              }}
            >
              {/* Connector dot */}
              <div
                style={{
                  position: 'absolute',
                  top: '2rem',
                  left: '-5px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '2px solid var(--bg)',
                  boxShadow: '0 0 8px rgba(29,174,204,0.5)',
                }}
              />

              {/* Step number */}
              <span
                style={{
                  fontFamily: 'DM Mono, ui-monospace, monospace',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                {s.step}
              </span>

              {/* Arrow between steps */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--fg)',
                  letterSpacing: '-0.015em',
                  marginBottom: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {s.title}
                {i < PROCESS_STEPS.length - 1 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ opacity: 0.3 }}
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="var(--accent)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="animate-fade-in"
          style={{
            marginTop: '2.5rem',
            fontSize: '0.8125rem',
            color: 'var(--muted)',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '1rem',
            maxWidth: '500px',
            lineHeight: 1.6,
          }}
        >
          Every engagement is scoped to your timeline and budget. We start with a focused discovery
          call — no commitment required.
        </p>
      </div>
    </section>
  )
}
