'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Mongolian Bond Market',
      description: 'Listing page of Mongolian Bonds&Orders',
      image: '/project1.png',
      link: '#',
      technologies: ['Next.js', 'Express', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'Mining Auction System',
      description: 'A real-time auction of products such as coal, iron on MSE',
      image: '/project2.png',
      link: '#',
      technologies: ['Next.js', 'Express', 'TypeScript', 'Socket.io', 'MongoDB'],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          A small selection of{' '}
          <span className="text-[#00ffa3]">of recent projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00ffa3]/50 transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for project screenshot */}
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="bg-blue-800 rounded-lg p-6 inline-block">
                        <p className="text-white font-semibold">Project Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Tech icons placeholders */}
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs text-[#00ffa3]">N</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs text-[#00ffa3]">E</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs text-[#00ffa3]">T</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs text-[#00ffa3]">S</span>
                  </div>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#00ffa3] hover:text-[#00ffa3]/80 transition-colors group"
                >
                  <span className="font-medium">Check Live Site</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
