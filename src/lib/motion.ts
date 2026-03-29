import type { Transition, ViewportOptions } from "framer-motion";

const revealEase: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.2,
};

export const revealVisible = {
  opacity: 1,
  y: 0,
};

export const revealHidden = {
  opacity: 0,
  y: 15,
};

export const getRevealTransition = (delay = 0, duration = 0.4): Transition => ({
  duration,
  delay,
  ease: revealEase,
});
