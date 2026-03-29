import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import { reviews, socialProof } from "@/content/clinic";
import { useRevealMotion } from "@/hooks/use-reveal-motion";

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { getRevealProps, shouldReduceMotion } = useRevealMotion();

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused || shouldReduceMotion) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next, shouldReduceMotion]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...getRevealProps()} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Co mówią nasi pacjenci</h2>
        </motion.div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-card rounded-card p-10 sm:p-14 shadow-card min-h-[240px] flex flex-col justify-center text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed italic text-pretty">
              "{reviews[current].text}"
            </blockquote>
            <p className="mt-6 text-sm text-muted font-medium">
              — {reviews[current].author}, Google
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full hover:bg-primary-light transition-colors" aria-label="Poprzednia opinia">
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary/20"}`}
                  aria-label={`Opinia ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full hover:bg-primary-light transition-colors" aria-label="Następna opinia">
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          <p className="text-center text-sm text-muted mt-6">
            <Star className="w-4 h-4 fill-accent text-accent inline mr-1" />
            {socialProof.rating} na podstawie {socialProof.reviewsLabel}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
