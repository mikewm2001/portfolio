const categories = [
  {
    label: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin'],
  },
  {
    label: 'Backend',
    skills: ['Spring Boot', 'Hibernate', 'REST APIs', 'Node.js'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Data & Messaging',
    skills: ['Kafka', 'RabbitMQ', 'Cassandra', 'MySQL'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-muted)]">
        Skills
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ label, skills }) => (
          <div
            key={label}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-[var(--color-muted)]">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-[var(--color-bg)] px-3 py-1 text-sm text-[var(--color-text)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
