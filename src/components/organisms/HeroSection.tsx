import Image from "next/image";
import Badge from "../atoms/Badge";

export default function HeroSection() {
  const techStack = ["React.js", "Node.js", "Express.js", "Golang"];

  return (
    <div
      id="about"
      className="relative mt-24 sm:mt-28 lg:mt-32 scroll-mt-28 mx-4 sm:mx-8 lg:mx-12 bg-white"
    >
      {/* Tape decor elements to look like a pinned picture/drawing */}
      <div className="absolute -top-3 left-10 sm:left-16 w-16 sm:w-20 h-7 bg-amber-200/90 border-2 border-black rotate-[-6deg] shadow-sm pointer-events-none z-20"></div>
      <div className="absolute -top-3 right-10 sm:right-16 w-16 sm:w-20 h-7 bg-amber-200/90 border-2 border-black rotate-[5deg] shadow-sm pointer-events-none z-20"></div>

      <div className="flex flex-col lg:flex-row items-stretch overflow-hidden">
        {/* Avatar Image Section - Full to top, left, bottom borders */}
        <div className="w-full lg:w-80 xl:w-[420px] flex-shrink-0 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-white">
          <Image
            fill
            src="/Avatar.png"
            alt="Muhammad Aprilianto"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-4 sm:space-y-6">
          <div className="space-y-3">
            <Badge variant="primary">Software Engineer</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block text-black">
                Muhammad
              </span>
              <span className="block text-orange-600 underline decoration-wavy decoration-black decoration-3 sm:decoration-4">
                Aprilianto
              </span>
            </h1>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-bold">
            <span className="bg-amber-200 px-1 border border-black rounded-sm">
              Software Engineer
            </span>{" "}
            with a{" "}
            <span className="bg-orange-200 px-1 border border-black rounded-sm">
              language-agnostic mindset
            </span>
            , transitioning from document control to web development. I focus
            on building{" "}
            <span className="bg-amber-200 px-1 border border-black rounded-sm">
              scalable, maintainable systems
            </span>{" "}
            with{" "}
            <span className="bg-orange-200 px-1 border border-black rounded-sm">
              clean architecture
            </span>
            , selecting technologies based on use case rather than preference.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-2">
            {techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
