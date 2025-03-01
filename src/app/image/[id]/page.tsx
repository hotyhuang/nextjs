import Image from "next/image";
import { images } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ImageDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const image = images.find((img) => img.id === id);

  if (!image) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <Link href="/image" className="text-blue-500 hover:underline mb-4 block">
        ← Back to Gallery
      </Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
        <div className="relative aspect-square mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain dark:invert"
          />
        </div>
        <p className="text-lg">{image.description}</p>
      </div>
    </div>
  );
} 