import { SectionHeading } from './SectionHeading';

const metrics = [
  { value: '$49M', label: 'subscription revenue in 2024 from the purchasing system I designed' },
  { value: '1.6M', label: 'learners connected across IBM Training and IBM Community' },
  { value: '30+', label: 'developers led and mentored' },
  { value: '20+', label: 'cloud services integrated into one platform' },
];

const highlightGroups = [
  {
    title: 'Leadership & platform',
    items: [
      'Led platform development and cloud infrastructure for IBM Training, certifying millions of learners globally.',
      'Unified IBM Training and IBM Community into one end-to-end experience.',
      'Improved development velocity 30% through business, code, and technical reviews.',
      'Accelerated framework migrations and feature work with AI coding assistants.',
    ],
  },
  {
    title: 'Architecture & cloud',
    items: [
      'Architected cloud infrastructure with automated CI/CD pipelines and IAM administration.',
      'Migrated IBM Credentials from on-prem to IBM Cloud, cutting costs for millions of certifications and badges.',
      'Built data pipelines that normalize learning assets and redistribute them through APIs.',
      'Optimized data models and SQL for faster reads and writes and lower compute usage.',
    ],
  },
  {
    title: 'Security & operations',
    items: [
      'Established secrets rotation, vulnerability scanning, WAF tuning, and PI/PII compliance.',
      'Led incident response and root-cause reviews for code and infrastructure outages.',
      'Delivered client and vendor integrations to SLA, contract, and security standards.',
      'Automated fixes for recurring support issues, resolving customer issues within 48 hours.',
    ],
  },
];

export function Experience() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" label="experience">
          A decade building <span className="text-accent">IBM Training</span>
        </SectionHeading>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {metrics.map(({ value, label }) => (
            <div key={value} className="rounded-xl border border-border bg-card p-5">
              <div className="font-display text-3xl sm:text-4xl font-bold text-accent mb-2">{value}</div>
              <p className="text-sm text-muted-foreground leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold">
              IBM <span className="text-muted-foreground font-normal">· Senior Software Engineer</span>
            </h3>
            <p className="font-mono text-sm text-muted-foreground">Austin, TX · 2015–Present</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightGroups.map(({ title, items }) => (
              <div key={title}>
                <h4 className="font-mono text-sm text-accent mb-4">{title}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
