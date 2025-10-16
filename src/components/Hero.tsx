import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Terminal from './ui/terminal';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="container flex min-h-[calc(100vh-4rem)] items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT SIDE — TEXT */}
        <div className="max-w-3xl space-y-8 justify-self-start">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
              Vivek Jadhav
            </h1>

            <div
              className="h-1 w-24 bg-primary animate-slide-in-right"
              style={{ animationDelay: '0.2s' }}
            />

            <p
              className="text-lg md:text-2xl text-muted-foreground leading-relaxed animate-fade-in opacity-90"
              style={{ animationDelay: '0.3s' }}
            >
              Full-stack developer focused on building scalable, performant, and
              timeless interfaces.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group cursor-target cursor-none"
            >
              View Projects
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="cursor-target cursor-none hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <a href="vivek-resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE — TERMINAL */}
        <div className="flex justify-end w-full">
          <Terminal />
        </div>
      </div>
    </section>
  );
};
