
const Experience = () => {
  const experiences = [
    {
      title: "Senior Android Developer & Team Lead",
      company: "Devine Globe Technologies Pvt. Ltd.",
      duration: "2023 - Present",
      location: "Ahmedabad, Gujarat, India",
      description: [
        "Led the end-to-end development of Android applications, providing technical direction and mentoring to team members.",
        "Standardized the use of MVC and MVVM across projects, improving code maintainability and scalability.",
        "Championed code review practices to uphold high code quality and supported the growth of junior developers through hands-on mentorship.",
        "Reduced application crash rates by 95% through implementation of robust testing strategies, including unit and UI testing."
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Dagger/Hilt", "Coroutines", "Room"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Senior Android Developer",
      company: "Unitech IT Solutions Pvt. Ltd.",
      duration: "2022 - 2023",
      location: "Surat, Gujarat, India",
      description: [
        "Delivered a wide range of Android applications across diverse domains, including astrology, dating app, ride-hailing, and e-commerce — demonstrating adaptability and strong product understanding.",
        "Continuously enhanced mobile development expertise through hands-on experience, contributing to scalable, maintainable, and high-performing applications.",
        "Successfully integrated multiple payment gateways such as Razorpay, PayUMoney, and Google Pay, ensuring secure and seamless transaction flows.",
        "Improved app performance by reducing load times by 40% and memory consumption by 30%, resulting in smoother user experiences and increased app reliability."
      ],
      technologies: ["Java", "Kotlin", "Firebase", "Retrofit", "MVVM","Dart"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Junior Android Developer",
      company: "IVision Infotech Pvt. Ltd.",
      duration: "2021 - 2022",
      location: "Ahmedabad, Gujarat, India",
      description: [
        "Contributed to Android application development using Java and XML, assisting in feature implementation and performance optimization.",
        "Designed and built user interfaces aligned with Material Design guidelines to ensure modern, intuitive, and consistent UI experiences.",
        "Supported integration efforts with third-party libraries and APIs, improving interoperability and system functionality.",
        "Participated in the development of a scalable application platform to support migration from legacy client-server models to modern service-based architectures.",
        "Gained hands-on experience by developing applications across varied domains, including healthcare, 3D wallpapers, visa consulting, and online medicine delivery — showcasing versatility and eagerness to learn."
      ],
      technologies: ["Java", "Material Design", "Retrofit", "PHP", "MYSQL","XAMPP / WAMP"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Intern & Junior Android Developer",
      company: "WebEarl Technologies Pvt. Ltd.",
      duration: "2021",
      location: "Ahmedabad, Gujarat, India",
      description: [
        "Gained hands-on experience in Android development during a 10-month internship, contributing to real-world projects and deepening understanding of Android architecture and design patterns.",
        "Designed and developed advanced application components for the Android platform, with a focus on scalability and intuitive user experience.",
        "Assisted in identifying and resolving bugs, leading to improved app performance and stability.",
        "Performed unit testing and debugging on Android Emulator to ensure functionality and compatibility across a wide range of devices and OS versions.",
        "Collaborated with the development team to implement new features and enhance existing modules, contributing to the overall success of project deliverables."
      ],
      technologies: ["Java", "XML", "Android SDK", "Material Design", "PHP", "RESTful APIs"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Experience Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto transition-colors duration-300">
            A journey through my professional growth in Android development and team leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700 transition-colors duration-300"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 rounded-full z-10 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/50 transition-all duration-300"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-200/20 dark:hover:shadow-blue-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 dark:hover:from-gray-800 dark:hover:to-blue-900/20">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${exp.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      {exp.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start transition-colors duration-300">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-2.5 w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0 transition-colors duration-300"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 hover:shadow-md hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 transition-all duration-300 hover:scale-105">
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
