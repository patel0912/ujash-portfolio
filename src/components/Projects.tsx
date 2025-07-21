
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HealthTracker Pro",
      description: "A comprehensive healthcare app with real-time monitoring, doctor consultations, and medication reminders. Built with Jetpack Compose and Firebase.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Dagger/Hilt"],
      githubUrl: "#",
      playStoreUrl: "#",
      category: "Healthcare",
      featured: true
    },
    {
      title: "ShopEasy E-commerce",
      description: "Modern e-commerce app with seamless shopping experience, payment integration, and order tracking. Supports 50,000+ active users.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "MVVM", "Retrofit", "PayPal SDK", "Material Design"],
      githubUrl: "#",
      playStoreUrl: "#",
      category: "E-commerce",
      featured: true
    },
    {
      title: "SocialConnect",
      description: "Social media platform with real-time messaging, story sharing, and video calls. Features include end-to-end encryption and live streaming.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "WebRTC", "Socket.io", "Firebase", "CameraX"],
      githubUrl: "#",
      playStoreUrl: "#",
      category: "Social Media",
      featured: false
    },
    {
      title: "LiveStream Studio",
      description: "Professional live streaming app with multi-camera support, real-time chat, and monetization features for content creators.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "WebRTC", "RTMP", "ExoPlayer", "Coroutines"],
      githubUrl: "#",
      playStoreUrl: "#",
      category: "Media",
      featured: false
    },
    {
      title: "TaskManager Pro",
      description: "Enterprise task management solution with team collaboration, project tracking, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Room", "WorkManager", "MPAndroidChart", "Clean Architecture"],
      githubUrl: "#",
      playStoreUrl: "#",
      category: "Productivity",
      featured: false
    },
    {
      title: "FitnessTracker+",
      description: "Comprehensive fitness app with workout plans, nutrition tracking, and AI-powered recommendations for healthy living.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "ML Kit", "HealthConnect", "Charts", "Jetpack Compose"],
      githubUrl: "#",
      playStoreUrl: "#",
      category: "Health & Fitness",
      featured: false
    }
  ];

  const categories = ["All", "Healthcare", "E-commerce", "Social Media", "Media", "Productivity", "Health & Fitness"];
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto transition-colors duration-300">
            A showcase of my work across various domains including healthcare, e-commerce, social media, and live streaming
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                index === 0 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 dark:shadow-blue-400/30' 
                  : 'bg-white dark:bg-white/10 dark:backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-white/20 hover:text-blue-600 dark:hover:text-blue-300 border border-transparent dark:border-white/20 shadow-md dark:shadow-white/10 hover:shadow-lg dark:hover:shadow-white/20 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg dark:shadow-white/10 hover:shadow-2xl dark:hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-transparent dark:border-white/20 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-blue-600/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-white/20 text-gray-700 dark:text-gray-200 rounded-md text-sm transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-gray-900/30 dark:shadow-white/20 hover:scale-105"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a 
                      href={project.playStoreUrl}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-600/30 hover:scale-105"
                    >
                      Play Store
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div key={index} className="bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-xl overflow-hidden shadow-md dark:shadow-white/10 hover:shadow-lg dark:hover:shadow-white/20 transition-all duration-300 border border-transparent dark:border-white/20 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 dark:bg-white/20 dark:backdrop-blur-sm text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-white/20 text-gray-600 dark:text-gray-200 rounded text-xs transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-white/20 text-gray-600 dark:text-gray-200 rounded text-xs transition-colors duration-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-1 bg-gray-100 dark:bg-white/20 text-gray-700 dark:text-gray-200 px-3 py-2 rounded text-sm hover:bg-gray-200 dark:hover:bg-white/30 transition-all duration-200 hover:scale-105"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                    <a 
                      href={project.playStoreUrl}
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/30 hover:scale-105"
                    >
                      Live
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
