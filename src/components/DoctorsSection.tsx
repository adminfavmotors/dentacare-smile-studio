import { motion } from "framer-motion";

import { doctors } from "@/content/clinic";
import { useRevealMotion } from "@/hooks/use-reveal-motion";

const DoctorsSection = () => {
  const { getRevealProps } = useRevealMotion();

  return (
    <section id="zespol" className="py-24 bg-primary-light/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...getRevealProps()} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Poznaj nasz zespół</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((d, index) => (
            <motion.div
              key={d.name}
              {...getRevealProps(index * 0.05)}
              className="bg-card rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <img
                src={d.image}
                alt={`Zdjęcie ${d.name}`}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{d.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{d.specialization}</p>
                <p className="text-muted text-sm mt-2">{d.credentials}</p>
                <p className="text-muted text-sm">{d.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
