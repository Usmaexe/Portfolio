'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('studentGradesApp'),
      role: t('creator'),
      description: [
        t('gradesDesc1'),
        t('gradesDesc2'),
      ],
      technologies: ['Spring Boot', 'React', 'Docker', 'Docker Swarm', 'Kubernetes'],
      link: '#',
    },
    {
      title: t('ineAlumni'),
      role: t('contributor'),
      description: [
        t('alumniDesc1'),
        t('alumniDesc2'),
      ],
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'GitHub'],
      link: '#',
    },
  ];

  return (
    <section className="py-32 px-6" id="projects">
      <div className="container mx-auto max-w-7xl">
  <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-4 font-space-grotesk">
          {t('featured')} <span className="text-[#64FFDA]">{t('projects')}</span>
        </h2>
        <p className="text-[#8892B0] text-center max-w-2xl mx-auto mb-16">
          {t('selectionOfProjects')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl overflow-hidden hover:border-[#64FFDA] transition-all group"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-[#0A192F] to-[#112240] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="bg-[#64FFDA]/10 rounded-lg p-8 inline-block border border-[#64FFDA]/20">
                      <p className="text-[#64FFDA] font-bold text-lg font-space-grotesk">{project.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#CCD6F6] font-space-grotesk">
                    {project.title}
                  </h3>
                  <span className="text-[#64FFDA] text-sm font-mono">{project.role}</span>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#8892B0] text-sm leading-relaxed">
                      <span className="text-[#64FFDA] mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors group"
                >
                  <span className="font-medium font-mono text-sm">{t('viewProject')}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
