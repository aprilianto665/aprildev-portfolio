import Image from "next/image";
import Badge from '../atoms/Badge';

export default function HeroSection() {
  const techStack = ["React.js", "Node.js", "Express.js", "Golang"];

  return (
    <div
      id="about"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-6xl w-full border border-orange-100 hover:shadow-3xl transition-all duration-300">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
          <div className="flex-shrink-0 relative group h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="w-70 absolute -inset-1 bg-[#FFECE3] rounded-2xl hidden sm:block"></div>
            <Image
              fill
              src="/Avatar.png"
              alt="Muhammad Aprilianto"
              className="relative object-cover sm:-left-8 sm:top-10"
            />
          </div>
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Badge variant="primary">Full Stack Developer</Badge>
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
              {techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}