'use client';

export default function Journey() {
  const journeyItems = [
    {
      year: '2025',
      description:
        "It's been quite an exciting year! While studying at uni and working, I developed core dealer-broker systems and successfully organized annual general meetings online for around 10 companies including Khan Bank. I was fortunate to win the FIBO Cloud scholarship among 200+ students, and separately, completed a one-month internship in Japan at Academic Express, where I worked entirely in Japanese! On the side, I've been working with friends on various business projects. It's been challenging balancing everything, but I'm loving every moment of growth and learning.",
      images: [
        { type: 'project', title: 'GOBI Deluxe Hotel & Resort' },
        { type: 'award', title: 'FIBO Cloud Scholarship' },
      ],
    },
    {
      year: '2024',
      description:
        'Designed and successfully implemented the architecture for a real-time mining commodity exchange system. The system was audited and has an ISO-compliant secure Back-end system. Also implemented non-functional requirements such as periodic archiving and operation logging. This was my first major successful project implementation.',
      images: [{ type: 'system', title: 'Mining Exchange System' }],
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          My journey report
        </h2>
        <p className="text-gray-400 max-w-2xl mb-16">
          I've had the opportunity to develop software across a variety of
          settings — from small side-jobs to large corporation, mostly building
          financial systems. Here's my timeline of my journey
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>

          {journeyItems.map((item, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Year indicator */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-4 border-blue-500 flex items-center justify-center relative z-10">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <h3 className="text-4xl font-bold text-gray-600 ml-8">
                  {item.year}
                </h3>
              </div>

              {/* Content */}
              <div className="ml-32">
                <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
                  {item.description}
                </p>

                {/* Images Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {item.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all"
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                        <p className="text-white font-semibold text-center px-4">
                          {image.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
