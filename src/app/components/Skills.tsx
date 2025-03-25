'use client';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    category: 'Tools & Others',
    technologies: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skillCategory, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300"
        >
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6">
            {skillCategory.category}
          </h3>
          <div className="space-y-4">
            {skillCategory.technologies.map((tech, techIndex) => (
              <div key={techIndex}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {tech.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-all duration-500 relative"
                    style={{ width: `${tech.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 