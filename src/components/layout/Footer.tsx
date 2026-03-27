import { useLocation } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import feedgoLogo from "@/assets/feedgo-logo.png";

const Footer = () => {
  const location = useLocation();
  const { navigateWithTransition, isTransitioning } = usePageTransition();

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (location.pathname === path || isTransitioning) return;
    navigateWithTransition(path);
  };

  return (
    <footer className="border-t border-border/30 bg-secondary">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <a href="/" onClick={(e) => handleNav(e, "/")} className="inline-block">
              <img 
                src={feedgoLogo} 
                alt="Feedgo" 
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed">
              Professional social media creation and management for businesses that want to grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-foreground font-display text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" onClick={(e) => handleNav(e, "/services")} className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-1.5 -mx-3 rounded-md transition-all duration-300">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/how-it-works" onClick={(e) => handleNav(e, "/how-it-works")} className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-1.5 -mx-3 rounded-md transition-all duration-300">
                  Process
                </a>
              </li>
              <li>
                <a href="/pricing" onClick={(e) => handleNav(e, "/pricing")} className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-1.5 -mx-3 rounded-md transition-all duration-300">
                  Plans
                </a>
              </li>
              <li>
                <a href="/work" onClick={(e) => handleNav(e, "/work")} className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-1.5 -mx-3 rounded-md transition-all duration-300">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h4 className="font-bold text-foreground font-display text-lg">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" onClick={(e) => handleNav(e, "/about")} className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-1.5 -mx-3 rounded-md transition-all duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleNav(e, "/contact")} className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-1.5 -mx-3 rounded-md transition-all duration-300">
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-bold text-foreground font-display text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:feedgo.contact@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  feedgo.contact@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919313428775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={16} className="text-primary" />
                  </div>
                  +91 93134 28775
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/feedgo.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Instagram size={16} className="text-accent" />
                  </div>
                  @feedgo.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Feedgo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
