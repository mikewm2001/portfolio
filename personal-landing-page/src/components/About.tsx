const GITHUB_URL = 'https://github.com/mikewm2001';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-muted)]">
        About
      </h2>

      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-16">
        <p className="flex-1 text-lg leading-8 text-[var(--color-text)]">
          I'm a backend-focused software engineer with a strong interest in distributed systems and
          scalable architecture. I enjoy working across the full stack but find my depth on the
          server side — designing reliable APIs, optimizing data pipelines, and reasoning about
          system behaviour under load. I care about writing clear, maintainable code that holds up
          as products grow.
        </p>

        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          <a
            href="/resume.pdf"
            download
            className="rounded-md border border-[var(--color-accent)] px-5 py-2.5 text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          >
            Download Resume
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
