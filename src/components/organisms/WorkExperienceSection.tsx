import Badge from '../atoms/Badge';

interface Experience {
  company: string;
  location?: string;
  role: string;
  period: string;
  gradient: string;
}

export default function WorkExperienceSection() {
  const experiences: Experience[] = [
    {
      company: 'Corebit Works',
      location: 'Remotely, Indonesia',
      role: 'Full-Stack Developer',
      period: 'Oct, 2025 - Feb, 2026',
      gradient: 'bg-[repeating-linear-gradient(-45deg,#fde68a,#fde68a_5px,#fef08a_5px,#fef08a_10px)]',
    },
    {
      company: 'PT Wiranusantara Bumi',
      location: 'Bekasi, Indonesia',
      role: 'Document Control',
      period: 'Oct, 2023 - May, 2025',
      gradient: 'bg-[repeating-linear-gradient(45deg,#ffedd5,#ffedd5_5px,#fed7aa_5px,#fed7aa_10px)]',
    },
    {
      company: 'PT Wiranusantara Bumi',
      location: 'Bandung, Indonesia',
      role: 'Project Administrator',
      period: 'Jan, 2021 - Jan, 2024',
      gradient: 'bg-[repeating-linear-gradient(-45deg,#fef3c7,#fef3c7_5px,#fde68a_5px,#fde68a_10px)]',
    },
  ];

  return (
    <div id="experience" className="max-w-4xl mx-auto px-4 sm:px-8 py-16 scroll-mt-20">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
          Work <span className="text-orange-600">Experience</span>
        </h2>
        <p className="text-gray-800 font-bold text-base sm:text-lg max-w-2xl mx-auto">
          My professional career journey
        </p>
      </div>

      <div className="relative border-l-4 border-black border-dashed ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Hand-drawn Timeline Node Dot */}
            <div className="absolute -left-[26px] sm:-left-[42px] -translate-x-1/2 top-6 w-5 h-5 bg-orange-500 border-2 border-black rounded-full z-10" />

            {/* Sketch Card */}
            <div
              className={`p-5 sm:p-6 ${exp.gradient} border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] outline outline-1 outline-black/35 outline-offset-[-4px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-black font-extrabold text-lg sm:text-xl">
                    {exp.company}
                  </h3>
                  {exp.location && (
                    <span className="text-gray-700 font-bold text-xs sm:text-sm">
                      • {exp.location}
                    </span>
                  )}
                </div>
                <p className="text-orange-600 font-extrabold text-base sm:text-lg">
                  {exp.role}
                </p>
              </div>

              <Badge variant="secondary" className="!px-3 !py-1 !text-xs sm:!text-sm shrink-0">
                {exp.period}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
