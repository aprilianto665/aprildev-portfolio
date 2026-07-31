import Image from "next/image";
import Badge from "../atoms/Badge";

export default function HeroSection() {
  const techStack = ["React.js", "Node.js", "Express.js", "Golang"];

  return (
    <div
      id="about"
      className="relative mt-12 sm:mt-16 lg:mt-20 scroll-mt-20 mx-4 sm:mx-8 lg:mx-12 bg-white border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] outline outline-1 outline-black/30 outline-offset-[-4px] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Avatar Image Section - Full to top, left, bottom borders with wavy right border */}
        <div className="w-full lg:w-80 xl:w-[420px] flex-shrink-0 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] bg-white">
          <Image
            fill
            src="/Avatar.png"
            alt="Muhammad Aprilianto"
            className="object-cover object-center"
            priority
          />
          {/* Wavy border right for desktop */}
          <svg
            className="hidden lg:block absolute -right-[6px] top-0 bottom-0 h-full w-4 z-20 text-black pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 10 100"
          >
            <path
              d="M 4,0 Q 9,12.5 4,25 T 4,50 T 4,75 T 4,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {/* Wavy border bottom for mobile */}
          <svg
            className="block lg:hidden absolute -bottom-[6px] left-0 right-0 w-full h-4 z-20 text-black pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 10"
          >
            <path
              d="M 0,4 Q 12.5,9 25,4 T 50,4 T 75,4 T 100,4"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-4 sm:space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <Badge variant="primary">Software Engineer</Badge>
              <Badge variant="primary">AI Engineer</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block text-black">
                Muhammad
              </span>
              <span className="block text-orange-600">
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
