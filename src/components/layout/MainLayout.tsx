"use client";

import { usePathname } from "next/navigation";
import { TracingBeam } from "../partials/TracingBeam";
import { Navbar } from "./Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <main className="relative w-full flex items-center justify-center dark">
      <Navbar className="top-1 md:top-2" />
      <TracingBeam key={pathname}>{children}</TracingBeam>
    </main>
  );
}
