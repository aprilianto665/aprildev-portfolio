import Card from '../molecules/Card';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import { projects } from '../../data/projects';

export default function ProjectsSection() {

  return (
    <div id="projects" className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          My <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Some of the projects I&apos;ve worked on during my learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div>
              <Button href={`/project/${project.slug}`}>
                View Project
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}