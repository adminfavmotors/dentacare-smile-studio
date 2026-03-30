import { motion } from "framer-motion";

import { benefits } from "@/content/clinic";
import { useRevealMotion } from "@/hooks/use-reveal-motion";

const WhyUsSection = () => {
  const { getRevealProps } = useRevealMotion();

  return (
    <section className="bg-primary-light/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...getRevealProps(index * 0.05)}
              className="rounded-card bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="section-icon-badge mb-5">
                <benefit.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
