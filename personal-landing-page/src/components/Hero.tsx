const GITHUB_URL = 'https://github.com/mikewm2001';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* radial violet bloom fading into the dark base */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%), var(--color-bg)',
        }}
      />

      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-muted)]">
          Software Engineer
        </p>

        <h1 className="text-6xl font-semibold tracking-tight text-[var(--color-text)] sm:text-7xl">
          Michael Mei
        </h1>

        <p className="max-w-md text-base leading-relaxed text-[var(--color-muted)]">
          Backend-focused engineer building scalable systems and end-to-end applications.
        </p>

        <div className="mt-4 flex gap-4">
          <a
            href="/resume.pdf"
            download
            className="rounded-md border border-[var(--color-accent)] px-5 py-2.5 text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          >
            Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
