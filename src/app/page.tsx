export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `
        linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
      `,
        backgroundSize: "30px 30px",
        backgroundColor: "#FFECE3",
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">
              April <span className="text-orange-500">Dev</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        id="about"
        className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-6xl w-full border border-orange-100 hover:shadow-3xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
            <div className="flex-shrink-0 relative group h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <div className="w-70 absolute -inset-1 bg-[#FFECE3] rounded-2xl hidden sm:block"></div>
              <img
                src="avatar.png"
                alt="Muhammad Aprilianto"
                className="relative w-full h-full object-cover sm:-left-8 sm:top-10"
              />
            </div>
            <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                  Full Stack Developer
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Muhammad
                  </span>
                  <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Aprilianto
                  </span>
                </h1>
              </div>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 font-medium">
                Currently transitioning into web development with a strong
                background in document control and administrative support in
                large-scale infrastructure projects. Actively attending a Full
                Stack Developer bootcamp at{" "}
                <span className="text-orange-500 font-semibold">
                  Harisenin.com
                </span>{" "}
                to build technical proficiency in modern web technologies.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-4">
                {["React.js", "Node.js", "Express.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-orange-50 text-orange-700 text-xs sm:text-sm font-medium rounded-lg border border-orange-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="w-8 h-8 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-orange-500"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Frontend
            </h3>
            <div className="space-y-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Tailwind CSS",
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="w-8 h-8 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-orange-500"
              >
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Backend
            </h3>
            <div className="space-y-3">
              {["Java", "Node.js", "Express.js", "MongoDB", "MySQL"].map(
                (skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="w-8 h-8 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-orange-500"
              >
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tools & Others
            </h3>
            <div className="space-y-3">
              {[
                "Git",
                "Amazon Web Services",
                "Microsoft Azure",
                "Postman",
                "Jest",
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Some of the projects I've worked on during my learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Movie API",
              description:
                "RESTful API for movie database with CRUD operations, user authentication, rating system, and advanced search functionality.",
              tech: ["Node.js", "Express.js", "MongoDB"],
            },
            {
              title: "URL Shortener API",
              description:
                "Backend service for URL shortening with analytics tracking, custom aliases, expiration dates, and click statistics.",
              tech: ["Node.js", "Express.js", "Redis"],
            },
            {
              title: "Email Provider API",
              description:
                "Email service API with template management, bulk sending, delivery tracking, and webhook notifications.",
              tech: ["Node.js", "Express.js", "PostgreSQL"],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-md border border-3 border-orange-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-600 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="w-8 h-8 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-orange-500"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Feel free to reach out for any inquiries
            </p>
            <a
              href="mailto:aprilianto@example.com"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              aprilianto665@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="w-8 h-8 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-orange-500"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              LinkedIn
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Connect with me professionally
            </p>
            <a
              href="https://www.linkedin.com/in/muhammad-aprilianto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              linkedin.com/in/muhammad-aprilianto
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="w-8 h-8 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-orange-500"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">GitHub</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Check out my code and projects
            </p>
            <a
              href="https://github.com/aprilianto665"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              github.com/aprilianto665
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
