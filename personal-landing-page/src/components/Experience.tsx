interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

const entries: ExperienceEntry[] = [
  {
    company: 'Walmart Global Tech',
    role: 'Backend Software Developer (Contract)',
    dates: 'Apr 2025 – Feb 2026',
    bullets: [
      'Supported backend systems processing millions of item updates daily across a platform serving 100M+ SKUs.',
      'Reduced pipeline failures by ~40% through improved error handling and post-release tuning.',
      'Stabilized API traffic spikes above 400+ RPS with rate limiting, reducing service errors.',
    ],
  },
  {
    company: 'TPR Education LLC.',
    role: 'Computer Science Tutor',
    dates: 'Aug 2023 – Apr 2025',
    bullets: [
      'Delivered 600+ tutoring sessions in Java and Python.',
      'Maintained 95% positive student feedback.',
      'Helped students strengthen debugging, problem-solving, and programming fundamentals.',
    ],
  },
  {
    company: 'Outlier AI',
    role: 'AI Trainer',
    dates: 'Jan 2024 – Jun 2024',
    bullets: [
      'Designed prompt pipelines for LLM workflows, improving consistency across tasks.',
      'Resolved workflow failures by refining prompts and updating code.',
    ],
  },
];

const dot = 'h-[11px] w-[11px] rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg)]';

function EntryCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <div className="mb-3 flex flex-col gap-0.5">
        <span className="text-xl font-semibold text-[var(--color-text)]">{entry.company}</span>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
          <span className="text-xs text-[var(--color-muted)]">{entry.role}</span>
          <span className="text-xs text-[var(--color-accent)]">{entry.dates}</span>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5 text-sm leading-6 text-[var(--color-muted)]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-center text-4xl font-semibold tracking-wide text-[var(--color-accent)]">
        Experience
      </h2>

      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--color-border)] sm:left-1/2 sm:-translate-x-px" />

        <div className="flex flex-col gap-8">
          {entries.map((entry, index) => (
            <div key={entry.company} className={`relative ${index === 2 ? 'sm:-mt-25' : ''}`}>

              {/* Mobile: left-aligned */}
              <div className="pl-10 sm:hidden">
                <div className={`absolute left-0 top-[6px] ${dot}`} />
                <EntryCard entry={entry} />
              </div>

              {/* Desktop: alternating sides */}
              <div className="hidden sm:grid sm:grid-cols-[1fr_40px_1fr] sm:items-start">
                <div className="pr-4">{index % 2 === 0 && <EntryCard entry={entry} />}</div>
                <div className="flex justify-center pt-[6px]">
                  <div className={dot} />
                </div>
                <div className="pl-4">{index % 2 !== 0 && <EntryCard entry={entry} />}</div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
