'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t('softwareEngineerIntern'),
      company: t('oracle'),
      location: t('casablanca'),
      period: t('julOct2025'),
      description: [
        t('oracleDesc1'),
        t('oracleDesc2'),
      ],
      technologies: ['Micronaut', 'Python', 'TypeScript'],
      color: 'from-orange-500 to-red-600',
    },
    {
      title: t('fullStackDev'),
      company: t('paycab'),
      location: t('belgium'),
      period: t('sepMay2025'),
      description: [
        t('paycabDesc1'),
        t('paycabDesc2'),
      ],
      technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Git'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('softwareEngineerIntern'),
      company: t('healthMinistry'),
      location: t('rabat'),
      period: t('junAug2024'),
      description: [
        t('healthDesc1'),
        t('healthDesc2'),
      ],
      technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'Git'],
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section className="py-32 px-6" id="experience">
      <div className="container mx-auto max-w-7xl">
  <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-4 font-space-grotesk">
          {t('myExperience')} <span className="text-[#64FFDA]">{t('experience')}</span>
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto mt-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#CCD6F6] mb-2 font-space-grotesk">
                    {exp.title}
                  </h3>
                  <p className="text-[#64FFDA] text-lg font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[#8892B0] text-sm">
                    {exp.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-[#8892B0] text-sm font-mono">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8892B0] leading-relaxed">
                    <span className="text-[#64FFDA] mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
