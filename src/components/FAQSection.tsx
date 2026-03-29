import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRevealMotion } from "@/hooks/use-reveal-motion";

const faqs = [
  { q: "Czy leczenie boli?", a: "Stosujemy nowoczesne znieczulenie miejscowe. Większość zabiegów jest całkowicie bezbolesna." },
  { q: "Jak umówić wizytę?", a: "Przez formularz na stronie, telefonicznie (+48 12 456 78 90) lub WhatsApp." },
  { q: "Czy przyjmujecie pacjentów bez skierowania?", a: "Tak, nie jest wymagane żadne skierowanie." },
  { q: "Jak długo trwa pierwsza wizyta?", a: "Konsultacja trwa ok. 30 minut. Wycena jest bezpłatna." },
  { q: "Czy oferujecie raty?", a: "Tak, dla większych zabiegów oferujemy płatność w ratach 0% (MediRaty)." },
  { q: "Czy przyjmujecie dzieci?", a: "Tak, od 3. roku życia. Mamy lekarza specjalizującego się w stomatologii dziecięcej." },
  { q: "Jak wygląda higienizacja?", a: "Scaling (usuwanie kamienia), piaskowanie i polerowanie. Trwa ok. 60 minut." },
  { q: "Czy można przyjść w nagłym przypadku?", a: "Tak, prosimy o kontakt telefoniczny — postaramy się przyjąć tego samego dnia." },
];

const FAQSection = () => {
  const { getRevealProps } = useRevealMotion();

  return (
    <section className="py-24 bg-primary-light/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div {...getRevealProps()} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Najczęstsze pytania</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${index}`}
              className="bg-card rounded-button px-6 shadow-soft border-none"
            >
              <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
