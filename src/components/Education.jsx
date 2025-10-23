'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Education() {
  const { t } = useLanguage();

  const items = [
    { id: 'inpt', titleKey: 'inpt', periodKey: 'inptPeriod', degreeKey: 'inptDegree', locationKey: 'inptLocation', link: 'https://www.inpt.ac.ma/' },
    { id: 'est', titleKey: 'est', periodKey: 'estPeriod', degreeKey: 'estDegree', locationKey: 'estLocation', link: 'http://esto.ump.ma/' },
    { id: 'fst', titleKey: 'fst', periodKey: 'fstPeriod', degreeKey: 'fstDegree', locationKey: 'fstLocation', link: 'https://www.fsth.ma/' },
  ];

  const containerRef = React.useRef(null);
  const fillRef = React.useRef(null);
  const dotRefs = React.useRef([]);

  React.useEffect(() => {
    const el = containerRef.current;
    const fill = fillRef.current;
    if (!el || !fill) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      
      // Calculate how much of the container has been scrolled through
      // When container top reaches viewport top, start filling
      // When container bottom reaches viewport center, reach 100%
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const triggerPoint = vh * 0.5; // middle of viewport
      
      let progress = 0;
      if (containerTop < triggerPoint) {
        const scrolled = triggerPoint - containerTop;
        progress = Math.min(scrolled / containerHeight, 1);
      }
      
      fill.style.transform = `scaleY(${progress})`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-idx'));
          const dot = dotRefs.current[idx];
          if (!dot) return;
          if (entry.isIntersecting) {
            dot.classList.add('bg-[#64FFDA]', 'border-[#64FFDA]');
          } else {
            dot.classList.remove('bg-[#64FFDA]', 'border-[#64FFDA]');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll('[data-idx]') || [];
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6" id="education">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-4 flex items-center justify-center gap-3 font-space-grotesk">
            <svg className="w-10 h-10 text-[#64FFDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            {t('education')}
          </h2>
        </div>

        {/* Timeline container */}
        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          {/* base line */}
          <Separator orientation="vertical" className="absolute left-2 top-4 bottom-4" />
          {/* fill line (animated with scroll) */}
          <div className="absolute left-2 top-4 bottom-4 w-px overflow-hidden" aria-hidden="true">
            <div 
              ref={fillRef} 
              className="w-full h-full bg-[#64FFDA] origin-top transition-transform duration-300 ease-out" 
              style={{ transform: 'scaleY(0)' }} 
            />
          </div>

          <ol>
            {items.map((it, index) => (
              <li key={it.id} className="relative mb-12 pl-8">
                {/* dot */}
                <div
                  ref={(el) => (dotRefs.current[index] = el)}
                  className="absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full border-2 border-[#233554] bg-[#0A192F] transition-all duration-300"
                />

                {/* period label to the left of the dot (desktop) */}
                <span className="hidden md:block absolute -left-40 top-1 text-sm font-semibold text-[#CCD6F6] whitespace-nowrap">
                  {t(it.periodKey)}
                </span>

                {/* mobile period above */}
                <div className="md:hidden text-xs text-[#CCD6F6] mb-1 font-medium">
                  {t(it.periodKey)}
                </div>

                <h4 className="rounded-xl py-1 text-xl font-bold tracking-tight text-[#CCD6F6]">
                  {t(it.degreeKey)}
                </h4>

                <a 
                  href={it.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block my-4 group/card"
                >
                  <Card className="border border-[#64FFDA]/20 hover:border-[#64FFDA]/40 bg-[#0b1a2a]/60 transition-all hover:translate-x-1">
                    <CardContent className="px-4 py-4">
                      {/* subtitle with location icon, institute and city */}
                      <div className="flex items-start gap-2 text-[#8892B0]">
                        {/* map pin icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-4 w-4 flex-none text-[#8892B0]"
                        >
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div className="text-sm flex-1">
                          <div className="font-medium group-hover/card:text-[#64FFDA] transition-colors">
                            {t(it.titleKey)}
                          </div>
                          <div className="opacity-80">
                            {t(it.locationKey)}
                          </div>
                        </div>
                        {/* external link icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 flex-none text-[#8892B0] opacity-0 group-hover/card:opacity-100 transition-opacity"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                {/* invisible target for intersection to toggle the dot */}
                <div data-idx={index} className="absolute -top-10 h-32 w-px left-2 opacity-0" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
