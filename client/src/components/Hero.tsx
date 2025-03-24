import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';

const Hero = () => {
  const { handleHover, handleUnhover } = useCursor();
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['UX Researcher', 'Product Manager', 'Design Strategist', 'User Advocate'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="min-h-screen pt-28 pb-20 px-4 md:pt-32 md:pb-24 relative overflow-hidden grain">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-lavender/20 to-mint/20 dark:from-purple/5 dark:to-blush/5 -z-10"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-purple font-medium mb-3">Hello, I'm</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Tanjina Akter</h1>
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[2px] w-12 bg-coral"></div>
            <motion.h2 
              key={roleIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl font-medium"
            >
              {roles[roleIndex]}
            </motion.h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
            I transform complex problems into intuitive product experiences through research-driven design and strategic product management.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#portfolio"
              className="px-6 py-3 bg-gradient-to-r from-purple to-blush text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleUnhover}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-6 py-3 border border-purple text-purple rounded-full font-medium hover:bg-purple/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleUnhover}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-full bg-gradient-to-br from-blush to-lavender opacity-60 blur-md dark:opacity-30"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Tanjina Akter" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="mb-1">Scroll Down</span>
          <i className="ri-arrow-down-line text-lg"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
