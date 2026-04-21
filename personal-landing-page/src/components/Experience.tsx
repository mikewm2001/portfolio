interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  primary?: boolean;
}

const entries: ExperienceEntry[] = [
  {
    company: 'Walmart Global Tech',
    role: 'Backend Software Developer',
    dates: 'Apr 2025 – Present',
    primary: true,
    bullets: [
      'Supported backend systems processing millions of item updates daily across a platform serving 100M+ SKUs.',
      'Reduced pipeline failures by ~40% through improved error handling and post-release tuning.',
      'Stabilized API traffic spikes above 400+ RPS with rate limiting, reducing service errors.',
    ],
  },
  {
    company: 'Tutor.com',
    role: 'Java / Python Tutor',
    dates: 'Aug 2023 – Apr 2025',
    bullets: [
      'Delivered 600+ tutoring sessions in Java and Python.',
      'Maintained 95% positive student feedback.',
      'Helped students strengthen debugging, problem-solving, and programming fundamentals.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-muted)]">
        Experience
      </h2>

      <div className="relative flex flex-col gap-0">
        {/* vertical timeline rule */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

        {entries.map((entry) => (
          <div key={entry.company} className="relative pl-10 pb-12 last:pb-0">
            {/* dot */}
            <div
              className={`absolute left-0 top-[6px] h-[11px] w-[11px] rounded-full border-2 ${
                entry.primary
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                  : 'border-[var(--color-border)] bg-[var(--color-bg)]'
              }`}
            />

            <div className="flex flex-col gap-3">
              {/* header */}
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <span
                    className={`text-base font-semibold ${
                      entry.primary
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text)]'
                    }`}
                  >
                    {entry.company}
                  </span>
                  <span className="ml-3 text-sm text-[var(--color-muted)]">{entry.role}</span>
                </div>
                <span className="text-xs text-[var(--color-muted)]">{entry.dates}</span>
              </div>

              {/* bullets */}
              <ul className="flex flex-col gap-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-6 text-[var(--color-text)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
