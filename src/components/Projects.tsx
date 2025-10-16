import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'PicGen | AI Image Generator',
    description:
      'Full-stack web app that generates AI images from text prompts',
    tech: ['React', 'PostgreSQL', 'Docker', 'Node.js'],
    github: 'https://github.com/vivek1504/picgen',
    demo: 'https://picgenai.vercel.app/',
  },

  {
    title: 'Pulse | Real-Time Chat Application',
    description:
      'A full-stack chat application enabling instant messaging between users in real time.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/vivek1504/pulse',
    demo: 'https://github.com/vivek1504/pulse',
  },
  {
    title: 'Blockchain based blue carbon registry',
    description:
      'A full-stack blockchain-based platform for managing blue carbon credits.',
    tech: ['React', 'Solana', 'Node', 'PostgresSQL'],
    github: 'https://github.com/vivek1504/blue_carbon',
    demo: 'https://github.com/vivek1504/blue_carbon',
  },
  {
    title: 'flappy bird',
    description:
      'Conversational AI interface with natural language processing capabilities.',
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/vivek1504/flappy_bird',
    demo: 'https://github.com/vivek1504/flappy_bird.',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects showcasing expertise in web development,
            from concept to deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col group hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="cursor-target cursor-none hover:bg-secondary transition-colors"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="cursor-target cursor-none hover:bg-secondary transition-colors"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
