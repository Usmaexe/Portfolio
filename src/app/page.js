import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import StarfieldBackground from '@/components/StarfieldBackground';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F] relative">
      <StarfieldBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <ScrollToTop />
    </main>
  );
}
