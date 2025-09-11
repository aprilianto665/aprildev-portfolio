'use client';
import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryClientProps {
  images: string[];
  title: string;
}

export default function ImageGalleryClient({ images, title }: ImageGalleryClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="mb-8">
      <Image
        src={images[currentImageIndex]}
        alt={title}
        width={600}
        height={300}
        className="max-w-2xl mx-auto object-contain rounded-lg mb-4"
      />
      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`border-2 rounded-lg overflow-hidden ${currentImageIndex === index ? 'border-orange-500' : 'border-gray-300'}`}
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                width={80}
                height={60}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}