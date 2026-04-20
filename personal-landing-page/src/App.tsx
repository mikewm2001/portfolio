import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      <main>
        <Hero />

        <Section id="about">
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">About</h2>
        </Section>

        <Section id="skills">
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">Skills</h2>
        </Section>

        <Section id="experience">
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">Experience</h2>
        </Section>

        <Section id="life">
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">Life</h2>
        </Section>
      </main>
    </div>
  );
}
