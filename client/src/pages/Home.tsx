import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useCursor } from '@/hooks/useCursor';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const { cursorRef, updateCursorPosition } = useCursor();
  const { theme } = useTheme();

  useEffect(() => {
    // Only apply theme if it's defined
    if (theme) {
      document.body.setAttribute('data-theme', theme);
      
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }

    // Cleanup function
    return () => {
      // Optional: reset theme when component unmounts
    };
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
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
