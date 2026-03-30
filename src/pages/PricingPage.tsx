import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Baby, BadgePlus, ChevronDown, MessageCircle, Phone, ShieldCheck, SmilePlus, Sparkles, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { clinic, financingProviders } from "@/content/clinic";
import { seoConfig } from "@/content/seo";
import { useRevealMotion } from "@/hooks/use-reveal-motion";
import { useToast } from "@/hooks/use-toast";
import { isValidPolishPhone, simulateLeadSubmit } from "@/lib/forms";

type PricingItem = [string, string];

type PricingCategory = {
  icon: LucideIcon;
  label: string;
  items: PricingItem[];
};

const categories: PricingCategory[] = [
  {
    icon: ShieldCheck,
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
    icon: Stethoscope,
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
    icon: Sparkles,
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
    icon: BadgePlus,
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
    icon: SmilePlus,
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
    icon: Baby,
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

  const toggle = (index: number) => setOpenIndex((current) => (current === index ? -1 : index));

  const mobileBottomBar = (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex bg-card shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sm:hidden">
      <a
        href={clinic.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-primary/10 py-4 text-sm font-medium text-primary"
      >
        <Phone className="h-4 w-4" />
        Zadzwoń
      </a>
      <a
        href={clinic.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-medium text-primary"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );

  return (
    <SiteLayout afterMain={mobileBottomBar} floatingButtonsClassName="hidden sm:flex" showFloatingButtons>
      <Seo {...seoConfig.pricing} />

      <section className="bg-primary-light pt-20">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <nav className="mb-4 text-sm text-muted">
            <Link to="/" className="transition-colors hover:text-primary">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Usługi i cennik</span>
          </nav>

          <motion.h1 {...getImmediateRevealProps()} className="mb-3 text-4xl font-bold text-foreground sm:text-5xl">
            Usługi i cennik
          </motion.h1>
          <p className="max-w-2xl text-lg text-muted">Przejrzyste ceny, wysoka jakość. Bezpłatna wycena indywidualna.</p>
        </div>
      </section>

      <div className="border-y border-accent/20 bg-accent/15">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-foreground/80 sm:text-left">
            ⚠️ Podane ceny są orientacyjne. Ostateczna wycena zależy od indywidualnej oceny lekarza podczas bezpłatnej konsultacji.
            Ceny zawierają VAT.
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {categories.map((category, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={category.label} className="overflow-hidden rounded-card bg-card shadow-card">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-primary-light/30"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="section-icon-badge h-11 w-11 rounded-xl shadow-none">
                        <category.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-lg font-bold text-foreground">{category.label}</span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? `${category.items.length * 60 + 20}px` : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <table className="hidden w-full sm:table">
                      <thead>
                        <tr className="border-b border-primary/10">
                          <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                            Usługa
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted">
                            Cena
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map(([name, price]) => (
                          <tr key={name} className="border-b border-primary/5 last:border-0">
                            <td className="bg-background px-6 py-3.5 text-sm text-foreground even:bg-card">{name}</td>
                            <td
                              className={`bg-background px-6 py-3.5 text-right text-sm font-medium tabular-nums whitespace-nowrap even:bg-card ${
                                price === "bezpłatnie" ? "font-semibold text-primary" : "text-primary"
                              }`}
                            >
                              {price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="space-y-2 px-4 pb-4 sm:hidden">
                      {category.items.map(([name, price], itemIndex) => (
                        <div
                          key={name}
                          className={`flex items-center justify-between rounded-lg px-4 py-3 ${itemIndex % 2 === 0 ? "bg-background" : "bg-card"}`}
                        >
                          <span className="pr-4 text-sm text-foreground">{name}</span>
                          <span className={`text-sm font-medium tabular-nums whitespace-nowrap ${price === "bezpłatnie" ? "font-semibold text-primary" : "text-primary"}`}>
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

          <div className="mt-16 flex flex-col items-start gap-6 rounded-card bg-primary-light p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">Płać wygodnie — raty 0%</h3>
              <p className="text-sm leading-relaxed text-muted">
                Zabiegi powyżej 1 000 zł możesz rozłożyć na wygodne raty 0% bez dodatkowych kosztów. Zapytaj na recepcji lub
                podczas konsultacji.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              {financingProviders.map((provider) => (
                <span key={provider} className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary">
                  {provider}
                </span>
              ))}
            </div>
          </div>

          <MiniContactForm />
        </div>
      </section>
    </SiteLayout>
  );
};

const MiniContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot || !consent) return;

    const formData = new FormData(event.currentTarget);
    const phone = formData.get("phone") as string;

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
      <div className="mt-16 rounded-card bg-card p-8 text-center shadow-card sm:p-10">
        <p className="mb-1 text-lg font-semibold text-primary">Dziękujemy za wiadomość!</p>
        <p className="text-sm text-muted">Oddzwonimy w ciągu 2 godzin w godzinach pracy kliniki.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 rounded-card bg-card p-8 shadow-card sm:p-10">
      <h3 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">Nie wiesz od czego zacząć?</h3>
      <p className="mb-6 text-sm text-muted">Napisz — doradzimy bezpłatnie</p>

      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="pf-name" className="mb-1 block text-sm font-medium text-foreground">
            Imię *
          </label>
          <input
            id="pf-name"
            name="name"
            type="text"
            required
            maxLength={100}
            className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground transition placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Jan"
          />
        </div>

        <div>
          <label htmlFor="pf-phone" className="mb-1 block text-sm font-medium text-foreground">
            Telefon *
          </label>
          <input
            id="pf-phone"
            name="phone"
            type="tel"
            required
            maxLength={20}
            className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground transition placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="+48 123 456 789"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="pf-question" className="mb-1 block text-sm font-medium text-foreground">
            Pytanie / usługa
          </label>
          <textarea
            id="pf-question"
            name="question"
            rows={2}
            maxLength={500}
            className="w-full resize-none rounded-button border border-input bg-background px-4 py-3 text-foreground transition placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Np. Ile kosztuje wybielanie? Chcę umówić wizytę…"
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 sm:col-span-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            required
            className="mt-1 h-4 w-4 accent-primary"
          />
          <span className="text-xs leading-relaxed text-muted">
            Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z{" "}
            <Link to="/polityka-prywatnosci" className="text-primary underline">
              Polityką Prywatności
            </Link>
            . *
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
