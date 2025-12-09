import { Card } from './ui/card';

export function About() {
  return (
    <section className="py-20  px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>

          {/* <div className="w-h h-1 bg-accent rounded-full" /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 w-full">
          <div className="lg:col-span-1 flex items-start justify-center w-full pb-5">
            <Card className="p-6  bg-background border-accent/20 items-center justify-center flex flex-col">
              <img className="block rounded-md relative max-w-50" src="https://joelruiz2.com/assets/JoelRuizPicture.webp" alt="Picture of Joel" />
              {/* <img src="https://joelruiz2.com/assets/handdrawncode2.webp" alt="hand drawn code on paper" /> */}
            </Card>
          </div>
          <div className="col-span-2">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
              My journey in tech started with a curiosity in video games.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">

            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
              Today, I love to push against the boundaries of technology. If I'm not coding, you will find me exploring new technologies or sharing knowledge in developer communities.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
              I enjoy learning algorithms, integrating with my gadgets, developing games, and testing AI models.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
              The freedom to explore is infinite.
            </p>


            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
              However, time is short, so I love to spend time with the family, watching my daughter play soccer, traveling for vacation, or staying at home and watching a good movie.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-left">

            </p>
          </div>

          <div>
            <Card className="p-6 px-12 bg-background border-accent/20 text-left items-center flex flex-col">
              <h3 className="font-semibold text-lg mb-4 text-accent">Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start justify-start gap-3 mt-1">
                  <span className="text-accent font-bold ">•</span>
                  <span className="text-muted-foreground">Full-Stack</span>
                </li>
                <li className="flex items-start justify-start gap-3 mt-1">
                  <span className="text-accent font-bold ">•</span>
                  <span className="text-muted-foreground">Distributed Systems</span>
                </li>
                <li className="flex items-start justify-start gap-3 mt-1">
                  <span className="text-accent font-bold ">•</span>
                  <span className="text-muted-foreground">Database Engineer</span>
                </li>
                <li className="flex items-start justify-start gap-3 mt-1">
                  <span className="text-accent font-bold ">•</span>
                  <span className="text-muted-foreground">Cloud Native</span>
                </li>
                <li className="flex items-start justify-start gap-3 mt-1">
                  <span className="text-accent font-bold ">•</span>
                  <span className="text-muted-foreground">Security Compliance</span>
                </li>
                <li className="flex items-start justify-start gap-3 mt-1">
                  <span className="text-accent font-bold ">•</span>
                  <span className="text-muted-foreground">Game Development</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
