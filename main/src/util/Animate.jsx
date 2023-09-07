import { useScroll } from "framer-motion";

export const selectedImageAnimation = {};

export const staggerEffect = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const scrollProgress = (ref) =>
  useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
