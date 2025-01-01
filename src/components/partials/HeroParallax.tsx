"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./FlipWords";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { MdDownload } from "react-icons/md";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[280vh] lg:h-[285vh] xl:h-[265vh] pt-32 overflow-hidden antialiased relative z-20 flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <h3 className="text-2xl lg:text-3xl font-bold dark:text-white text-black ml-4 md:ml-16 xl:ml-28">
          My Projects
        </h3>
        <p className="text-sm md:text-base text-gray-500 dark:text-neutral-500 mt-1 ml-4 md:ml-16 xl:ml-28 mb-8">
          A glimpse into what I&apos;ve created
        </p>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 mb-12">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-12 mb-12">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <div className="w-full flex justify-center mt-8 md:mt-12">
          <Link href="/projects">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center"
            >
              View All Projects
            </HoverBorderGradient>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words = ["Fullstack-Developer", "iOS-Developer", "UI/UX-Designer"];

  return (
    <section className="max-w-7xl relative mx-auto pt-16 sm:pt-28 pb-32 px-4 md:px-12 xl:px-4 w-full left-0 top-0 z-50">
      <p className="text-base sm:text-xl lg:text-3xl xl:text-4xl font-semibold mb-6">
        Hi! I&apos;m Maximus Aurelius Wiranata
      </p>
      <h1 className="text-[29px] sm:text-3xl md:text-6xl lg:text-7xl font-bold dark:text-white">
        <FlipWords words={words} />
      </h1>
      <div className="max-w-xl my-6 text-neutral-200 text-sm md:text-base">
        I&apos;m a passionate Full-Stack Developer, UI/UX Designer, and iOS
        Developer dedicated to creating innovative and user-friendly digital
        experiences. I thrive on turning complex ideas into elegant solutions
        that inspire and engage users.
      </div>
      <a href="/pdf/cv.pdf" download>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center gap-x-2"
        >
          <MdDownload size={20} /> Download CV
        </HoverBorderGradient>{" "}
      </a>
    </section>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -8,
      }}
      key={product.title}
      className="group/product h-48 w-[20rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-all"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
