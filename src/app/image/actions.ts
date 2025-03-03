'use server'

import { ImageItem } from './data';

// Simulate a database or API fetch with some delay
export async function fetchImages(): Promise<ImageItem[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the mock data
  return [
    {
      id: "next-logo",
      title: "Next.js Logo",
      description: "The iconic logo of the Next.js framework",
      src: "/next.svg",
      alt: "Next.js logo"
    },
    {
      id: "vercel-logo",
      title: "Vercel Logo",
      description: "The logo of Vercel, the company behind Next.js",
      src: "/vercel.svg",
      alt: "Vercel logo"
    },
    {
      id: "react-logo",
      title: "React Logo",
      description: "The logo of the React library",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      alt: "React logo"
    },
    {
      id: "typescript-logo",
      title: "TypeScript Logo",
      description: "The logo of the TypeScript language",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      alt: "TypeScript logo"
    }
  ];
}

// Fetch a single image by ID
export async function fetchImageById(id: string): Promise<ImageItem | null> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const images = await fetchImages();
  return images.find(img => img.id === id) || null;
} 