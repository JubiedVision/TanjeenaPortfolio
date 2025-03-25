import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const About = () => {
  const timelineItems = [
    {
      title: 'Education',
      description: 'Master\'s in Human-Computer Interaction, Stanford University',
      period: '2015 - 2017'
    },
    {
      title: 'Early Career',
      description: 'UX Researcher at Technology Innovations, Inc.',
      period: '2017 - 2019'
    },
    {
      title: 'Growth',
      description: 'Senior UX Researcher at Global Solutions Ltd.',
      period: '2019 - 2021'
    },
    {
      title: 'Present',
      description: 'Product Manager at Design Forward',
      period: '2021 - Present'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-[#171727] relative">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block font-playfair text-3xl md:text-4xl font-bold mb-4 relative">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blush to-lavender"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With over 8 years of experience, I bridge user needs with business goals to create meaningful product experiences.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="glass rounded-2xl p-8 shadow-lg h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center mr-4">
                <i className="ri-user-heart-line text-purple text-xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold">My Journey</h3>
            </div>
            
            <motion.div 
              className="space-y-6 relative pl-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {timelineItems.map((item, index) => (
                <motion.div key={index} className="timeline-item relative" variants={itemVariants}>
                  <div className="timeline-dot top-0"></div>
                  <h4 className="font-medium text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">{item.period}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <div>
            <motion.div 
              className="glass rounded-2xl p-8 shadow-lg mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center mr-4">
                  <i className="ri-brain-line text-purple text-xl"></i>
                </div>
                <h3 className="font-playfair text-xl font-semibold">My Philosophy</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I believe that great products are created at the intersection of empathy, 
                innovation, and execution. My research-driven approach ensures that every 
                design decision is informed by real user needs, while my product strategy 
                skills help translate these insights into business value.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                By combining deep user understanding with strategic thinking, I help teams 
                build products that users love and businesses thrive with.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center mr-4">
                  <i className="ri-tools-line text-purple text-xl"></i>
                </div>
                <h3 className="font-playfair text-xl font-semibold">Skills & Expertise</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="font-medium mb-2">{category.name}</h4>
                    <div className="space-y-2">
                      {category.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <motion.div 
                            className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 * skillIndex }}
                          >
                            <motion.div 
                              className={`h-full ${categoryIndex === 0 ? 'bg-gradient-to-r from-purple to-lavender' : 'bg-gradient-to-r from-blush to-coral'} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 * skillIndex + 0.5 }}
                            ></motion.div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
