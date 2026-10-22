import { Button } from './ui/button';
import { ArrowRight, Network, Server, Briefcase } from 'lucide-react';

const pillars = [
  {
    icon: Network,
    label: 'architecture',
    title: 'Revenue-driving platforms',
    body: 'Designed the subscription purchasing system behind $49M in 2024 revenue, on a platform certifying millions of learners.',
  },
  {
    icon: Server,
    label: 'infrastructure',
    title: 'Cloud native',
    body: '20+ integrated cloud services with automated CI/CD, IAM, WAF tuning and PI/PII compliance.',
  },
  {
    icon: Briefcase,
    label: 'business',
    title: 'Product & leadership',
    body: 'Led and mentored 30+ developers, unifying IBM Training and Community for 1.6M learners.',
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] pt-32 pb-24 flex items-center justify-center">
      {/* Sunrise aurora: amber, coral and sky glows drifting behind a faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[hsl(225_45%_16%)] via-[hsl(222_35%_11%)] to-background">
        <div className="aurora-blob absolute -top-40 left-[calc(50%-18rem)] h-[36rem] w-[36rem] rounded-full bg-amber-400/40 blur-[120px]" />
        <div className="aurora-blob absolute top-10 -left-24 h-[28rem] w-[28rem] rounded-full bg-rose-500/35 blur-[120px] [animation-delay:-6s]" />
        <div className="aurora-blob absolute top-24 -right-24 h-[30rem] w-[30rem] rounded-full bg-sky-400/35 blur-[120px] [animation-delay:-12s]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_7%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_7%,transparent)_1px,transparent_1px)]
          bg-size-[48px_48px] mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-sm text-accent mb-6">
          <span className="text-muted-foreground">~/</span>architect · full-stack · cloud
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Joel Ruiz II
          <span className="block mt-2 pb-1 bg-linear-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">Senior Software Engineer</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          10+ years architecting distributed, cloud-native platforms, full-stack, from database internals to the UI.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto shadow-lg shadow-amber-500/25" asChild>
            <a href="#projects">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/5 border-white/15 backdrop-blur hover:bg-white/10 hover:text-foreground"
            asChild
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          {pillars.map(({ icon: Icon, label, title, body }) => (
            <li
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 hover:border-accent/50 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs text-accent">{label}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
