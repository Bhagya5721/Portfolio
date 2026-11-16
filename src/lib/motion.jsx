import { createElement, forwardRef } from "react";

const STRIP = ["initial","animate","exit","whileInView","whileHover",
  "whileTap","whileFocus","viewport","transition","variants","layout","layoutId"];
const cache = {};

export const motion = new Proxy({}, {
  get: (_, tag) =>
    (cache[tag] ??= forwardRef((props, ref) => {
      const clean = Object.fromEntries(
        Object.entries(props).filter(([k]) => !STRIP.includes(k))
      );
      return createElement(tag, { ...clean, ref });
    })),
});

export const AnimatePresence = ({ children }) => children;