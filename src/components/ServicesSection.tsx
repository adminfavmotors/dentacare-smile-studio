import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles, Pill, Sun, BrainCircuit, Gem } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Search, name: "Przegląd i konsultacja", desc: "Diagnostyka i plan leczenia", price: "od 100 zł" },
  { icon: Sparkles, name: "Higienizacja zębów", desc: "Scaling + piaskowanie + polerowanie", price: "od 200 zł" },
  { icon: Pill, name: "Leczenie próchnicy", desc: "Wypełnienie kompozytowe", price: "od 200 zł" },
  { icon: Sun, name: "Wybielanie zębów", desc: "Profesjonalne wybielanie gabinetowe", price: "od 500 zł" },
  { icon: BrainCircuit, name: "Aparat ortodontyczny", desc: "Konsultacja ortodontyczna", price: "od 150 zł" },
  { icon: Gem, name: "Implant zębowy", desc: "Nowoczesne implanty tytanowe", price: "od 2 500 zł" },
];

const ServicesSection = () => (
  <section id="uslugi" className="py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
          Najczęściej wybierane usługi
        </h2>
        <p className="mt-4 text-muted text-lg">Przejrzyste ceny, wysoka jakość — bez niespodzianek</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="group bg-card rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <s.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{s.name}</h3>
            <p className="text-sm text-muted mb-6">{s.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-sans font-semibold text-primary tabular-nums">{s.price}</span>
              <Link
                to="/cennik"
                className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Więcej <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          to="/cennik"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Nie widzisz swojej usługi? Zobacz pełny cennik
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
