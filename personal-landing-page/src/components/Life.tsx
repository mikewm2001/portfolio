const items = [
  {
    title: 'Fitness',
    body: 'Consistent gym-goer. Training keeps me focused and disciplined outside of work. A healthy body is a healthy mind.',
  },
  {
    title: 'Side Projects',
    body: 'I build things to learn. Recent project: a Tree Personality Quiz that maps your answers to a tree species.',
  },
  {
    title: 'Staying Current',
    body: 'Regularly exploring new tools and backend patterns — currently digging into distributed systems design.',
  },
];

export default function Life() {
  return (
    <section id="life" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-muted)]">
        Life
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {items.map(({ title, body }) => (
          <div
            key={title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <p className="mb-2 text-sm font-medium text-[var(--color-text)]">{title}</p>
            <p className="text-sm leading-6 text-[var(--color-muted)]">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="rounded-md border border-[var(--color-accent)] px-5 py-2.5 text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
