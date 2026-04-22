const GITHUB_URL = 'https://github.com/mikewm2001';

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-8">
      <a href="#" className="absolute left-6 top-1/2 -translate-y-1/2">
        <img src="/initials-design.png" alt="Back to top" className="h-20 w-20 opacity-70 transition-opacity hover:opacity-100" />
      </a>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 text-center">
        <p className="text-sm text-[var(--color-muted)]">Michael Mei</p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          github.com/mikewm2001
        </a>
        <p className="text-xs text-[var(--color-muted)] opacity-50">© 2026</p>
      </div>
    </footer>
  );
}
