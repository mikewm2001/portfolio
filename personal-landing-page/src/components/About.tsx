import DownloadIcon from './DownloadIcon';
import GitHubIcon from './GitHubIcon';
import EmailIcon from './EmailIcon';

const GITHUB_URL = 'https://github.com/mikewm2001';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        {/* Profile picture + buttons */}
        <div className="flex shrink-0 flex-col items-center gap-4 sm:items-start">
          <img
            src="/profile.jpg"
            alt="Michael Mei"
            className="h-50 w-50 rounded-full border-2 border-[var(--color-border)] object-cover object-[center_25%]"
          />
          <div className="flex w-44 flex-col gap-3">
            <a
              href="/resume.pdf"
              download
              className="rounded-md border border-[var(--color-accent)] px-5 py-2.5 text-center text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
            >
              <span className="flex items-center justify-center gap-2">
                <DownloadIcon />
                Resume
              </span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-center text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
            >
              <span className="flex items-center justify-center gap-2">
                <GitHubIcon />
                GitHub
              </span>
            </a>
            <a
              href="mailto:michaelwmei09@gmail.com"
              className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-center text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
            >
              <span className="flex items-center justify-center gap-2">
                <EmailIcon />
                Email
              </span>
            </a>
          </div>
        </div>

        {/* Paragraph */}
        <div className="flex flex-1 flex-col gap-5 text-lg leading-8 text-[var(--color-text)]">
          <p>
            I'm a backend-focused software engineer with a strong interest in distributed systems
            and scalable architecture. I enjoy working across the full stack, but I naturally
            gravitate toward the server side—designing reliable APIs, building data pipelines, and
            thinking through how systems behave under load. I like breaking down complex problems
            and figuring out how to make systems both efficient and resilient.
          </p>
          <p>
            Most of my experience has involved working with services that handle large volumes of
            data and traffic, which has pushed me to think more carefully about performance, fault
            tolerance, and long-term maintainability. I care about writing clean, readable code and
            building systems that are easy to reason about, not just in the moment but as they
            evolve over time.
          </p>
        </div>
      </div>
    </section>
  );
}
