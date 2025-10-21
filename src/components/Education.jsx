'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Education() {
  const { t } = useLanguage();
  
  return (
    <section className="py-32 px-6" id="education">
      <div className="container mx-auto max-w-7xl">
        {/* Education Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-4 flex items-center justify-center gap-3 font-space-grotesk">
            <svg
              className="w-10 h-10 text-[#64FFDA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            {t('education')}
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* INPT Card */}
          <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#CCD6F6] font-space-grotesk">
                {t('inpt')}
              </h3>
            </div>
            <p className="text-[#64FFDA] text-sm mb-3 font-mono">
              {t('inptPeriod')}
            </p>
            <p className="text-[#8892B0] text-sm mb-6 leading-relaxed">
              {t('inptDegree')}
            </p>
            <p className="text-[#8892B0] text-xs">
              {t('inptLocation')}
            </p>
          </div>

          {/* EST Card */}
          <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#CCD6F6] font-space-grotesk">
                {t('est')}
              </h3>
            </div>
            <p className="text-[#64FFDA] text-sm mb-3 font-mono">
              {t('estPeriod')}
            </p>
            <p className="text-[#8892B0] text-sm mb-6 leading-relaxed">
              {t('estDegree')}
            </p>
            <p className="text-[#8892B0] text-xs">
              {t('estLocation')}
            </p>
          </div>

          {/* Faculty Card */}
          <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#CCD6F6] font-space-grotesk">
                {t('fst')}
              </h3>
            </div>
            <p className="text-[#64FFDA] text-sm mb-3 font-mono">
              {t('fstPeriod')}
            </p>
            <p className="text-[#8892B0] text-sm mb-6 leading-relaxed">
              {t('fstDegree')}
            </p>
            <p className="text-[#8892B0] text-xs">
              {t('fstLocation')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
