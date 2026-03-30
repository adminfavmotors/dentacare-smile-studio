import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

import { clinic } from "@/content/clinic";
import { cn } from "@/lib/utils";

type FloatingButtonsProps = {
  className?: string;
};

const FloatingButtons = ({ className }: FloatingButtonsProps) => {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={cn("fixed bottom-6 right-6 z-40 flex flex-col gap-3", className)}>
      <a
        href={clinic.phoneHref}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Zadzwoń"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href={clinic.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${shouldReduceMotion ? "" : "animate-pulse-soft"}`}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
