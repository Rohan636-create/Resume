import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database, Cpu, Cloud, GitBranch, Terminal, Radio } from 'lucide-react';

const skills = [
  { name: 'Microcontroller Programming', icon: <Cpu size={20} /> },
  { name: 'IoT Protocols', icon: <Radio size={20} /> },
  { name: 'Sensor Integration & Data Acquisition', icon: <Terminal size={20} /> },
  { name: 'Serial Communication (UART, SPI, I2C)', icon: <Code size={20} /> },
  { name: 'RTOS', icon: <Brain size={20} /> },
  { name: 'Cloud Platforms (AWS IoT)', icon: <Cloud size={20} /> },
  { name: 'Git', icon: <GitBranch size={20} /> },
  { name: 'Front-end Frameworks', icon: <Globe size={20} /> },
  { name: 'Debugging', icon: <Database size={20} /> },
];

const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I am an <span className="text-blue-600 font-semibold">Embedded Hardware Engineer</span> and 
                    <span className="text-blue-600 font-semibold"> IoT Developer</span> with a strong passion for building 
                    innovative solutions in the field of embedded systems, cloud computing, and full-stack development.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With hands-on experience in Raspberry Pi, ESP8266, IoT protocols, and real-time data visualization, 
                  I have worked on projects ranging from autonomous underwater vehicles to cloud-based monitoring 
                  dashboards using Grafana and InfluxDB.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In addition to my embedded systems expertise, I have experience in full-stack web development, 
                  having built custom CRMs using ERPNext, backend systems with Node.js, and responsive React + 
                  Tailwind CSS frontends.
                </p>
              </div>

              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-lg p-6 
                            transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <h4 className="text-xl font-semibold text-gray-900">
                    BTech in Electronics and Telecommunication
                  </h4>
                  <div className="mt-2 text-gray-700">
                    <p className="flex items-center">
                      <span className="font-medium">Walchand College of Engineering, Solapur</span>
                      <span className="mx-2">•</span>
                      <span>2021-2025</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 
                             transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 group"
                  >
                    <div className="p-2 bg-white rounded-lg group-hover:bg-blue-100 transition-colors">
                      <div className="text-blue-600">{skill.icon}</div>
                    </div>
                    <span className="text-base font-medium text-gray-900 ml-4">
                      {skill.name}
                    </span>
                  </motion.div>
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