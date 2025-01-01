import Hero from "@/app/components/Hero";
import { Skills } from "@/app/components/Skills";
import { About } from "./components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
}
