'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';

import { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_6px,#fcfbf9_6px,#fcfbf9_12px)] border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] outline outline-1 outline-black/30 outline-offset-[-4px] p-6 sm:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-amber-200 border-2 border-black rounded-full font-extrabold text-2xl text-black hover:bg-amber-300 z-20 cursor-pointer"
        >
          ×
        </button>
        
        <div className="pr-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6">
            {project.title}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 font-bold mb-6 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="mb-6">
                <h2 className="text-xl font-extrabold text-black mb-3">
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
                <Button href={project.github} disabled={!project.github}>
                  View on GitHub
                </Button>
                <Button href={project.demo} disabled={!project.demo} variant="outline">
                  Live Demo
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="border-2 border-black rounded-xl overflow-hidden bg-white p-2 mb-4">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  width={800}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="w-full h-auto max-w-2xl mx-auto object-contain rounded-lg"
                />
              </div>
              {project.images.length > 1 && (
                <div className="flex gap-2 justify-center overflow-x-auto w-full">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`border-2 border-black rounded-lg overflow-hidden shrink-0 transition-transform ${
                        currentImageIndex === index
                          ? "scale-105 bg-amber-200"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        width={80}
                        height={60}
                        className="object-cover w-20 h-14"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}