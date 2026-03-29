import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { clinic, financingProviders } from "@/content/clinic";
import SiteLayout from "@/components/layout/SiteLayout";
import { useRevealMotion } from "@/hooks/use-reveal-motion";
import { isValidPolishPhone, simulateLeadSubmit } from "@/lib/forms";

const categories = [
  {
    icon: "🛡️",
    label: "Profilaktyka i higiena",
    items: [
      ["Przegląd stomatologiczny", "100 zł"],
      ["Pantomogram (RTG panoramiczne)", "80 zł"],
      ["Zdjęcie punktowe (RTG)", "40 zł"],
      ["Scaling — usuwanie kamienia", "200 zł"],
      ["Piaskowanie zębów", "150 zł"],
      ["Scaling + piaskowanie + polerowanie", "320 zł"],
      ["Lakowanie zębów (1 ząb)", "80 zł"],
      ["Fluoryzacja", "100 zł"],
    ],
  },
  {
    icon: "🦷",
    label: "Leczenie próchnicy i endodoncja",
    items: [
      ["Wypełnienie kompozytowe — mały ubytek", "200 zł"],
      ["Wypełnienie kompozytowe — średni ubytek", "280 zł"],
      ["Wypełnienie kompozytowe — duży ubytek", "380 zł"],
      ["Wymiana amalgamatu na kompozyt", "300 zł"],
      ["Leczenie kanałowe — ząb 1-kanałowy", "500 zł"],
      ["Leczenie kanałowe — ząb 2-kanałowy", "700 zł"],
      ["Leczenie kanałowe — ząb 3-kanałowy", "900 zł"],
      ["Leczenie kanałowe pod mikroskopem", "od 1 200 zł"],
      ["Ekstrakcja zęba — prosta", "200 zł"],
      ["Ekstrakcja zęba — chirurgiczna", "400 zł"],
      ["Ekstrakcja zęba mądrości", "od 500 zł"],
    ],
  },
  {
    icon: "✨",
    label: "Stomatologia estetyczna",
    items: [
      ["Wybielanie gabinetowe (Beyond WhiteSpeed)", "800 zł"],
      ["Wybielanie nakładkowe (zestaw nakładek + żel)", "500 zł"],
      ["Wybielanie gabinetowe + nakładkowe", "1 100 zł"],
      ["Licówka kompozytowa (1 ząb)", "600 zł"],
      ["Licówka porcelanowa (1 ząb)", "1 800 zł"],
      ["Korona ceramiczna (pełna ceramika)", "1 500 zł"],
      ["Korona cyrkonowa", "2 200 zł"],
      ["Korona tymczasowa", "300 zł"],
      ["Odbudowa zęba na wkładzie", "900 zł"],
    ],
  },
  {
    icon: "🔩",
    label: "Implanty i protetyka",
    items: [
      ["Implant tytanowy Nobel Biocare (bez korony)", "3 500 zł"],
      ["Implant tytanowy Straumann (bez korony)", "4 000 zł"],
      ["Implant premium z koroną cyrkonową", "5 500 zł"],
      ["Korona protetyczna na implancie", "2 200 zł"],
      ["Konsultacja implantologiczna + plan leczenia", "bezpłatnie"],
      ["Proteza akrylowa całkowita", "1 200 zł"],
      ["Proteza akrylowa częściowa", "900 zł"],
      ["Proteza szkieletowa", "2 000 zł"],
      ["Most 3-punktowy ceramiczny", "3 500 zł"],
      ["Most cyrkonowy 3-punktowy", "4 500 zł"],
      ["Naprawa protezy", "od 150 zł"],
    ],
  },
  {
    icon: "😁",
    label: "Ortodoncja",
    items: [
      ["Konsultacja ortodontyczna", "150 zł"],
      ["Aparat stały metalowy (łuk górny lub dolny)", "1 800 zł"],
      ["Aparat stały metalowy (oba łuki)", "3 500 zł"],
      ["Aparat stały ceramiczny (oba łuki)", "4 500 zł"],
      ["Aparat samoligaturujący (oba łuki)", "4 000 zł"],
      ["Invisalign Lite (do 14 nakładek)", "od 6 000 zł"],
      ["Invisalign Full", "od 9 000 zł"],
      ["Wizyta kontrolna ortodontyczna", "120 zł"],
      ["Retainer stały (1 łuk)", "400 zł"],
      ["Retainer zdejmowany", "350 zł"],
    ],
  },
  {
    icon: "👶",
    label: "Stomatologia dziecięca",
    items: [
      ["Przegląd dziecięcy (do 18 lat)", "80 zł"],
      ["Leczenie zęba mlecznego", "180 zł"],
      ["Ekstrakcja zęba mlecznego", "120 zł"],
      ["Lakowanie (1 ząb)", "80 zł"],
      ["Fluoryzacja dziecięca", "80 zł"],
      ["Uszczelnienie bruzd", "90 zł"],
      ["Aparat ruchomy dziecięcy", "od 1 200 zł"],
    ],
  },
];

const PricingPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { getImmediateRevealProps } = useRevealMotion();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  const mobileBottomBar = (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex bg-card shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sm:hidden">
      <a
        href={clinic.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-primary border-r border-primary/10"
      >
        <Phone className="w-4 h-4" />
        Zadzwoń
      </a>
      <a
        href={clinic.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-primary"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );

  return (
    <SiteLayout afterMain={mobileBottomBar} showFloatingButtons>
      {/* Hero */}
      <section className="pt-20 bg-primary-light">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="text-sm text-muted mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Usługi i cennik</span>
          </nav>
          <motion.h1 {...getImmediateRevealProps()} className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-3">
            Usługi i cennik
          </motion.h1>
          <p className="text-lg text-muted max-w-2xl">
            Przejrzyste ceny, wysoka jakość. Bezpłatna wycena indywidualna.
          </p>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="bg-accent/15 border-y border-accent/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-foreground/80 text-center sm:text-left">
            ⚠️ Podane ceny są orientacyjne. Ostateczna wycena zależy od indywidualnej oceny lekarza podczas bezpłatnej konsultacji. Ceny zawierają VAT.
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Accordion */}
          <div className="space-y-3">
            {categories.map((cat, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={cat.label} className="bg-card rounded-card shadow-card overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-primary-light/30 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl" role="img" aria-hidden="true">{cat.icon}</span>
                      <span className="font-serif font-bold text-lg text-foreground">{cat.label}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: isOpen ? `${cat.items.length * 60 + 20}px` : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    {/* Desktop table */}
                    <table className="w-full hidden sm:table">
                      <thead>
                        <tr className="border-b border-primary/10">
                          <th scope="col" className="text-left text-xs font-sans font-semibold text-muted uppercase tracking-wider px-6 py-3">Usługa</th>
                          <th scope="col" className="text-right text-xs font-sans font-semibold text-muted uppercase tracking-wider px-6 py-3">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.items.map(([name, price], j) => (
                          <tr
                            key={j}
                            className="border-b border-primary/5 last:border-0"
                          >
                            <td className="text-sm text-foreground px-6 py-3.5 bg-background even:bg-card" scope="row">{name}</td>
                            <td className={`text-sm font-medium px-6 py-3.5 text-right tabular-nums whitespace-nowrap bg-background even:bg-card ${price === "bezpłatnie" ? "text-primary font-semibold" : "text-primary"}`}>
                              {price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Mobile card list */}
                    <div className="sm:hidden px-4 pb-4 space-y-2">
                      {cat.items.map(([name, price], j) => (
                        <div
                          key={j}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg ${j % 2 === 0 ? "bg-background" : "bg-card"}`}
                        >
                          <span className="text-sm text-foreground pr-4">{name}</span>
                          <span className={`text-sm font-medium tabular-nums whitespace-nowrap ${price === "bezpłatnie" ? "text-primary font-semibold" : "text-primary"}`}>
                            {price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payment / Installments */}
          <div className="mt-16 bg-primary-light rounded-card p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">
                Płać wygodnie — raty 0%
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Zabiegi powyżej 1 000 zł możesz rozłożyć na wygodne raty 0% bez dodatkowych kosztów. Zapytaj na recepcji lub podczas konsultacji.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              {financingProviders.map((provider) => (
                <span key={provider} className="inline-flex items-center px-4 py-2 rounded-full border border-primary text-sm font-medium text-primary">
                  {provider}
                </span>
              ))}
            </div>
          </div>

          {/* Mini Contact Form */}
          <MiniContactForm />
        </div>
      </section>
    </SiteLayout>
  );
};

/* ─── Mini Contact Form ─── */
const MiniContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;
    if (!consent) return;

    const fd = new FormData(e.currentTarget);
    const phone = fd.get("phone") as string;
    if (!isValidPolishPhone(phone)) {
      toast({ title: "Błąd", description: "Podaj prawidłowy numer telefonu", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await simulateLeadSubmit(800);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="mt-16 bg-card rounded-card shadow-card p-8 sm:p-10 text-center">
        <p className="text-primary font-semibold text-lg mb-1">✅ Dziękujemy za wiadomość!</p>
        <p className="text-muted text-sm">Oddzwonimy w ciągu 2 godzin w godzinach pracy kliniki.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 bg-card rounded-card shadow-card p-8 sm:p-10">
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1">
        Nie wiesz od czego zacząć?
      </h3>
      <p className="text-muted text-sm mb-6">Napisz — doradzimy bezpłatnie</p>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
        <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div>
          <label htmlFor="pf-name" className="block text-sm font-medium text-foreground mb-1">Imię *</label>
          <input
            id="pf-name"
            name="name"
            type="text"
            required
            maxLength={100}
            className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
            placeholder="Jan"
          />
        </div>
        <div>
          <label htmlFor="pf-phone" className="block text-sm font-medium text-foreground mb-1">Telefon *</label>
          <input
            id="pf-phone"
            name="phone"
            type="tel"
            required
            maxLength={20}
            className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
            placeholder="+48 123 456 789"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="pf-question" className="block text-sm font-medium text-foreground mb-1">Pytanie / usługa</label>
          <textarea
            id="pf-question"
            name="question"
            rows={2}
            maxLength={500}
            className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
            placeholder="Np. Ile kosztuje wybielanie? Chcę umówić wizytę…"
          />
        </div>

        <label className="sm:col-span-2 flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-1 w-4 h-4 accent-primary" />
          <span className="text-xs text-muted leading-relaxed">
            Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z{" "}
            <Link to="/polityka-prywatnosci" className="text-primary underline">Polityką Prywatności</Link>. *
          </span>
        </label>

        <div className="sm:col-span-2">
          <Button type="submit" variant="accent" size="lg" disabled={loading}>
            {loading ? "Wysyłanie…" : "Wyślij zapytanie →"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PricingPage;
