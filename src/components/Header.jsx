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
            <a
              href="#professional"
              className="text-[#64FFDA] text-sm font-medium hover:text-[#64FFDA]/80 transition-colors border-b-2 border-[#64FFDA] pb-1"
            >
              {t('professional')}
            </a>
            <a
              href="#personal"
              className="text-[#CCD6F6] text-sm font-medium hover:text-[#64FFDA] transition-colors"
            >
              {t('personal')}
            </a>
            <a
              href="#contact"
              className="text-[#CCD6F6] text-sm font-medium hover:text-[#64FFDA] transition-colors"
            >
              {t('contact')}
            </a>
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
              
              {/* Language Icon */}
              <svg
                className="w-5 h-5 text-[#64FFDA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
