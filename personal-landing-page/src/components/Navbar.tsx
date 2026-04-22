const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Life', href: '#life' },
];

const linkClass = 'text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href={navLinks[0].href} className={linkClass}>{navLinks[0].label}</a>
        <a href={navLinks[1].href} className={linkClass}>{navLinks[1].label}</a>

        <a href="#">
          <img src="/initials-design-transparent.png" alt="MM" className="h-11 w-11" />
        </a>

        <a href={navLinks[2].href} className={linkClass}>{navLinks[2].label}</a>
        <a href={navLinks[3].href} className={linkClass}>{navLinks[3].label}</a>
      </div>
    </nav>
  );
}
