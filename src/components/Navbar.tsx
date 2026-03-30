import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/content/clinic";

const navLinks = [
  { label: "Usługi", href: "/#uslugi" },
  { label: "Zespół", href: "/#zespol" },
  { label: "Usługi i cennik", href: "/cennik" },
  { label: "Kontakt", href: "/#kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const mobileMenuId = "site-mobile-menu";

  const isLinkActive = (href: string) => {
    if (href === "/cennik") {
      return location.pathname === "/cennik";
    }

    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.slice(1);
    }

    return location.pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="DentaKraków strona główna">
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary">
              Denta<span className="text-foreground">Kraków</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={isLinkActive(link.href) ? "page" : undefined}
                className={`text-sm font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${
                  isLinkActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="accent" size="lg" asChild>
              <a href={clinic.phoneHref}>
                <Phone className="w-4 h-4" />
                Zapytaj o wizytę
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-md p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div id={mobileMenuId} className="md:hidden pb-6 border-t border-primary/10">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isLinkActive(link.href) ? "page" : undefined}
                  className={`px-2 py-2 text-base font-sans font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isLinkActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="accent" size="lg" className="mt-2" asChild>
                <a href={clinic.phoneHref}>
                  <Phone className="w-4 h-4" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
