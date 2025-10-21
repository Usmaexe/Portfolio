'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  
  const skills = {
    languages: ['C++', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'PHP'],
    frameworks: ['React', 'Spring Boot', 'Laravel', 'Next.js'],
    technologies: ['Docker', 'Kubernetes', 'Figma', 'Git'],
  };

  const certifications = [
    {
      title: t('oracleJavaCert'),
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B13F98A95CBA19438942D4A792B8EDF84FF760B915F4E83823F6B6AAB721F5AC',
    },
    {
      title: t('oracleCloudCert'),
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B437EA6CF73B5CF09C2C1DC10C4E899A19D767E837ACD7DE88F7F6EBE6CBB421',
    },
  ];

  return (
    <section className="py-32 px-6" id="skills">
      <div className="container mx-auto max-w-7xl">
        {/* Skills Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-16 font-space-grotesk">
            {t('technical')} <span className="text-[#64FFDA]">{t('skills')}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Languages */}
            <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all">
              <h3 className="text-xl font-bold text-[#CCD6F6] mb-6 font-space-grotesk">
                {t('languages')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#64FFDA]/10 text-[#64FFDA] text-sm rounded-lg font-mono hover:bg-[#64FFDA]/20 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all">
              <h3 className="text-xl font-bold text-[#CCD6F6] mb-6 font-space-grotesk">
                {t('frameworks')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#64FFDA]/10 text-[#64FFDA] text-sm rounded-lg font-mono hover:bg-[#64FFDA]/20 transition-colors"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all">
              <h3 className="text-xl font-bold text-[#CCD6F6] mb-6 font-space-grotesk">
                {t('technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#64FFDA]/10 text-[#64FFDA] text-sm rounded-lg font-mono hover:bg-[#64FFDA]/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-16 font-space-grotesk">
            <span className="text-[#64FFDA]">{t('certifications')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#64FFDA]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#CCD6F6] font-medium">
                    {cert.title}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#64FFDA] opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
