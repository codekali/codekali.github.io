import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'C++', level: 70, category: 'Programming' },
    { name: 'Java', level: 45, category: 'Programming' },
    { name: 'Python (PyTorch)', level: 50, category: 'AI/ML' },
    { name: 'Neural Networks (RNN)', level: 50, category: 'AI/ML' },
    { name: 'HTML5', level: 80, category: 'Frontend' },
    { name: 'CSS3', level: 75, category: 'Frontend' },
    { name: 'JavaScript jQuery', level: 40, category: 'Frontend' },
    { name: 'Angular', level: 50, category: 'Frontend' },
    { name: 'Bootstrap', level: 80, category: 'Frontend' },
    { name: 'PHP', level: 45, category: 'Backend' },
    { name: 'Node.js', level: 45, category: 'Backend' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'Adobe Illustrator', level: 60, category: 'Design' },
  ];

  const categories = ['Programming', 'AI/ML', 'Frontend', 'Backend', 'Database', 'Design'];
  const categoryColors = {
    'Programming': 'from-blue-400 to-blue-600',
    'AI/ML': 'from-green-400 to-green-600',
    'Frontend': 'from-purple-400 to-purple-600',
    'Backend': 'from-orange-400 to-orange-600',
    'Database': 'from-red-400 to-red-600',
    'Design': 'from-pink-400 to-pink-600',
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 font-semibold text-lg tracking-wide uppercase"
          >
            My Specialty
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-8"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            I have developed varied skills over the years to support my work and my personality. 
            I've worked on many different web frameworks and have a good knowledge of Data structures and algorithms.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryColors[category]} mr-3`}></span>
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                        <span className="text-teal-400 font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                          className={`h-full bg-gradient-to-r ${categoryColors[category]} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;