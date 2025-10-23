'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A192F]/80 backdrop-blur-md border-b border-[#64FFDA]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold font-space-grotesk">
            <span className="text-[#CCD6F6]">anou</span>
            <span className="text-[#64FFDA] ml-1">.</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('education')}
              className="text-[#CCD6F6] text-sm font-medium hover:text-[#64FFDA] transition-colors"
            >
              {t('education')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[#CCD6F6] text-sm font-medium hover:text-[#64FFDA] transition-colors"
            >
              {t('experience')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#CCD6F6] text-sm font-medium hover:text-[#64FFDA] transition-colors"
            >
              {t('projects')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-[#CCD6F6] text-sm font-medium hover:text-[#64FFDA] transition-colors"
            >
              {t('skills')}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="relative inline-flex items-center gap-3 cursor-pointer group"
            >
              {/* Label */}
              <span className="text-[#CCD6F6] text-sm font-medium">
                {language === 'en' ? 'EN' : 'FR'}
              </span>
              
              {/* Toggle Switch */}
              <div className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                language === 'fr' ? 'bg-[#64FFDA]' : 'bg-[#8892B0]/30'
              }`}>
                {/* Switch Circle */}
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  language === 'fr' ? 'translate-x-7' : 'translate-x-0'
                }`}>
                </div>
              </div>
              
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
