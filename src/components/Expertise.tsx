import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Code, Brain, Palette, Globe, Smartphone } from 'lucide-react';

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const expertiseAreas = [
    {
      icon: Lightbulb,
      title: 'Innovative Ideas',
      description: 'Ponder over my work to have an innovative approach',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Code,
      title: 'Programming',
      description: 'Regular competitive programmer of Data Structure and Algorithm',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Immersed into researching Natural Language Processing concepts',
      color: 'from-green-400 to-teal-500',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Design logos, book covers and posters as a hobby on Adobe illustrator',
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Develop websites, both front-end and back-end on many different web stacks',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application',
      description: 'Develop small hybrid mobile applications using phonegap technologies',
      color: 'from-indigo-400 to-purple-500',
    },
  ];

  return (
    <section id="expertise" className="py-20">
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
            What I do?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white mt-4"
          >
            Here are some of my expertise
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <area.icon size={28} className="text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;