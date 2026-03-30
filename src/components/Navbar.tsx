import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Usługi", href: "/#uslugi" },
  { label: "Zespół", href: "/#zespol" },
  { label: "Usługi i cennik", href: "/cennik" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const mobileMenuId = "site-mobile-menu";

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

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

    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setMobileOpen(false);

    if (location.pathname === "/" && !location.hash) {
      scrollToTop();
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 shadow-soft backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2"
            aria-label="DentaKraków strona główna"
          >
            <span className="text-xl font-serif font-bold text-primary sm:text-2xl">
              Denta<span className="text-foreground">Kraków</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={isLinkActive(link.href) ? "page" : undefined}
                className={`rounded-sm text-sm font-medium font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isLinkActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Button variant="accent" size="lg" asChild>
              <Link to="/#kontakt" onClick={() => handleNavClick("/#kontakt")}>
                <Phone className="h-4 w-4" />
                Zapytaj o wizytę
              </Link>
            </Button>
          </div>

          <button
            className="rounded-md p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div id={mobileMenuId} className="border-t border-primary/10 pb-6 md:hidden">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isLinkActive(link.href) ? "page" : undefined}
                  className={`rounded-sm px-2 py-2 text-base font-medium font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isLinkActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Button variant="accent" size="lg" className="mt-2" asChild>
                <Link to="/#kontakt" onClick={() => handleNavClick("/#kontakt")}>
                  <Phone className="h-4 w-4" />
                  Zapytaj o wizytę
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
