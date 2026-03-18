import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Przegląd", "Higienizacja", "Leczenie", "Wybielanie", "Aparat", "Implant", "Inne",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // spam
    if (!consent) return;

    const fd = new FormData(e.currentTarget);
    const phone = fd.get("phone") as string;
    if (!/^(\+48|48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/.test(phone.replace(/\s/g, ""))) {
      toast({ title: "Błąd", description: "Podaj prawidłowy numer telefonu", variant: "destructive" });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Dziękujemy! 😊", description: "Oddzwonimy wkrótce." });
      (e.target as HTMLFormElement).reset();
      setConsent(false);
    }, 1000);
  };

  return (
    <section id="kontakt" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">
              Zostaw kontakt — oddzwonimy w ciągu 2 godzin
            </h2>
            <p className="text-muted mb-8">
              Lub zadzwoń teraz:{" "}
              <a href="tel:+48124567890" className="text-primary font-medium">+48 12 456 78 90</a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Imię i nazwisko *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Numer telefonu *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="+48 123 456 789"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">Wybierz usługę</label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                >
                  <option value="">— Wybierz —</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Wiadomość (opcjonalnie)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={1000}
                  className="w-full rounded-button border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                  placeholder="Dodatkowe informacje…"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <span className="text-xs text-muted leading-relaxed">
                  Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z{" "}
                  <a href="/polityka-prywatnosci" className="text-primary underline">Polityką Prywatności</a>. *
                </span>
              </label>

              <Button type="submit" variant="accent" size="xl" disabled={loading} className="w-full sm:w-auto">
                {loading ? "Wysyłanie…" : "Wyślij zapytanie →"}
              </Button>

              <p className="text-xs text-muted/70 leading-relaxed mt-2">
                Administratorem Twoich danych osobowych jest DentaKraków Klinika Stomatologiczna z siedzibą przy ul. Starowiślnej 28/3, 31-032 Kraków. Dane przetwarzane są w celu odpowiedzi na zapytanie (art. 6 ust. 1 lit. b RODO).
              </p>
            </form>
          </motion.div>

          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card rounded-card p-8 shadow-card space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">ul. Starowiślna 28/3, 31-032 Kraków</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="tel:+48124567890" className="text-sm text-foreground hover:text-primary transition-colors">+48 12 456 78 90</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="mailto:rejestracja@dentakrakow.pl" className="text-sm text-foreground hover:text-primary transition-colors">rejestracja@dentakrakow.pl</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-foreground">
                  <p>Pn–Pt 8:00–20:00</p>
                  <p>Sb 9:00–15:00</p>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/48124567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-card overflow-hidden shadow-card aspect-[4/3]">
              <iframe
                title="Lokalizacja DentaKraków"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.4!2d19.9389!3d50.0576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAzJzI3LjQiTiAxOcKwNTYnMjAuMCJF!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
