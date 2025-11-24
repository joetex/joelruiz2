import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from body class on mount
  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.body.classList.contains('dark');
    setMode(isDarkMode)
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const isDarkMode = isDark;
    setIsDark(!isDarkMode);
    setMode(!isDarkMode)
  };

  const setMode = (isDarkMode:boolean) => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    
    // Toggle the class on the body element
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    
    // Optionally save preference to localStorage
    localStorage.setItem('theme-preference', newTheme);
  }

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
