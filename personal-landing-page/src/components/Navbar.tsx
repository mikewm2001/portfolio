const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Life', href: '#life' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div className="flex gap-8">
          <a
            href={navLinks[0].href}
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {navLinks[0].label}
          </a>
          <a
            href={navLinks[1].href}
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {navLinks[1].label}
          </a>
        </div>

        <a
          href="#"
          className="text-lg font-semibold tracking-widest text-[var(--color-text)]"
        >
          MM
        </a>

        <div className="flex gap-8">
          <a
            href={navLinks[2].href}
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {navLinks[2].label}
          </a>
          <a
            href={navLinks[3].href}
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {navLinks[3].label}
          </a>
        </div>
      </div>
    </nav>
  );
}
