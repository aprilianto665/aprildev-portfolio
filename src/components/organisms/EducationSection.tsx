import Card from "../molecules/Card";
import Icon from "../atoms/Icon";
import Badge from "../atoms/Badge";

export default function EducationSection() {
  return (
    <div id="education" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 scroll-mt-20">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
          Education &{" "}
          <span className="text-orange-600 underline decoration-wavy decoration-black decoration-3 sm:decoration-4">
            Training
          </span>
        </h2>
        <p className="text-gray-800 font-bold text-base sm:text-lg max-w-2xl mx-auto">
          My academic background and professional development journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <Icon name="education" className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="text-xl font-extrabold text-black mb-3">
            Education Level
          </h3>
          <div className="space-y-2 mb-6">
            <p className="text-orange-600 font-extrabold text-lg">Universitas Terbuka</p>
            <p className="text-gray-900 font-bold">
              Bachelor Degree of Information Systems
            </p>
            <p className="text-gray-700 font-semibold text-sm">2024-2028 (Expected)</p>
          </div>
          <Badge variant="primary">GPA: 3.89/4.00</Badge>
        </Card>

        <Card>
          <Icon name="training" className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="text-xl font-extrabold text-black mb-3">
            Professional Training
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-black pl-4 py-1">
              <p className="text-orange-600 font-extrabold text-base">
                Asah Led by Dicoding
              </p>
              <p className="text-gray-900 font-bold text-sm">
                Dicoding - Remotely, Indonesia
              </p>
              <p className="text-gray-700 font-semibold text-xs">Aug, 2025 - Jan, 2026</p>
            </div>
            <div className="border-l-4 border-black pl-4 py-1">
              <p className="text-orange-600 font-extrabold text-base">
                Full Stack Developer Bootcamp
              </p>
              <p className="text-gray-900 font-bold text-sm">
                Harisenin.com - Remotely, Indonesia
              </p>
              <p className="text-gray-700 font-semibold text-xs">Jun, 2025 - Oct, 2025</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
