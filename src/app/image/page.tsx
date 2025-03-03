import Image from "next/image";
import Link from "next/link";
import { fetchImages } from "./actions";
import { Suspense } from "react";

// Loading component for Suspense
function ImageGallerySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
      ))}
    </div>
  );
}

// Gallery component that fetches data
async function ImageGallery() {
  const images = await fetchImages();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <Link 
          key={image.id} 
          href={`/image/${image.id}`}
          className="block relative aspect-square hover:opacity-80 transition-opacity rounded-lg overflow-hidden shadow-md"
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
  );
}

export default function ImagePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      <Suspense fallback={<ImageGallerySkeleton />}>
        <ImageGallery />
      </Suspense>
    </div>
  );
} 