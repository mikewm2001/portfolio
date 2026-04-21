import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Section from './components/Section';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Experience />

        <Section id="life">
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">Life</h2>
        </Section>
      </main>
    </div>
  );
}
