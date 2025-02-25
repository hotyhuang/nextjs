export interface ImageItem {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}

export const images: ImageItem[] = [
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
  }
]; 