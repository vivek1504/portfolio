import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        <p className="text-sm text-muted-foreground">
          © 2025 Vivek Jadhav. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vivek1504"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none cursor-target text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/vivek-jadhav-4b33b72a7"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none cursor-target text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="cursor-none cursor-target text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
