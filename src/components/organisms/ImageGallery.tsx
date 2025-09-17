import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  return (
    <div className="mb-8">
      <Image
        src={images[0]}
        alt={title}
        width={800}
        height={400}
        sizes="(max-width: 768px) 100vw, 800px"
        className="w-full h-auto object-contain rounded-lg mb-4"
      />
      {images.length > 1 && (
        <div className="flex gap-2 justify-center overflow-x-auto w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="border-2 rounded-lg overflow-hidden border-gray-300 shrink-0"
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                width={80}
                height={60}
                className="object-cover w-20 h-14"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
