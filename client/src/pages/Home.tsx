import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useCursor } from '@/hooks/useCursor';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const { cursorRef, updateCursorPosition } = useCursor();
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === 'dark' 
      ? 'bg-gray-900 text-white transition-colors duration-300' 
      : 'bg-white text-charcoal transition-colors duration-300';
  }, [theme]);

  return (
    <div onMouseMove={updateCursorPosition} className="relative min-h-screen">
      <div 
        ref={cursorRef} 
        id="cursor" 
        className="hidden md:block w-5 h-5 rounded-full bg-purple/50 fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
