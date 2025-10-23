'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: 'oracle',
      company: t('oracle'),
      title: t('softwareEngineerIntern'),
      location: t('casablanca'),
      period: t('julOct2025'),
      description: [
        t('oracleDesc1'),
        t('oracleDesc2'),
      ],
      technologies: ['Micronaut', 'Python', 'TypeScript'],
    },
    {
      id: 'paycab',
      company: t('paycab'),
      title: t('fullStackDev'),
      location: t('belgium'),
      period: t('sepMay2025'),
      description: [
        t('paycabDesc1'),
        t('paycabDesc2'),
      ],
      technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Git'],
    },
    {
      id: 'health',
      company: t('healthMinistry'),
      title: t('softwareEngineerIntern'),
      location: t('rabat'),
      period: t('junAug2024'),
      description: [
        t('healthDesc1'),
        t('healthDesc2'),
      ],
      technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'Git'],
    },
    {
      id: 'seomaniak',
      company: t('seomaniak'),
      title: t('fullStackDevIntern'),
      location: t('seomaniakCity'),
      period: t('aprJun2023'),
      description: [
        t('seomaniakDesc1'),
        t('seomaniakDesc2'),
        t('seomaniakDesc3'),
      ],
      technologies: ['Laravel', 'PHP', 'JavaScript', 'Figma', 'Git'],
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6" id="experience">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-4 font-space-grotesk">
          {t('myExperience')} <span className="text-[#64FFDA]">{t('experience')}</span>
        </h2>

        <div className="max-w-5xl mx-auto mt-16">
          {/* macOS Window Container */}
          <div className="bg-[#112240] rounded-xl border border-[#64FFDA]/20 overflow-hidden shadow-2xl">
            {/* macOS Window Header */}
            <div className="bg-[#0d1b2a] border-b border-[#64FFDA]/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[#8892B0] text-sm font-mono">experience.app</span>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-[#0d1b2a]/50 border-b border-[#64FFDA]/10">
              <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#64FFDA]/20 scrollbar-track-transparent">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                      activeTab === index
                        ? 'text-[#64FFDA]'
                        : 'text-[#8892B0] hover:text-[#CCD6F6]'
                    }`}
                  >
                    {exp.company}
                    {activeTab === index && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#64FFDA]"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area with Scroll */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#64FFDA]/20 scrollbar-track-transparent"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#CCD6F6] mb-2 font-space-grotesk">
                        {experiences[activeTab].title}
                      </h3>
                      <p className="text-[#64FFDA] text-lg font-medium mb-1">
                        {experiences[activeTab].company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-[#8892B0] text-sm">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {experiences[activeTab].location}
                        </span>
                        <span className="font-mono">{experiences[activeTab].period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-4">
                      {experiences[activeTab].description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-[#8892B0] leading-relaxed"
                        >
                          <span className="text-[#64FFDA] mt-1 text-lg">▹</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="pt-4">
                      <p className="text-[#CCD6F6] text-sm font-semibold mb-3">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {experiences[activeTab].technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded-full font-mono border border-[#64FFDA]/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
