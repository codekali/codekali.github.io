import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-teal-400 font-semibold text-lg tracking-wide uppercase"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-8"
            >
              Who Am I?
            </motion.h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
            >
              <p>
                <strong className="text-teal-400">Hi I'm Jawwad Ayyubi</strong> - I'm a Computer engineer from Ranchi, India. 
                I was always passionate about computer programming and development. I've developed several websites and 
                a couple of mobile applications. I'm very enthusiastic about Deep Learning and finding my way into it.
              </p>
              
              <p>
                I'm passionate about <strong className="text-blue-400">Natural Language Processing</strong> in particular. 
                I am very comfortable with multitasking and love working in flexible hours. My expertise spans across 
                full-stack development, machine learning, and creating innovative solutions that solve real-world problems.
              </p>
              
              <p>
                I'm a hard working individual with great focus on work. I'm currently looking for opportunities as a 
                <strong className="text-teal-400"> Machine Learning developer</strong> which can leverage my knowledge, 
                understanding and experience in this field. I believe in continuous learning and staying updated with 
                the latest technologies and trends in the industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-slate-700"
            >
              <div className="flex flex-wrap gap-4">
                {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;