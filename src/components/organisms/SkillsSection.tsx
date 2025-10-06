import Card from "../molecules/Card";
import Icon from "../atoms/Icon";
import SkillItem from "../molecules/SkillItem";
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

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 md:auto-rows-[1fr] lg:auto-rows-[1fr] gap-8">
        <Card className="md:col-span-4 lg:col-span-4">
          <Icon name="languages" className="w-8 h-8 mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Languages
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {languages.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2">
          <Icon name="frontend" className="w-8 h-8 mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
          <div className="space-y-3">
            {frontend.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2">
          <Icon name="backend" className="w-8 h-8 mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
          <div className="space-y-3">
            {backend.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2">
          <Icon name="container" className="w-8 h-8 mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps</h3>
          <div className="space-y-3">
            {devops.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
        </Card>

        <Card className="md:col-span-4 lg:col-span-4">
          <Icon name="tools" className="w-8 h-8 mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Tools & Others
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {tools.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
