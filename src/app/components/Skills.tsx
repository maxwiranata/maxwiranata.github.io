"use client";

import { skills } from "@/data/skills";
import { CardHoverEffect } from "../../components/partials/CardHoverEffect";

export function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-2 md:px-8">
      <h3 className="text-2xl lg:text-3xl font-bold text-white ml-2">Skills</h3>
      <p className="text-sm md:text-base text-neutral-500 ml-2 mb-4">
        The tech stacks I commonly work with
      </p>
      <CardHoverEffect items={skills} />
    </section>
  );
}
