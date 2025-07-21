
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Kotlin", level: 95 },
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 50 },
        { name: "Dart", level: 30 },
      ]
    },
    {
      title: "Android Development",
      skills: [
        { name: "Jetpack Compose", level: 40 },
        { name: "Material Design Guidelines", level: 90 },
        { name: "Coroutines & Asynchronous Programming", level: 75 },
        { name: "View Binding & XML Layouts", level: 95 },
      ]
    },
    {
      title: "Architecture & Libraries",
      skills: [
        { name: "MVVM Architecture", level: 80 },
        { name: "Dependency Injection (Hilt, Dagger)", level: 70 },
        { name: "Room Database, DataStore", level: 80 },
      ]
    },
    {
      title: "Backend & Services",
      skills: [
        { name: "Firebase", level: 92 },
        { name: "Retrofit", level: 95 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Testing",
      skills: [
        { name: "JUnit", level: 85 },
        { name: "Espresso", level: 80 },
        { name: "UI Testing", level: 80 },
      ]
    },
    {
      title: "Version Control & CI/CD",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 95 },
        { name: "Bitbucket", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive technical skills spanning modern Android development, architecture patterns, and team leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-xl p-6 shadow-lg dark:shadow-white/10 hover:shadow-xl dark:hover:shadow-white/20 transition-all duration-300 border border-transparent dark:border-white/20 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 dark:hover:from-white/15 dark:hover:to-white/5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-sm dark:shadow-white/10"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors duration-300">
            Leadership & Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Team Leadership",
              "Agile Methodologies",
              "Code Review & Quality Standards",
              "Mentoring & Knowledge Sharing",
              "Cross-Functional Team Collaboration",
              "Technical Documentation",
              "Problem Solving",
              "Communication"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-lg p-4 text-center shadow-md dark:shadow-white/10 hover:shadow-lg dark:hover:shadow-white/20 transition-all duration-200 border border-transparent dark:border-white/20 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 dark:hover:from-white/15 dark:hover:to-white/5 flex justify-center items-center"
              >
                <span className="text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
