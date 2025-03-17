import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const technologies = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Azure",
  "ERPNext",
  "AWS",
  "Embedded Systems",
  "JWT Authentication",
];

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-4xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Hi, I'm <span className="text-blue-600">Rohan Kulkarni</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          An embedded systems and IoT developer specializing in real-time monitoring systems, data visualization, and autonomous vehicles. I build innovative solutions using cutting-edge technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg 
                     transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 
                     hover:scale-105 active:scale-100"
          >
            View My Work
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Link>
          <a
            href="https://drive.google.com/file/d/1kTMGGUlTHSbj2McmxgzUPDLVGi-HmfMH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg 
                     transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 
                     hover:scale-105 active:scale-100"
          >
            View Resume
            <FileText className="ml-2 transition-transform duration-300 group-hover:scale-110" size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies I Work With</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div 
                key={tech} 
                className="flex items-center bg-blue-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md
                         transform hover:-translate-y-1 hover:bg-blue-100 cursor-pointer"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 transition-transform duration-300 group-hover:scale-125"></div>
                <span className="text-sm font-medium text-gray-900">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 