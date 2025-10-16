import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import TargetCursor from '@/components/ui/TargetCursor';
import Pattern from '@/components/ui/background';
// import { AnimatedGridPattern } from '@/components/ui/background';

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-black">
      {/* <AnimatedGridPattern /> */}
      <Pattern></Pattern>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
