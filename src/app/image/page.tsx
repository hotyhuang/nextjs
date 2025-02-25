import Image from "next/image";
import Link from "next/link";
import { images } from "./data";

export default function ImagePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Link 
            key={image.id} 
            href={`/image/${image.id}`}
            className="block relative aspect-square hover:opacity-80 transition-opacity"
          >
            <div className="relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain dark:invert"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
              <h2 className="text-lg font-semibold">{image.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 