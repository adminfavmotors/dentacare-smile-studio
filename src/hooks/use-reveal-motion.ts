import { useReducedMotion } from "framer-motion";

import { getRevealTransition, revealHidden, revealViewport, revealVisible } from "@/lib/motion";

export const useRevealMotion = () => {
  const shouldReduceMotion = useReducedMotion();

  const getRevealProps = (delay = 0, duration = 0.4) =>
    shouldReduceMotion
      ? {
          initial: false as const,
          whileInView: revealVisible,
          viewport: revealViewport,
          transition: { duration: 0 },
        }
      : {
          initial: revealHidden,
          whileInView: revealVisible,
          viewport: revealViewport,
          transition: getRevealTransition(delay, duration),
        };

  const getImmediateRevealProps = (delay = 0, duration = 0.5) => ({
    initial: false as const,
    animate: revealVisible,
    transition: shouldReduceMotion ? { duration: 0 } : getRevealTransition(delay, duration),
  });

  return {
    shouldReduceMotion,
    getRevealProps,
    getImmediateRevealProps,
  };
};
