"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-1 md:p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <item.icon className="mx-auto w-12 md:w-16 xl:w-20" size={64} />
            <h4
              className={cn(
                "font-semibold tracking-wide mt-4 sm:mt-6 text-center text-sm sm:text-base",
                className
              )}
            >
              {item.title}
            </h4>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 md:p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
