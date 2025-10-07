"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

export const M = motion;

export function useFadeUp(delay = 0) {
  const prefersReduced = useReducedMotion();
  return {
    initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  } as const;
}

export function useStagger(containerDelay = 0) {
  return {
    container: {
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: 0.2 },
      variants: {
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: containerDelay },
        },
      },
    },
    item: {
      variants: {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
      },
    },
  } as const;
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut", delay },
  } as const;
}

export function riseIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  } as const;
}

export const hoverCard = {
  initial: { y: 0, scale: 1 },
  whileHover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  whileTap: { scale: 0.99 },
} as const;

export function SectionShell({
  id,
  title,
  description,
  children,
}: PropsWithChildren<{ id: string; title: string; description?: string }>) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 md:mb-14">
          <h2
            id={`${id}-title`}
            className="text-balance text-2xl md:text-4xl font-semibold tracking-tight"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-pretty text-base/6 text-muted-foreground md:max-w-3xl">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
