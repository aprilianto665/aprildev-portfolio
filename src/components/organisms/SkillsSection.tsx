import Card from '../molecules/Card';
import Icon from '../atoms/Icon';
import SkillItem from '../molecules/SkillItem';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "frontend" as const,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend", 
      icon: "backend" as const,
      skills: ["Java", "Golang", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & Others",
      icon: "tools" as const,
      skills: ["Git", "Amazon Web Services", "Microsoft Azure", "Postman", "Jest"]
    }
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <Icon name={category.icon} className="w-8 h-8 mb-4 text-orange-500" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <SkillItem key={skill} skill={skill} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}