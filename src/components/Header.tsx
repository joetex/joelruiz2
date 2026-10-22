const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience', desktopOnly: true },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills', desktopOnly: true },
  { label: 'Contact', id: 'contact' },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="font-mono text-lg font-medium text-foreground hover:text-accent transition-colors"
        >
          joelruiz2<span className="text-accent animate-pulse">_</span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-6">
          {navItems.map(({ label, id, desktopOnly }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium text-muted-foreground hover:text-accent transition-colors ${desktopOnly ? 'hidden sm:inline' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
