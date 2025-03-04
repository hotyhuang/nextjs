import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchImageById } from "../actions";
import { Suspense } from "react";

// Loading component for Suspense
function ImageDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mb-4"></div>
      <div className="aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg mb-4"></div>
      <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded mb-2"></div>
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
    </div>
  );
}

// Image detail component that fetches data
async function ImageDetail({ id }: { id: string }) {
  const image = await fetchImageById(id);
  
  if (!image) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
      <div className="relative aspect-square mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain dark:invert"
        />
      </div>
      <p className="text-lg">{image.description}</p>
    </div>
  );
}

export default async function ImageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  return (
    <div className="min-h-screen p-8">
      <Link href="/image" className="text-blue-500 hover:underline mb-4 block">
        ← Back to Gallery
      </Link>
      <Suspense fallback={<ImageDetailSkeleton />}>
        <ImageDetail id={id} />
      </Suspense>
    </div>
  );
} 