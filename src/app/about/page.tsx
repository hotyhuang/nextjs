export default function About() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        Founded in 2020, our company has been at the forefront of innovation in the tech industry. 
        We specialize in creating cutting-edge web applications using the latest technologies.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
      <p className="mb-6">
        Our mission is to build software that makes a difference. We believe in creating 
        intuitive, accessible, and powerful tools that help businesses and individuals thrive 
        in the digital age.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
      <p className="mb-6">
        Our diverse team of developers, designers, and product specialists work together 
        to deliver exceptional results. With expertise across multiple domains, we approach 
        each project with creativity and technical excellence.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Innovation at every step</li>
            <li>Quality over quantity</li>
            <li>User-centered design</li>
            <li>Continuous improvement</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js & React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Node.js & Express</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 