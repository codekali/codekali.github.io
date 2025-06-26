import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      period: 'June 2019 - July 2019',
      title: '.NET Developer',
      description: 'I was assigned to develop an online proposal maker platform for various purposes using ASP.NET Core on MVC architecture.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      period: 'June 2018 - July 2018',
      title: 'Mobile Application Developer',
      description: 'Developed some parts of a mobile application named "APAC Learning Tool" from a pre-existing web application using CORDOVA technology.',
      color: 'from-green-400 to-green-600',
    },
    {
      period: '2017 - 2018',
      title: 'Full Stack Developer',
      description: 'Fully developed a website for a health organisation Navarpan.com on wordpress with payment integration',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section id="experience" className="py-20">
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
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white mt-4"
          >
            Internships
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center mr-8 flex-shrink-0 shadow-lg`}
                >
                  <Briefcase size={24} className="text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <Calendar size={16} className="text-teal-400 mr-2" />
                    <span className="text-teal-400 font-semibold">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;