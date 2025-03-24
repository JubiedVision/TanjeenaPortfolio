import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useCursor } from '@/hooks/useCursor';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { handleHover, handleUnhover } = useCursor();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-4 py-3 transition-all duration-300 ${scrolled ? 'glass shadow-md' : 'glass'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-playfair font-semibold text-purple">
              Tanjina<span className="text-coral">.</span>
            </a>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-sm font-medium hover:text-purple transition-colors duration-300" 
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-lavender/50 hover:bg-lavender transition-colors duration-300"
              onMouseEnter={handleHover}
              onMouseLeave={handleUnhover}
            >
              {theme === 'light' ? (
                <i className="ri-sun-line text-purple"></i>
              ) : (
                <i className="ri-moon-line text-purple"></i>
              )}
            </button>
          </div>
          
          <button 
            className="md:hidden text-xl text-purple" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-charcoal z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl text-purple"
              aria-label="Close menu"
            >
              <i className="ri-close-line"></i>
            </button>
            
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-lg font-medium hover:text-purple transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full bg-lavender/50 hover:bg-lavender transition-colors duration-300"
            >
              {theme === 'light' ? (
                <i className="ri-sun-line text-purple"></i>
              ) : (
                <i className="ri-moon-line text-purple"></i>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
