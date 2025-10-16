import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';
import Socials from './ui/Socials';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="container py-20 my-24">
      <div className="max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Left section */}
          {/* Left section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between animate-fade-in">
            {/* Top content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-foreground"></div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Let's Work Together
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have a project in mind? I'm always open to discussing new
                  opportunities, creative ideas, or partnership possibilities.
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium uppercasetracking-wider text-muted-foreground">
                    Email
                  </h3>
                  <p className="text-lg">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=jadhavvivek2743@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline  cursor-none cursor-target "
                    >
                      jadhavvivek2743@gmail.com
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Location
                  </h3>
                  <p className="text-lg">Vadadora, India</p>
                </div>
              </div>
            </div>

            {/* Socials at the bottom */}
            <div className="mt-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Socials
              </h3>
              <Socials />
            </div>
          </div>

          {/* Right section (form) */}
          <div className="md:w-2/5 animate-fade-in">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 border-2 p-8 bg-card hover:border-foreground/20 transition-colors"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium uppercase tracking-wider"
                >
                  Name
                </label>
                <Input
                  id="name"
                  className=" cursor-target"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium uppercase tracking-wider"
                >
                  Email
                </label>
                <Input
                  className=" cursor-target"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium uppercase tracking-wider"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="resize-none  cursor-target"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group cursor-none cursor-target"
              >
                Send Message
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1 "
                  size={20}
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
