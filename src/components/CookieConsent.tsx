import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  const accept = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem("cookie_consent", JSON.stringify({ analytics, marketing }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div
        className="mx-auto max-w-4xl bg-card rounded-card shadow-card-hover p-6 sm:p-8"
        role="region"
        aria-label="Ustawienia plików cookies"
      >
        <p className="text-sm text-foreground font-medium mb-1">🍪 Używamy plików cookies</p>
        <p className="text-sm text-muted mb-5 leading-relaxed">
          Stosujemy cookies niezbędne (zawsze aktywne) oraz analityczne i marketingowe (za Twoją zgodą).{" "}
          <Link to="/polityka-cookies" className="text-primary underline">Polityka cookies</Link>
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" size="sm" onClick={() => accept(false, false)}>
            Odrzuć opcjonalne
          </Button>
          <Button variant="outline" size="sm" onClick={() => accept(true, false)}>
            Tylko analityczne
          </Button>
          <Button variant="accent" size="sm" onClick={() => accept(true, true)}>
            Akceptuj wszystkie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
