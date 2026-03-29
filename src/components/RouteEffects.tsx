import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 96;

const RouteEffects = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    const scrollToHash = () => {
      if (!hash) return false;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return false;

      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(top, 0), behavior: scrollBehavior });
      return true;
    };

    const frameId = window.requestAnimationFrame(() => {
      if (!scrollToHash()) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
};

export default RouteEffects;
