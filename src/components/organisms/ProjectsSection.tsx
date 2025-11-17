'use client';

import { useState } from 'react';
import Image from "next/image";
import Card from "../molecules/Card";
import ProjectModal from './ProjectModal';
import { projects, Project } from "../../data/projects";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          My <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Some of the projects I&apos;ve worked on
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col justify-between gap-4">
            <div className="w-full aspect-video flex-shrink-0 rounded-lg overflow-hidden relative">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <div>
                {project.status === "completed" ? (
                  <button 
                    onClick={() => handleViewProject(project)}
                    className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
                  >
                    View Project →
                  </button>
                ) : (
                  <span className="text-gray-400 font-medium">
                    In Progress
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
