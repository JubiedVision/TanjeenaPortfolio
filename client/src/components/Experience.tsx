import { useState } from 'react';
import { experiences } from '@/data/experiences';

type Category = 'all' | 'research' | 'product' | 'design';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<Category>('all');
  
  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeTab);

  return (
    <section id="experience" className="py-16 px-4 bg-white dark:bg-[#171727]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey through research, design, and product management.
          </p>
        </div>
        
        <div className="mb-10 flex justify-center border-b border-gray-200 dark:border-gray-700">
          {['all', 'research', 'product', 'design'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 text-sm font-medium mx-2 ${
                activeTab === tab 
                  ? 'text-purple border-b-2 border-purple' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-purple'
              }`}
              onClick={() => setActiveTab(tab as Category)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className={`text-xs font-medium uppercase tracking-wider ${
                    exp.category === 'research' ? 'text-indigo-600 dark:text-indigo-400' :
                    exp.category === 'product' ? 'text-emerald-600 dark:text-emerald-400' :
                    'text-rose-600 dark:text-rose-400'
                  }`}>
                    {exp.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {exp.description}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 border-t pt-3 border-gray-100 dark:border-gray-800">
                  {exp.company} • {exp.period}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="px-6 py-3 bg-purple text-white font-medium border-0 hover:bg-purple/90"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
