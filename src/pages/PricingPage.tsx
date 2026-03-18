import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const categories = [
  {
    id: "profilaktyka",
    label: "Profilaktyka",
    items: [
      ["Przegląd stomatologiczny", "100 zł"],
      ["Pantomogram (RTG)", "80 zł"],
      ["Scaling (usuwanie kamienia)", "200 zł"],
      ["Piaskowanie zębów", "150 zł"],
      ["Scaling + piaskowanie + polerowanie", "320 zł"],
      ["Lakowanie zębów (1 ząb)", "80 zł"],
      ["Fluoryzacja", "100 zł"],
    ],
  },
  {
    id: "prochnica",
    label: "Próchnica",
    items: [
      ["Wypełnienie kompozytowe (mały)", "200 zł"],
      ["Wypełnienie kompozytowe (średni)", "280 zł"],
      ["Wypełnienie kompozytowe (duży)", "380 zł"],
      ["Leczenie kanałowe (1-kanałowy)", "500 zł"],
      ["Leczenie kanałowe (2-kanałowy)", "700 zł"],
      ["Leczenie kanałowe (3-kanałowy)", "900 zł"],
      ["Ekstrakcja zęba (prosta)", "200 zł"],
      ["Ekstrakcja zęba (chirurgiczna)", "400 zł"],
    ],
  },
  {
    id: "estetyczna",
    label: "Estetyczna",
    items: [
      ["Wybielanie gabinetowe (Beyond)", "800 zł"],
      ["Wybielanie nakładkowe (zestaw)", "500 zł"],
      ["Wybielanie + nakładki", "1 100 zł"],
      ["Licówka kompozytowa (1 ząb)", "600 zł"],
      ["Licówka porcelanowa (1 ząb)", "1 800 zł"],
      ["Korona ceramiczna", "1 500 zł"],
      ["Korona cyrkonowa", "2 200 zł"],
    ],
  },
  {
    id: "implanty",
    label: "Implanty",
    items: [
      ["Implant (tytan, Nobel Biocare)", "3 500–4 500 zł"],
      ["Implant (tytan, Straumann)", "4 000–5 000 zł"],
      ["Korona na implancie", "2 200 zł"],
      ["Proteza akrylowa", "1 200 zł"],
      ["Proteza szkieletowa", "2 000 zł"],
      ["Most 3-punktowy", "3 500 zł"],
    ],
  },
  {
    id: "ortodoncja",
    label: "Ortodoncja",
    items: [
      ["Konsultacja ortodontyczna", "150 zł"],
      ["Aparat stały metalowy", "3 500 zł"],
      ["Aparat stały ceramiczny", "4 500 zł"],
      ["Aparat przezroczysty (Invisalign)", "od 6 000 zł"],
      ["Retainer", "400 zł"],
    ],
  },
  {
    id: "dziecieca",
    label: "Dziecięca",
    items: [
      ["Przegląd dziecięcy", "80 zł"],
      ["Leczenie mleczaka", "180 zł"],
      ["Lakowanie (1 ząb)", "80 zł"],
      ["Fluoryzacja dziecięca", "80 zł"],
    ],
  },
];

const PricingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Cennik</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Cennik usług stomatologicznych
          </h1>
          <p className="text-lg text-muted mb-12">
            Przejrzyste ceny, wysoka jakość. Wycena indywidualna — zawsze bezpłatna.
          </p>
        </motion.div>

        <Tabs defaultValue="profilaktyka" className="w-full">
          <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto p-0 mb-8">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-button px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-card data-[state=inactive]:shadow-soft transition-all"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="bg-card rounded-card shadow-card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary/5">
                      <th className="text-left text-sm font-sans font-semibold text-foreground px-6 py-4">Usługa</th>
                      <th className="text-right text-sm font-sans font-semibold text-foreground px-6 py-4">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.items.map(([name, price], i) => (
                      <tr key={i} className="border-b border-primary/5 last:border-0 hover:bg-primary-light/30 transition-colors">
                        <td className="text-sm text-foreground px-6 py-4">{name}</td>
                        <td className="text-sm font-medium text-primary px-6 py-4 text-right tabular-nums whitespace-nowrap">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-8 text-xs text-muted leading-relaxed italic">
          * Podane ceny są cenami orientacyjnymi. Ostateczna wycena zależy od indywidualnej oceny lekarza. Pierwsza konsultacja i wycena są bezpłatne. Ceny zawierają VAT.
        </p>

        {/* Installment block */}
        <div className="mt-12 bg-accent/10 rounded-card p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Płać wygodnie — raty 0%</h3>
            <p className="text-sm text-muted">
              Zabiegi powyżej 1000 zł możesz rozłożyć na raty 0% bez dodatkowych kosztów. Zapytaj recepcję.
            </p>
          </div>
          <Button variant="accent" size="lg" className="shrink-0" asChild>
            <a href="tel:+48124567890">
              <Phone className="w-4 h-4" />
              Zadzwoń
            </a>
          </Button>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="accent" size="xl" asChild>
            <a href="/#kontakt">
              Umów bezpłatną wycenę
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </div>
);

export default PricingPage;
