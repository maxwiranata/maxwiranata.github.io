"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center gap-x-8 px-8 py-4 sm:py-6 max-w-[100vw]">
        <Image
          src="/images/logo.webp"
          alt="logo"
          className="absolute top-6 left-8 mt-0.5 hidden sm:block"
          width={72}
          height={28}
        />
        <Link
          href="/"
          className="hover:text-neutral-300 transition text-center"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-neutral-300 transition text-center"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="hover:text-neutral-300 transition text-center"
        >
          Projects
        </Link>
      </nav>
    </div>
  );
}
