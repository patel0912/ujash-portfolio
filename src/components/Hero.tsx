
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/ujashpatel.jpg';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/30 dark:to-transparent rounded-full transition-colors duration-300"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-100/50 to-transparent dark:from-purple-900/30 dark:to-transparent rounded-full transition-colors duration-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/30">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                Senior Android Developer
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  & Team Lead
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Building exceptional mobile experiences with cutting-edge Android technologies and leading high-performing development teams.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 py-8">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 hover:shadow-lg hover:shadow-green-200/50 dark:hover:shadow-green-900/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">12+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/30 transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 hover:scale-105"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a href="https://github.com/patel0912" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/ujash-patel-758651120" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:ujashpatel169@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
