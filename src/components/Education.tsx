import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const educationData = [
    {
      period: '2016 - 2020',
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'Aligarh Muslim University, Aligarh',
      description: 'Final Year Computer Engineering student with a decent CGPA.',
      icon: GraduationCap,
    },
    {
      period: '2013 - 2015',
      degree: 'High School',
      institution: 'Kairali School, Ranchi',
      description: 'Passed high school with a percentage of 93.2% marks. Received a prize for scoring the highest in Physics',
      icon: Award,
    },
    {
      period: '2012 - 2013',
      degree: 'Secondary School',
      institution: 'St. Thomas School, Ranchi',
      description: 'Passed secondary school with a percentage of 83.8% marks.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Education
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-500"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mr-8 flex-shrink-0"
                >
                  <item.icon size={24} className="text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Calendar size={16} className="text-teal-400 mr-2" />
                    <span className="text-teal-400 font-semibold">{item.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">{item.institution}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;