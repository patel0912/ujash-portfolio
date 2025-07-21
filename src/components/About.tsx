
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I'm a passionate Senior Android Developer with over 4 years of experience crafting 
              high-quality, scalable mobile applications. I specialize in Kotlin & Java, with 
              working knowledge of Jetpack Compose and a strong foundation in MVVM, MVC, and Clean Architecture.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              As a team lead, I've mentored developer teams, implemented Agile workflows, 
              and driven successful project deliveries across healthcare, e-commerce, social 
              media, and live streaming domains. With 12+ published apps, I take pride in building
               intuitive user experiences and writing clean, maintainable code.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I stay current with evolving Android trends and believe in continuous learning, 
              collaborative development, and leading by example.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Architecture Expertise</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <li>• MVVM and MVC Design Patterns</li>
                  <li>• Clean Architecture Principles</li>
                  <li>• Dependency Injection (Hilt / Dagger)</li>
                  <li>• Repository & Use Case Patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Leadership Skills</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <li>• Leading Development Teams & Technical Direction</li>
                  <li>• Establishing and Maintaining Code Review Standards</li>
                  <li>• Agile Methodologies</li>
                  <li>• Mentoring and Upskilling Junior Developers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-white/10 dark:to-white/5 dark:backdrop-blur-sm rounded-2xl p-8 border border-transparent dark:border-white/10 shadow-lg dark:shadow-white/5 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-white/20 dark:backdrop-blur-sm rounded-lg shadow-sm dark:shadow-white/10 border border-transparent dark:border-white/20 transition-all duration-300">
                  <span className="font-medium text-gray-700 dark:text-white transition-colors duration-300">Experience</span>
                  <span className="text-blue-600 dark:text-blue-300 font-semibold transition-colors duration-300">4+ Years</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-white/20 dark:backdrop-blur-sm rounded-lg shadow-sm dark:shadow-white/10 border border-transparent dark:border-white/20 transition-all duration-300">
                  <span className="font-medium text-gray-700 dark:text-white transition-colors duration-300">Team Size Led</span>
                  <span className="text-purple-600 dark:text-purple-300 font-semibold transition-colors duration-300">5+ Developers</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-white/20 dark:backdrop-blur-sm rounded-lg shadow-sm dark:shadow-white/10 border border-transparent dark:border-white/20 transition-all duration-300">
                  <span className="font-medium text-gray-700 dark:text-white transition-colors duration-300">Primary Language</span>
                  <span className="text-green-600 dark:text-green-300 font-semibold transition-colors duration-300">Kotlin & Java</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-white/20 dark:backdrop-blur-sm rounded-lg shadow-sm dark:shadow-white/10 border border-transparent dark:border-white/20 transition-all duration-300">
                  <span className="font-medium text-gray-700 dark:text-white transition-colors duration-300">Architecture</span>
                  <span className="text-orange-600 dark:text-orange-300 font-semibold transition-colors duration-300">MVC + MVVM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
