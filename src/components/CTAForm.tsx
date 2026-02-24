import { useState, FormEvent } from 'react'
import { CTA, SITE } from '../constants/content'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

const RECIPIENT = 'max@magzenix.com'

export default function CTAForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const subject = encodeURIComponent('New Project Inquiry from Magzenix Website')

    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      '',
      'Message:',
      form.message,
    ]
      .filter(line => line !== null)
      .join('\n')

    const body = encodeURIComponent(bodyLines)

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      aria-label="Contact — Discuss a project"
      style={{ padding: '6rem 1.5rem 5rem', background: 'var(--bg)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="gradient-border">
          <div
            style={{
              background: 'var(--surface)',
              borderRadius: '14px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: '2.5rem' }}>
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
                Start a conversation
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}
              >
                {CTA.headline}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                {CTA.sub}
              </p>
            </div>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2.5rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(var(--accent-rgb),0.25)',
                  background: 'rgba(var(--accent-rgb),0.05)',
                }}
                role="status"
                aria-live="polite"
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(var(--accent-rgb),0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M4 11l5 5 9-9" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{ color: 'var(--fg)', fontWeight: 500, marginBottom: '0.5rem' }}>
                  Your email client should have opened.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                  If it didn't, email us directly at{' '}
                  <a
                    href={`mailto:${RECIPIENT}`}
                    style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                  >
                    {RECIPIENT}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name + Email row */}
                <div
                  className="grid gap-5"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div>
                    <label
                      htmlFor="cta-name"
                      style={{ display: 'block', fontSize: '0.8375rem', color: 'var(--muted)', marginBottom: '0.5rem', fontWeight: 500 }}
                    >
                      Name <span aria-hidden="true" style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cta-email"
                      style={{ display: 'block', fontSize: '0.8375rem', color: 'var(--muted)', marginBottom: '0.5rem', fontWeight: 500 }}
                    >
                      Email <span aria-hidden="true" style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@company.com"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Company — optional */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="cta-company"
                    style={{ display: 'block', fontSize: '0.8375rem', color: 'var(--muted)', marginBottom: '0.5rem', fontWeight: 500 }}
                  >
                    Company <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="cta-company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="Your organisation"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label
                    htmlFor="cta-message"
                    style={{ display: 'block', fontSize: '0.8375rem', color: 'var(--muted)', marginBottom: '0.5rem', fontWeight: 500 }}
                  >
                    Tell us about your project <span aria-hidden="true" style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    className="form-input"
                    placeholder="What are you trying to build or solve? Stage of development, materials, constraints, timeline — whatever is relevant."
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
                  <button type="submit" className="btn-primary">
                    Send message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <p
                    style={{ fontSize: '0.775rem', color: 'var(--muted)', lineHeight: 1.5, maxWidth: '340px' }}
                    role="note"
                  >
                    <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Note:</strong>{' '}
                    {CTA.note}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
