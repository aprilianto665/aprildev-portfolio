import Card from "../molecules/Card";
import Icon from "../atoms/Icon";
import SkillBadge from "../atoms/SkillBadge";
import { languages, frontend, backend, devops, tools } from "../../data/skills";

export default function SkillsSection() {
  return (
    <div id="skills" className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </div>

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="languages" className="w-6 h-6 mr-3 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Icon name="frontend" className="w-6 h-6 mr-3 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontend.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Icon name="backend" className="w-6 h-6 mr-3 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backend.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Icon name="tools" className="w-6 h-6 mr-3 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Tools & Others</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...devops, ...tools].map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
