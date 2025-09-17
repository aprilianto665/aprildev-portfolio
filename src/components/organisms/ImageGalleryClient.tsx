"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryClientProps {
  images: string[];
  title: string;
}

export default function ImageGalleryClient({
  images,
  title,
}: ImageGalleryClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="mb-8">
      <Image
        src={images[currentImageIndex]}
        alt={title}
        width={800}
        height={400}
        sizes="(max-width: 768px) 100vw, 800px"
        className="w-full h-auto max-w-2xl mx-auto object-contain rounded-lg mb-4"
      />
      {images.length > 1 && (
        <div className="flex gap-2 justify-center overflow-x-auto w-full">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`border-2 rounded-lg overflow-hidden shrink-0 ${
                currentImageIndex === index
                  ? "border-orange-500"
                  : "border-gray-300"
              }`}
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                width={80}
                height={60}
                className="object-cover w-20 h-14"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
