"use client";

import { HoverBorderGradient } from "@/components/partials/HoverBorderGradient";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export const About = () => {
  const [active, setActive] = useState(0);

  const images: string[] = [
    "/images/about/1.webp",
    "/images/about/2.webp",
    "/images/about/3.webp",
    "/images/about/4.webp",
    "/images/about/5.webp",
  ];

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <section className="max-w-7xl mx-auto antialiased font-sans px-4 md:pl-12 pt-10 pb-20 lg:mb-20">
      <div className="relative flex items-center gap-x-16 xl:gap-x-24 flex-col lg:flex-row">
        <div className="relative h-80 w-full aspect-square lg:pr-16 xl:pr-24">
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : images.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom px-6 md:px-0 flex justify-center items-center"
              >
                <Image
                  src={image}
                  alt=""
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-64 lg:h-96 w-auto rounded-3xl object-cover object-center aspect-square"
                  priority
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold dark:text-white text-black">
              About Me
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-neutral-500">
              Maximus Aurelius Wiranata
            </p>
            <motion.p className="text-base md:text-lg mt-4 md:mt-8 text-neutral-300">
              {"I'm a Full-Stack Developer, UI/UX Designer, and iOS Developer with a Bachelor's degree in Computer Science and 3 years of experience. I specialize in creating scalable web applications, intuitive user interfaces, and innovative iOS solutions. With a blend of technical expertise and creativity, I'm passionate about delivering impactful digital experiences while continuously learning and evolving in the tech industry."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    whileInView={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="my-6">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center"
            >
              <Link href="/about">Learn more</Link>
            </HoverBorderGradient>
          </div>

          <div className="gap-4 pt-12 md:pt-0 hidden md:flex">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
