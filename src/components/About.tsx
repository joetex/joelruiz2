import { Card } from './ui/card';
import { SectionHeading } from './SectionHeading';

const highlights = [
  'Full-Stack',
  'Distributed Systems',
  'Database Engineer',
  'Cloud Native',
  'Security Compliance',
  'Game Development',
];

export function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" label="about">About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-3 flex md:block justify-center">
            <img
              className="w-48 md:w-full aspect-square object-cover rounded-xl border border-border grayscale-30 hover:grayscale-0 transition"
              src="https://joelruiz2.com/assets/JoelRuizPicture.webp"
              alt="Picture of Joel"
            />
          </div>

          <div className="md:col-span-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>My journey in tech started with a curiosity in video games.</p>
            <p>
              Today, I love to push against the boundaries of technology. If I'm not coding, you will find me exploring
              new technologies or sharing knowledge in developer communities.
            </p>
            <p>I enjoy learning algorithms, integrating with my gadgets, developing games, and testing AI models.</p>
            <p className="text-foreground">The freedom to explore is infinite.</p>
            <p>
              However, time is short, so I love to spend time with the family, watching my daughter play soccer,
              traveling for vacation, or staying at home and watching a good movie.
            </p>
          </div>

          <div className="md:col-span-3">
            <Card className="p-6 bg-background border-border shadow-none">
              <h3 className="font-mono text-sm text-accent mb-4">highlights</h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
