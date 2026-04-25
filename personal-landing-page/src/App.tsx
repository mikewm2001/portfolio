import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Life from './components/Life';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Life />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
