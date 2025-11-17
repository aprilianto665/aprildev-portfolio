import { notFound } from 'next/navigation';
import Layout from '../../../components/templates/Layout';
import Button from '../../../components/atoms/Button';
import Badge from '../../../components/atoms/Badge';
import ImageGalleryClient from '../../../components/organisms/ImageGalleryClient';
import { projects } from '../../../data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-8 py-16 min-h-screen flex flex-col justify-center">
        <div className="mb-8">
          <Button href="/#projects">← Back to Projects</Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {project.title}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index}>
                      {tech}
                    </Badge>
                  ))}
                </div>
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
            
            <div className="flex items-center">
              <ImageGalleryClient images={project.images} title={project.title} />
            </div>
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