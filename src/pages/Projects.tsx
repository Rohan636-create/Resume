import dassaultLogo from '../assets/Dassault Systèmes.jpg';

const projects = [
  {
    id: 1,
    title: 'Real-Time Overloading Detection System for Wagons',
    description: 'Developed a real-time overloading detection system for wagons using ESP8266 for wireless data transmission.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['ESP8266', 'Load Sensors', 'IoT', 'Real-time Monitoring']
  },
  {
    id: 2,
    title: 'Real-Time Data Visualization Dashboards',
    description: 'Developed custom cloud dashboards for real-time data visualization and monitoring using Grafana API and InfluxDB.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Grafana API', 'InfluxDB', 'Data Visualization', 'Custom Plugins']
  },
  {
    id: 3,
    title: 'Underwater Autonomous Vehicle',
    description: 'Developed an Autonomous Underwater Vehicle (AUV) for underwater exploration and data collection, sponsored by Dassault Systèmes.',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Raspberry Pi', 'Python', 'C', 'AI', 'Computer Vision', 'Sensor Fusion'],
    sponsor: {
      name: 'Dassault Systèmes',
      logo: dassaultLogo
    }
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Check out some of my recent work
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src={project.image} 
                  alt={project.title} 
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    {project.sponsor && (
                      <div className="flex items-center ml-2">
                        <span className="text-xs text-gray-500 mr-1">
                          Sponsored by
                        </span>
                        <img 
                          src={project.sponsor.logo} 
                          alt={project.sponsor.name} 
                          className="h-6" 
                          title={project.sponsor.name}
                        />
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-base text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 