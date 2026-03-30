import { motion } from "framer-motion";
import { ArrowRight, BadgePlus, Orbit, ShieldPlus, SmilePlus, Sparkles, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

import { useRevealMotion } from "@/hooks/use-reveal-motion";

const services = [
  { icon: Stethoscope, name: "Przegląd i konsultacja", desc: "Diagnostyka i plan leczenia", price: "od 100 zł" },
  { icon: Sparkles, name: "Higienizacja zębów", desc: "Scaling + piaskowanie + polerowanie", price: "od 200 zł" },
  { icon: ShieldPlus, name: "Leczenie próchnicy", desc: "Wypełnienie kompozytowe", price: "od 200 zł" },
  { icon: SmilePlus, name: "Wybielanie zębów", desc: "Profesjonalne wybielanie gabinetowe", price: "od 500 zł" },
  { icon: Orbit, name: "Aparat ortodontyczny", desc: "Konsultacja ortodontyczna", price: "od 150 zł" },
  { icon: BadgePlus, name: "Implant zębowy", desc: "Nowoczesne implanty tytanowe", price: "od 2 500 zł" },
] as const;

const ServicesSection = () => {
  const { getRevealProps } = useRevealMotion();

  return (
    <section id="uslugi" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...getRevealProps()} className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Najczęściej wybierane usługi</h2>
          <p className="mt-4 text-lg text-muted">Przejrzyste ceny, wysoka jakość — bez niespodzianek</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              {...getRevealProps(index * 0.05)}
              className="group rounded-card bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="section-icon-badge mb-5">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{service.name}</h3>
              <p className="mb-6 text-sm text-muted">{service.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold tabular-nums text-primary">{service.price}</span>
                <Link
                  to="/cennik"
                  className="flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
                >
                  Więcej
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...getRevealProps(0.1)} className="mt-12 text-center">
          <Link to="/cennik" className="inline-flex items-center gap-2 font-medium text-primary transition-all hover:gap-3">
            Nie widzisz swojej usługi? Zobacz pełny cennik
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
