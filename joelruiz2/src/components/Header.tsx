import { useState } from 'react';
// import { Button } from './ui/button';
// import { Menu, X } from 'lucide-react';
// import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    // { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    // { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <div id="home"></div>
      <header

        className={`fixed top-0 right-middle z-50 w-full  ${'bg-background/95 backdrop-blur  shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-1 sm:px-3 lg:px-12 py-4 flex items-center justify-between">
          <nav className="w-full md:flex items-center justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity"
            >
              dev.
            </button>
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm hover:text-foreground font-medium text-muted-foreground  transition-colors"
              >
                {label}
              </button>
            ))}
            {/* <div className="hidden md:flex items-end gap-4"> */}
              {/* {!isMobileMenuOpen ?<ThemeToggle /> : <></>} */}
              {/* <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Let's Talk
          </Button> */}
            {/* </div> */}

          </nav>


          {/* <div className="flex w-full justify-end gap-4 pr-4">
          
          
              <button
            className=" p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div> */}
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-accent transition-colors"
                >
                  {label}
                </button>
              ))}
              {/* <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              Let's Talk
            </Button> */}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
