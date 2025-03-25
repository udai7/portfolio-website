'use client';

import Image from 'next/image';

const projects = [
  {
    title: 'OatMeal',
    description: 'A moderne web application to build Resume with the Help of AI built with Next.js and TypeScript.',
    image: '/project1.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'PDF Chatbot',
    description: 'A user friendly chatbot that can read PDF files and answer questions about the content that allows multiple PDF Uploads.',
    image: '/project2.png',
    technologies: ['Python', 'Langchain', 'Streamlit', 'Gemini API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Cancer Cell Classifier',
    description: 'A user friendly web application made to assist cancer researchers to catergorize cancer cells efficiently.',
    image: '/project3.png',
    technologies: ['Sklearn', 'Pandas', 'Streamlit', 'Matplotlib', 'NumPy'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="relative h-48 bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
              }}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Live Demo →
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 font-medium"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 