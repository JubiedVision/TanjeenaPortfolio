import { useState, useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';
import { ChevronDown } from "lucide-react";
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

const Hero = () => {
  const { handleHover, handleUnhover } = useCursor();
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['UX Researcher', 'Product Manager', 'Design Strategist', 'User Advocate'];
  const splineRef = useRef<Application | null>(null);

  function onLoad(splineApp: Application) {
    // Store the Spline application instance for potential interaction
    splineRef.current = splineApp;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background elements - Positioned below Spline */}
      <div className="absolute inset-0 bg-white dark:bg-[#1f2023] -z-30"></div>
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-purple/20 to-transparent -z-30"></div>
      
      {/* Spline 3D Element - Full viewport */}
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-purple">Loading...</div>}>
          <Spline 
            scene="https://prod.spline.design/Mf9e4uRc1-iWHuFc/scene.splinecode" 
            onLoad={onLoad}
            style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}
          />
        </Suspense>
      </div>
      
      {/* Full viewport card with content centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="w-full h-full bg-white/5 dark:bg-black/10 backdrop-blur-md p-4 md:p-8 border-x border-white/10 dark:border-white/5 shadow-2xl flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/10 dark:bg-white/10 backdrop-blur-sm border border-purple/20 dark:border-white/20 mx-auto mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span>
              <p className="text-sm font-medium text-charcoal dark:text-white/90">Hello, I'm</p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal dark:text-white tracking-tight mb-4"
            >
              Tanjina <span className="bg-clip-text text-transparent bg-gradient-to-r from-lavender via-purple to-coral">Akter</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center mb-5"
            >
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl font-medium text-charcoal/80 dark:text-white/80"
              >
                {roles[roleIndex]}
              </motion.div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-charcoal/70 dark:text-white/70 text-lg leading-relaxed mb-8 mx-auto"
            >
              I transform complex problems into intuitive product experiences through research-driven design and strategic product management.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-2 justify-center"
            >
              <motion.a 
                href="#portfolio"
                className="group px-6 py-3 bg-gradient-to-r from-purple to-coral text-white rounded-lg font-medium shadow-lg relative overflow-hidden flex items-center gap-2 pointer-events-auto"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
              >
                <span>View My Work</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 transition-transform group-hover:translate-x-0 duration-700"></div>
              </motion.a>
              
              <motion.a 
                href="#contact"
                className="group px-6 py-3 bg-transparent border border-purple/20 dark:border-white/20 text-charcoal dark:text-white rounded-lg font-medium flex items-center gap-2 backdrop-blur-sm hover:bg-purple/10 dark:hover:bg-white/10 transition-colors duration-300 pointer-events-auto"
                whileHover={{ scale: 1.03 }}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
              >
                <span>Get In Touch</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M10 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 8, 0] 
        }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-sm text-charcoal/60 dark:text-white/60 hover:text-charcoal/90 dark:hover:text-white/90 transition-colors"
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-6 w-6 text-charcoal/60 dark:text-white/60" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
