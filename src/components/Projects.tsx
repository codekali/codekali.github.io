import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      period: 'Aug 2019 - Present',
      title: 'Neural Source Code Descriptor',
      description: 'Working on creating a deep learning model which can relate between Java methods and a one line description of it which can help generate one line description of Java methods. Developed the model using pre-trained t5 transformer model and then fine tuning it for our dataset using PyTorch.',
      link: 'https://github.com/codekali/Neural-SC-Descriptor',
      technologies: ['PyTorch', 'Transformers', 'NLP', 'Java'],
      color: 'from-blue-400 to-purple-500',
    },
    {
      period: 'Aug 2018 - Dec 2018',
      title: 'Web User Behaviour Analysis',
      description: 'Worked on mining a web server log to retrieve different informations from it and generate reports of useful behaviours shown by users which can help in the website optimization. Generation a lot of graphical representaion of changing behaviour of users visiting a website.',
      technologies: ['Data Mining', 'Analytics', 'Visualization', 'Python'],
      color: 'from-green-400 to-teal-500',
    },
    {
      period: 'Dec 2019 - Jan 2020',
      title: 'Diabetes Prediction Model',
      description: 'Worked on building a Neural Network to predict the risk of obtaining diabetes in future. The project is still under development as there\'s shortage of the required dataset.',
      link: 'https://github.com/codekali/diabetes_prediction',
      technologies: ['Machine Learning', 'Neural Networks', 'Healthcare', 'Python'],
      color: 'from-red-400 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-20">
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
            Projects
          </motion.h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group h-full"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <Calendar size={16} className="text-teal-400 mr-2" />
                      <span className="text-teal-400 font-semibold text-sm">{project.period}</span>
                    </div>
                    
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 flex-1">
                        {project.title}
                      </h3>
                      
                      {project.link && (
                        <div className="flex space-x-2 ml-4">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-slate-700 hover:bg-teal-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                          >
                            <Github size={16} />
                          </motion.a>
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-slate-700 hover:bg-blue-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      <Code size={16} className="text-teal-400 mr-2" />
                      <span className="text-sm font-semibold text-teal-400">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 text-xs font-medium rounded-full border border-current text-white`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;