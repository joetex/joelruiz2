import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>

      <section className="min-h-150 pt-30 relative flex items-center justify-center  pb-24">
        <div className="absolute min-h-150 max-h-300 w-full inset-0 bg-linear-to-br from-accent/10 via-transparent to-transparent " />
        <div className="absolute min-h-150 max-h-300 z-10 inset-0 h-full w-full 
            bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
            bg-size-[40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">

            {/* <div className="w-50 h-50 overflow-hidden rounded-full bg-linear-to-br from-accent to-accent/70 flex items-center justify-center">
              
            </div> */}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Joel Ruiz II
            <span className="block text-accent mt-2">Full-Stack Developer</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Senior Software Engineer with over 10 years of experience in designing, developing, and optimizing enterprise-scale
            software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary-foreground gap-2 w-full sm:w-auto"
              onClick={scrollToProjects}
            >
              View Personal Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
            {/* <ButtonAsLink
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto flex text-foreground hover:text-foreground items-center"
              target="_blank"
              disabled={false}
              href={'https://joelruiz2.com/pdf/Joel%20Ruiz%20Resume%20Clean%20Version%207.2%20nophone.pdf'}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </ButtonAsLink> */}
          </div>

          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-foreground mb-1">100+</div>
              <div>Projects Completed</div>
            </div>
            <div className="w-px bg-border" />
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-foreground mb-1">10+</div>
              <div>Years Experience</div>
            </div>
            <div className="w-px bg-border" />
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div>Dedicated</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
}
