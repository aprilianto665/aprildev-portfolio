'use client';

import { useState, useCallback } from 'react';
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Card from "../molecules/Card";
import ProjectModal from './ProjectModal';
import { projects, Project } from "../../data/projects";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 }
    }
  });

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] min-w-0"
              >
                <Card className="flex flex-col justify-between gap-4 h-full">
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
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10 cursor-pointer"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
