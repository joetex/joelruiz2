import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/joetex', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/joel-ruiz-ii/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:me@joelruiz2.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-mono text-lg font-medium mb-2">joelruiz2<span className="text-accent">_</span></p>
            <p className="text-sm text-muted-foreground">
              Full-stack developer crafting elegant digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm text-accent mb-4">links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm text-accent mb-4">connect</h4>
            <div className="flex gap-4 items-center">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} All rights reserved.</p>
          <p>Designed & built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
