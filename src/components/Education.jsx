'use client';

export default function Education() {
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
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* INPT Card */}
          <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#CCD6F6] font-space-grotesk">
                National Institute of Posts and Telecommunications
              </h3>
            </div>
            <p className="text-[#64FFDA] text-sm mb-3 font-mono">
              Sep 2023 – Present
            </p>
            <p className="text-[#8892B0] text-sm mb-6 leading-relaxed">
              Engineering Degree, Advanced Software Engineering for Digital Services
            </p>
            <p className="text-[#8892B0] text-xs">
              Rabat, Morocco
            </p>
          </div>

          {/* EST Card */}
          <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#CCD6F6] font-space-grotesk">
                Higher School of Technology
              </h3>
            </div>
            <p className="text-[#64FFDA] text-sm mb-3 font-mono">
              Oct 2021 – Jul 2023
            </p>
            <p className="text-[#8892B0] text-sm mb-6 leading-relaxed">
              University Technical Diploma, Computer Application Development
            </p>
            <p className="text-[#8892B0] text-xs">
              Oujda, Morocco
            </p>
          </div>

          {/* Faculty Card */}
          <div className="bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-8 hover:border-[#64FFDA] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#CCD6F6] font-space-grotesk">
                Faculty of Science and Technology
              </h3>
            </div>
            <p className="text-[#64FFDA] text-sm mb-3 font-mono">
              Oct 2020 – Jul 2021
            </p>
            <p className="text-[#8892B0] text-sm mb-6 leading-relaxed">
              First-Year DEUST in Mathematics, Computer Science, and Physics
            </p>
            <p className="text-[#8892B0] text-xs">
              Al-Hoceima, Morocco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
