import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/seo/Seo";
import { seoConfig } from "@/content/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <Seo {...seoConfig.notFound} />
      <section className="px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-card bg-card px-8 py-16 text-center shadow-card sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">Błąd 404</p>
          <h1 className="mt-4 text-4xl font-serif font-bold text-foreground sm:text-5xl">Nie znaleźliśmy tej strony</h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Strona, której szukasz, nie istnieje albo jej adres został zmieniony. Wróć do strony głównej lub przejdź do cennika.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-w-48 items-center justify-center rounded-button bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Strona główna
            </Link>
            <Link
              to="/cennik"
              className="inline-flex min-w-48 items-center justify-center rounded-button border-2 border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Zobacz cennik
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
