import { motion } from "framer-motion";
import { Smile, Clock, MessageCircle, Award } from "lucide-react";

const benefits = [
  { icon: Smile, title: "Leczenie bez bólu", desc: "Znieczulenie miejscowe i nowoczesny sprzęt — wizyta bez stresu" },
  { icon: Clock, title: "Przyjmujemy do 20:00", desc: "Wieczorne godziny — bez kolizji z pracą" },
  { icon: MessageCircle, title: "Bezpłatna konsultacja", desc: "Pierwsza rozmowa z lekarzem — gratis, bez zobowiązań" },
  { icon: Award, title: "15 lat doświadczenia", desc: "Lekarze z certyfikatami PTS i wieloletnią praktyką" },
];

const WhyUsSection = () => (
  <section className="py-24 bg-primary-light/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-card rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <b.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
