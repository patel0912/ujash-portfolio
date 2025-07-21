
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto transition-colors duration-300">
            Ready to build something amazing? Let's discuss your project and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-white/10 dark:to-white/5 dark:backdrop-blur-sm rounded-2xl p-8 border border-transparent dark:border-white/10 shadow-lg dark:shadow-white/5 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-white/20 dark:backdrop-blur-sm rounded-lg shadow-sm dark:shadow-white/10 border border-transparent dark:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-md dark:hover:shadow-white/20">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors duration-300">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">ujashpatel169@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-white/20 dark:backdrop-blur-sm rounded-lg shadow-sm dark:shadow-white/10 border border-transparent dark:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-md dark:hover:shadow-white/20">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-600/30">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors duration-300">Phone</p>
                    <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">+91 91069 81447</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-white/20 dark:backdrop-blur-sm rounded-lg shadow-sm dark:shadow-white/10 border border-transparent dark:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-md dark:hover:shadow-white/20">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-600/30">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors duration-300">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/20">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ujash-patel-758651120"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/patel0912"
                    className="w-10 h-10 bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-gray-900/30 dark:shadow-white/20 hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-white/10 dark:to-white/5 dark:backdrop-blur-sm rounded-2xl p-8 border border-transparent dark:border-white/10 shadow-lg dark:shadow-white/5 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white dark:bg-white/20 dark:backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white dark:bg-white/20 dark:backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white dark:bg-white/20 dark:backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white dark:bg-white/20 dark:backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-white/20 dark:backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/40"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
