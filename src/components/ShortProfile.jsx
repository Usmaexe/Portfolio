'use client';

export default function ShortProfile() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Short Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Description & Image */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-white text-lg leading-relaxed mb-6">
                  Developer who has built clean, reliable systems for e-commerce, real-time auctions, and stock exchanges
                </p>
                {/* Laptop mockup placeholder */}
                <div className="bg-gray-900 rounded-lg p-4 border-2 border-gray-700">
                  <div className="bg-blue-900 rounded p-4 text-xs text-gray-300 font-mono">
                    <div className="text-yellow-400 mb-2">GOBI Deluxe Hotel & Resort</div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Architect Card */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Software Architect designer
              </h3>
              <div className="w-16 h-16 bg-gray-800 rounded-lg mt-4"></div>
            </div>
          </div>

          {/* Right Side - Skills & Tech Stack */}
          <div className="space-y-8">
            {/* Languages */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Fluent in Japanese, English, and Mongolian
              </h3>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-3">My primary tech stack</p>
                <h3 className="text-3xl font-bold text-white mb-6">NEXT.JS</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-white font-medium">Express</span>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-white font-medium">.NET</span>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-white font-medium">Typescript</span>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-white font-medium">Python</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Do you want to ask a question?
              </h3>
              <button className="bg-black/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-black/50 transition-all flex items-center gap-2 mx-auto">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy my email address
              </button>
            </div>
          </div>
        </div>

        {/* Code Example Card */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-2">The Inside Scoop</p>
              <h3 className="text-2xl font-bold text-white mb-4">
                Currently learning at university while working
              </h3>
            </div>

            {/* Code snippet */}
            <div className="bg-[#0d1117] rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-4">// Importing a single module</div>
              <div className="text-purple-400">
                import <span className="text-yellow-400">moduleName</span>{' '}
                <span className="text-purple-400">from</span>
              </div>
              <div className="text-green-400 ml-4">'modulePath';</div>

              <div className="text-gray-500 my-4">// Importing multiple modules</div>
              <div className="text-purple-400">
                import {'{'} <span className="text-yellow-400">module1, module2</span> {'}'}{' '}
                <span className="text-purple-400">from</span>
              </div>
              <div className="text-green-400 ml-4">'modulePath';</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
