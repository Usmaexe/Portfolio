'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  const getSlides = () => [
    { text: t('problemSolver'), duration: 1000 },
    { text: t('softwareEngineer'), duration: 2000 },
    { text: t('youngDreamer'), duration: 1000 }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = getSlides();

  useEffect(() => {
    const currentSlide = slides[currentIndex];
    
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 200); // Blur transition duration
    }, currentSlide.duration);

    return () => clearTimeout(timer);
  }, [currentIndex, slides]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="relative inline-block">
                {/* Cyan background rectangle */}
                <div className="absolute inset-0 bg-[#64FFDA]/20 rounded-md -z-10 blur-sm"></div>
                <p 
                  className={`text-[#64FFDA] text-sm uppercase tracking-wider font-mono px-4 py-2 transition-all duration-500 ${
                    isTransitioning ? 'blur-sm opacity-0' : 'blur-0 opacity-100'
                  }`}
                >
                  {slides[currentIndex].text}
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk leading-tight">
                <span className="text-[#CCD6F6]">{t('helloIm')}</span>
                <br />
                <span className="text-[#64FFDA]">Oussama</span>
                <br />
                <span className="text-[#64FFDA]">Anou</span>
              </h1>
            </div>

            <p className="text-[#8892B0] text-lg max-w-xl leading-relaxed">
              {t('heroDescription')}
            </p>

            {/* Download CV Button */}
            <div className="flex items-center gap-6">
              <a
                href="/ANOU_Oussama.pdf"
                download="ANOU_Oussama.pdf"
                aria-label={t('downloadCV')}
                className="flex items-center gap-2 border-2 border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all"
              >
                <span>{t('downloadCV')}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/Usmaexe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-[#64FFDA] flex items-center justify-center hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-[#64FFDA] group-hover:text-[#0A192F]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/oussama-anou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-[#64FFDA] flex items-center justify-center hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-[#64FFDA] group-hover:text-[#0A192F]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:oussamanou30@gmail.com"
                  className="w-12 h-12 rounded-full border border-[#64FFDA] flex items-center justify-center hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-[#64FFDA] group-hover:text-[#0A192F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Animated border circle */}
              <div className="absolute inset-0 rounded-full border-4 border-[#64FFDA] animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-[#64FFDA]/30"></div>
              
              {/* Profile image placeholder */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[#64FFDA] to-[#0A192F] p-1">
                <div className="w-full h-full rounded-lg bg-[#0A192F] flex items-center justify-center overflow-hidden">
                  <img src="img/me.jpg" className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-500" alt="Oussama Anou" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
