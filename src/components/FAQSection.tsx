import { motion } from "framer-motion";

import { faqItems } from "@/content/clinic";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRevealMotion } from "@/hooks/use-reveal-motion";

const FAQSection = () => {
  const { getRevealProps } = useRevealMotion();

  return (
    <section className="py-24 bg-primary-light/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div {...getRevealProps()} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Najczęstsze pytania</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="bg-card rounded-button px-6 shadow-soft border-none"
            >
              <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
