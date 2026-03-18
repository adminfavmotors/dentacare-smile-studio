import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+48124567890"
        className="w-14 h-14 rounded-full bg-accent shadow-lg flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform"
        aria-label="Zadzwoń"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/48124567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform animate-pulse-soft"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
