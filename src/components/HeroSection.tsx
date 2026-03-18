import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-dentist.jpg";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div {...fadeInUp} className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
            Twój uśmiech w dobrych rękach
            <span className="text-primary"> — w samym sercu Krakowa</span>
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed text-pretty max-w-xl">
            Nowoczesna stomatologia bez bólu. Przyjazna atmosfera, doświadczeni lekarze i transparentne ceny.
          </p>
          {/* Social proof */}
          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span>4,9/5 na Google · ponad 1 200 zadowolonych pacjentów · Kraków, Starowiślna</span>
          </div>
          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="xl" asChild>
              <a href="#kontakt">
                Umów wizytę — to proste
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="accent-outline" size="xl" asChild>
              <Link to="/cennik">Sprawdź ceny usług</Link>
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <div className="relative rounded-card overflow-hidden shadow-card">
            <img
              src={heroImg}
              alt="Lekarz stomatolog w nowoczesnym gabinecie DentaKraków"
              className="w-full h-auto object-cover aspect-square lg:aspect-[4/5]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
