import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';
import { portfolioItems } from '@/data/portfolio';

const Portfolio = () => {
  const { handleHover, handleUnhover } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative grain">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block font-playfair text-3xl md:text-4xl font-bold mb-4 relative">
            Portfolio
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple to-coral"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selected projects showcasing my research-driven approach to product design and management.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className={`glass rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.span}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`${item.imageHeight} overflow-hidden relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`${tag.color} text-purple px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h3 className={`font-playfair ${item.featured ? 'text-2xl' : 'text-xl'} font-semibold mb-3`}>{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {item.description}
                </p>
                
                {item.featured ? (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img 
                        src={item.companyLogo} 
                        alt={`${item.company} logo`} 
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.company}</span>
                    </div>
                    <motion.a 
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-purple text-white rounded-full text-sm font-medium hover:bg-purple/90 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleUnhover}
                    >
                      View Case Study <i className="ri-arrow-right-line ml-1"></i>
                    </motion.a>
                  </div>
                ) : (
                  <motion.a 
                    href="#"
                    className="text-purple hover:text-purple/70 transition-colors duration-300 text-sm font-medium"
                    whileHover={{ x: 5 }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnhover}
                  >
                    View Case Study <i className="ri-arrow-right-line ml-1"></i>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
