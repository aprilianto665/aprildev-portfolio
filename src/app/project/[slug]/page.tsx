import { notFound } from 'next/navigation';
import Image from 'next/image';
import Layout from '../../../components/templates/Layout';
import Badge from '../../../components/atoms/Badge';
import Button from '../../../components/atoms/Button';
import { projects } from '../../../data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-8">
          <Button href="/#projects">← Back to Projects</Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          
          <div className="mb-8">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              className="w-full object-contain rounded-lg"
            />
          </div>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {project.fullDescription}
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-4">
            <Button href={project.github}>
              View on GitHub
            </Button>
            <Button href={project.demo}>
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}