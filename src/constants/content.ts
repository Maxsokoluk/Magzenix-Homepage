// ── Site-wide content ─────────────────────────────────────────────────────────
// Edit this file to update all homepage copy without touching component code.

export const SITE = {
  name: 'Magzenix Innovations',
  tagline: 'From frontier research to production reality.',
  description:
    'R&D manufacturing consulting specializing in advanced materials, process development, and production readiness for advanced manufacturing and biomedical technologies.',
  credibilityLine:
    'Specialized in advanced metals, manufacturing process development, and production readiness.',
  email: 'max@magzenix.com',
  nav: [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Focus Areas', href: '#focus' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const PILLARS = [
  {
    id: 'rd',
    label: '01',
    title: 'R&D Manufacturing Consulting',
    bullets: [
      'Proof-of-concept development',
      'Process feasibility and validation',
      'Prototype-to-production transfer',
    ],
    accent: 'accent',
  },
  {
    id: 'mfg',
    label: '02',
    title: 'Advanced Manufacturing Development',
    bullets: [
      'Alloy and materials development',
      'Casting and forming process development',
      'Tooling and process optimization',
    ],
    accent: 'accent2',
  },
  {
    id: 'bio',
    label: '03',
    title: 'Biomedical Manufacturing Capabilities',
    bullets: [
      'Implant-relevant material development',
      'Precision prototype manufacturing',
      'Production readiness support',
    ],
    accent: 'navy',
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    body: 'We learn your constraints, existing data, and goals. No templates — every engagement starts with a technical deep-dive.',
  },
  {
    step: '02',
    title: 'De-risk',
    body: 'Targeted experiments and literature analysis surface the highest-uncertainty variables before committing resources to prototyping.',
  },
  {
    step: '03',
    title: 'Prototype',
    body: 'Iterative build-test cycles with rigorous documentation. Each prototype is a data point, not just a sample.',
  },
  {
    step: '04',
    title: 'Transfer',
    body: 'Defined process parameters, validation packages, and knowledge transfer so your team can own what we built together.',
  },
]

export const FOCUS_AREAS = [
  'Alloy development',
  'Casting & tooling',
  'Extrusion process dev',
  'Materials characterization',
  'Test method development',
  'Prototype iteration',
]

export const CTA = {
  headline: 'Have a project in mind?',
  sub: "Tell us what you're working on. We'll respond within one business day.",
  note: 'This form opens your email client. No data is transmitted to our servers.',
}
