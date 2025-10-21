import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/ExperienceNew';
import Projects from '@/components/ProjectsNew';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F]">
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
