import { forwardRef } from "react";
import Marquee from "react-fast-marquee";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const WordMarquee = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn("relative w-full z-0", className)}
        ref={ref}
        {...props}
      >
        <Marquee
          play
          className="flex items-center px-8 md:px-16 xl:px-32 2xl:px-96 bg-transparent"
          style={{ background: "transparent !important" }}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={cn(
                "mr-16 text-base font-medium sm:text-xl flex items-center gap-2 bg-transparent",
                index % 2 === 0 ? "text-neutral-100" : "text-neutral-400"
              )}
            >
              <skill.icon className="w-6 h-6" />
              {skill.title}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute top-0 z-10 h-[28px] w-full bg-gradient-to-r from-transparent from-70% to-neutral-950" />
        <div className="pointer-events-none absolute top-0 z-10 h-[28px] w-full bg-gradient-to-l from-transparent from-70% to-neutral-950" />
      </section>
    );
  }
);

WordMarquee.displayName = "WordMarquee";

export default WordMarquee;
