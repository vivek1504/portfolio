import { Code, Code2, Database, Infinity, Layout, Server } from 'lucide-react';
import Card from './ui/darth';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Express, Docker',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'PostgreSQL, MongoDB, Prisma',
  },
  {
    icon: Infinity,
    title: 'Tools & DevOps',
    description: 'AWS, CI/CD, Prometheus, Grafana,',
  },
];

export const About = () => {
  return (
    <section id="about" className="border-t bg-muted/30 py-20 my-24">
      <div className="container py-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              I’m a curious developer who enjoys building fun stuff. I like
              understanding how systems work under the hood. I’m driven by
              curiosity — whether it’s learning a new framework, debugging
              something tricky, or exploring. I’m always looking to grow and
              create something cool.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group border bg-background p-6 space-y-4 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <skill.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
