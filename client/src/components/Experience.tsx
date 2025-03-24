import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/experiences';
import { useCursor } from '@/hooks/useCursor';

type Category = 'all' | 'research' | 'product' | 'design';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const { handleHover, handleUnhover } = useCursor();
  
  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeTab);
    
  const tabVariants = {
    active: { 
      backgroundColor: 'var(--bg-primary)', 
      color: 'var(--text-primary)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    inactive: { 
      backgroundColor: 'transparent', 
      color: 'var(--text-secondary)',
      boxShadow: 'none'
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <section id="experience" className="py-20 px-4 relative grain">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block font-playfair text-3xl md:text-4xl font-bold mb-4 relative">
            Experience
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-mint to-coral"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey through research, design, and product management.
          </p>
        </motion.div>
        
        <div className="mb-8 flex justify-center">
          <motion.div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            {['all', 'research', 'product', 'design'].map((tab) => (
              <motion.button
                key={tab}
                className="px-5 py-2 rounded-full text-sm font-medium"
                variants={tabVariants}
                animate={activeTab === tab ? 'active' : 'inactive'}
                onClick={() => setActiveTab(tab as Category)}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
                whileHover={{ scale: 1.05 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="glass rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 z-20 ${
                    exp.category === 'research' ? 'bg-lavender text-purple' :
                    exp.category === 'product' ? 'bg-mint text-purple' :
                    'bg-coral text-purple'
                  } px-3 py-1 rounded-full text-xs font-medium`}>
                    {exp.category.charAt(0).toUpperCase() + exp.category.slice(1)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {exp.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{exp.company} • {exp.period}</span>
                    <motion.a 
                      href="#"
                      className="text-purple hover:text-purple/70 transition-colors duration-300 text-sm font-medium"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleUnhover}
                      whileHover={{ x: 5 }}
                    >
                      Details <i className="ri-arrow-right-line"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-purple text-purple rounded-full font-medium hover:bg-purple/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            <i className="ri-download-line mr-2"></i> Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
