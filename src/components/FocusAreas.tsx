import { FOCUS_AREAS } from '../constants/content'

export default function FocusAreas() {
  return (
    <section
      id="focus"
      aria-label="Selected focus areas"
      style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2.75rem',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent2)',
                marginBottom: '0.75rem',
                fontFamily: 'DM Mono, ui-monospace, monospace',
              }}
            >
              Selected focus areas
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
              Where we have deep technical depth
            </h2>
          </div>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--muted)',
              maxWidth: '320px',
              lineHeight: 1.65,
            }}
          >
            Not an exhaustive list — if you don't see your area, ask. We expand
            scope on a project-by-project basis.
          </p>
        </div>

        {/* Chips */}
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
          role="list"
          aria-label="Focus area tags"
        >
          {FOCUS_AREAS.map((area, i) => (
            <span
              key={area}
              className="chip animate-fade-up"
              role="listitem"
              style={{
                animationDelay: `${0.05 + i * 0.07}s`,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent2)',
                  marginRight: '8px',
                  flexShrink: 0,
                }}
              />
              {area}
            </span>
          ))}
        </div>

        {/* Decorative rule */}
        <div
          style={{
            marginTop: '3.5rem',
            height: '1px',
            background:
              'linear-gradient(90deg, var(--accent) 0%, var(--accent2) 40%, transparent 100%)',
            opacity: 0.25,
            borderRadius: '1px',
          }}
        />
      </div>
    </section>
  )
}
