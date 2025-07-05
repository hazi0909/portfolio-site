import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
              John Smith
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "light" ? (
                  <i className="fas fa-moon" />
                ) : (
                  <i className="fas fa-sun" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <i className="fas fa-bars" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
