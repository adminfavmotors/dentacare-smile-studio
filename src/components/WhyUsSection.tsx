import { motion } from "framer-motion";

import { benefits } from "@/content/clinic";
import { useRevealMotion } from "@/hooks/use-reveal-motion";

const WhyUsSection = () => {
  const { getRevealProps } = useRevealMotion();

  return (
    <section className="py-24 bg-primary-light/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, index) => (
            <motion.div
              key={b.title}
              {...getRevealProps(index * 0.05)}
              className="bg-card rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <b.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
