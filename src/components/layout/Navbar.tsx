import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import feedgoLogo from "@/assets/feedgo-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/services" },
  { name: "Process", path: "/how-it-works" },
  { name: "Portfolio", path: "/work" },
  { name: "Plans", path: "/pricing" },
  { name: "Our Story", path: "/about" },
  { name: "Let's Talk", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { navigateWithTransition, isTransitioning } = usePageTransition();

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (location.pathname === path || isTransitioning) return;
    setIsOpen(false);
    navigateWithTransition(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md shadow-sm">
      <nav className="container-custom">
        <div className="flex h-18 items-center justify-between py-2">
          <a href="/" onClick={(e) => handleNav(e, "/")} className="flex items-center group">
            <img
              src={feedgoLogo}
              alt="Feedgo"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-0.5 ml-6">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNav(e, link.path)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative cursor-pointer ${location.pathname === link.path
                    ? "text-primary bg-primary/15"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="btn-instagram px-6" onClick={(e) => handleNav(e, "/contact")}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNav(e, link.path)}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-4 btn-instagram" onClick={(e) => handleNav(e, "/contact")}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
