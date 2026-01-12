import Card from "../molecules/Card";
import Icon from "../atoms/Icon";
import Badge from "../atoms/Badge";

export default function EducationSection() {
  return (
    <div id="education" className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Education & <span className="text-orange-500">Training</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          My academic background and professional development journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <Icon name="education" className="w-8 h-8 mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Education Level
          </h3>
          <div className="space-y-2 mb-4">
            <p className="text-orange-600 font-semibold">Universitas Terbuka</p>
            <p className="text-gray-700">
              Bachelor Degree of Information Systems
            </p>
            <p className="text-gray-600 text-sm">2024-2028 (Expected)</p>
          </div>
          <Badge>GPA: 3.85/4.00</Badge>
        </Card>

        <Card>
          <Icon name="training" className="w-8 h-8 mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Professional Training
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-orange-200 pl-4">
              <p className="text-orange-600 font-semibold text-sm">
                Asah Led by Dicoding
              </p>
              <p className="text-gray-700 text-sm">
                Dicoding - Remotely, Indonesia
              </p>
              <p className="text-gray-600 text-xs">Aug, 2025 - Jan, 2026</p>
            </div>
            <div className="border-l-2 border-orange-200 pl-4">
              <p className="text-orange-600 font-semibold text-sm">
                Full Stack Developer Bootcamp
              </p>
              <p className="text-gray-700 text-sm">
                Harisenin.com - Remotely, Indonesia
              </p>
              <p className="text-gray-600 text-xs">Jun, 2025 - Oct, 2025</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
