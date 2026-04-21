const GITHUB_URL = 'https://github.com/mikewm2001';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
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
