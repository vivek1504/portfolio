import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { AnimatedThemeToggler } from './ui/themetoggler';

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="cursor-target cursor-none text-lg font-semibold hover:opacity-80 transition-all duration-200 hover:scale-105"
        >
          Vivek Jadhav
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="cursor-target cursor-none text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="cursor-target cursor-none text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="cursor-target cursor-none text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </button>
        </nav>
        <AnimatedThemeToggler className="cursor-target cursor-none hover:bg-secondary transition-colors" />
      </div>
    </header>
  );
};
