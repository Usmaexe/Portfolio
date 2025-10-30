'use client';

import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring physics for scroll animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect - moves slower than scroll
  const y = useTransform(smoothProgress, [0, 1], [100, -100]);
  
  // 3D rotation based on scroll
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-10, 0, 10]);
  
  // Scale and opacity
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        rotateX,
        rotateY,
        scale,
        opacity,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="perspective-1000"
    >
      <motion.div
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          rotateX: -5,
          transition: { duration: 0.3 }
        }}
        className="transform-gpu"
      >
        <Card className="border border-[#64FFDA]/20 hover:border-[#64FFDA]/60 bg-[#0b1a2a]/80 backdrop-blur-sm transition-all duration-300 overflow-hidden group h-full">
          <CardContent className="p-0">
            {/* Project Visual Header with Gradient */}
            <motion.div 
              className="relative h-48 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1a365d] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated background circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#64FFDA]/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#64FFDA]/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <motion.div
                  className="bg-[#64FFDA]/10 rounded-xl p-6 border border-[#64FFDA]/30 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(100, 255, 218, 0.2)",
                    borderColor: "rgba(100, 255, 218, 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="text-[#64FFDA] font-bold text-lg font-space-grotesk text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.p>
                </motion.div>
              </div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#64FFDA]/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>

            {/* Project Details */}
            <div className="p-6">
              {/* Header with role badge */}
              <div className="flex items-start justify-between mb-4">
                <motion.h3 
                  className="text-xl font-bold text-[#CCD6F6] font-space-grotesk flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.span
                  className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded-full font-mono border border-[#64FFDA]/30 ml-2 whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(100, 255, 218, 0.2)" }}
                >
                  {project.role}
                </motion.span>
              </div>

              {/* Description with stagger animation */}
              <ul className="space-y-3 mb-6">
                {project.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-[#8892B0] text-sm leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 5, color: "#CCD6F6" }}
                  >
                    <motion.span 
                      className="text-[#64FFDA] mt-1"
                      animate={{ 
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      ▹
                    </motion.span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Technologies with stagger and hover effects */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded-full font-mono border border-[#64FFDA]/20"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "rgba(100, 255, 218, 0.2)",
                      borderColor: "rgba(100, 255, 218, 0.6)",
                      y: -5
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Animated Link */}
              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 text-[#64FFDA] group/link relative"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="font-medium font-mono text-sm relative z-10">View Project</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
                
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-[#64FFDA]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
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
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden" id="projects">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] text-center mb-4 font-space-grotesk">
            {t('featured')} <span className="text-[#64FFDA]">{t('projects')}</span>
          </h2>
          <motion.p 
            className="text-[#8892B0] text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('selectionOfProjects')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
