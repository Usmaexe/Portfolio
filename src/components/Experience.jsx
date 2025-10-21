'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Engineer',
      description:
        'Deployed two projects as a team leader, and built a real-time auction interface. Continuously improving UX, now exploring Framer Motion for animations.',
      icon: '👨‍💻',
      color: 'from-pink-500 to-purple-600',
    },
    {
      title: 'Backend Engineer',
      description:
        'Built multiple monolith, microservices systems with ISO-secure authentication. Integrated APIs to fine tune my apps.',
      icon: '🔮',
      color: 'from-orange-500 to-pink-500',
    },
    {
      title: 'Teammate',
      description:
        'Worked with stakeholders to develop Mining Commodity Exchange System. Led development team, and deployed projects successfully',
      icon: '💡',
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Aspiring DevOps',
      description:
        'Managed multiple projects and microservices architecture. Focused on maintaining system reliability and performance.',
      icon: '💻',
      color: 'from-pink-600 to-purple-700',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          My <span className="text-[#00ffa3]">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-[#00ffa3]/50 transition-all"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl flex-shrink-0`}
                >
                  {exp.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
