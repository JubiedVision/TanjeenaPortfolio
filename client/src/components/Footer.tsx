import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 text-center bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.p 
          className="text-sm text-gray-600 dark:text-gray-400 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          &copy; {currentYear} Tanjina Akter. All rights reserved.
        </motion.p>
        <motion.p 
          className="text-xs text-gray-500 dark:text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Designed with <i className="ri-heart-fill text-coral"></i> by Jubied Emon
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
