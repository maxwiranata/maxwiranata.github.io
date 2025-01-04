"use client";

import Link from "next/link";
import { ContainerScroll } from "@/components/partials/ContainerScrollAnimation";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { HoverBorderGradient } from "@/components/partials/HoverBorderGradient";
import { Project } from "@/types/Project";

export default function PortfolioDetail({
  params,
}: {
  params: { id: string };
}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [project, setProject] = useState<Project>();
  const [componentLoading, setComponentLoading] = useState(true);

  useEffect(() => {
    if (parseInt(params.id) > 14) {
      window.location.href = "/404";
      return;
    }

    const foundProject = projects.find(
      (project) => project.id === parseInt(params.id)
    );
    setProject(foundProject);

    setComponentLoading(false);
  }, [params.id]);

  if (componentLoading) return <div className="min-h-screen" />;

  return (
    <>
      <section className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-lg md:text-3xl font-medium text-white px-2 md:px-0">
                {project?.description} <br />
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold mt-1 leading-none px-2 md:px-0">
                  {project?.title}
                </span>
              </h1>
              <p
                className={`my-4 text-neutral-300 text-center max-w-4xl mx-auto text-sm md:text-base px-2 md:px-0 ${
                  !project?.link && "pb-8"
                }`}
              >
                {project?.shortSummary}
              </p>
              {project && project.link && (
                <div className="flex items-center justify-center pb-12">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white"
                  >
                    <Link href={project.link}>Open Live Site</Link>
                  </HoverBorderGradient>
                </div>
              )}
            </>
          }
        >
          <Image
            src={
              project?.thumbnail ? project.thumbnail : project?.images[0] || ""
            }
            alt="hero"
            height={720}
            width={1400}
            className={`mx-auto rounded-2xl object-cover h-full ${
              !project?.thumbnail && "object-top"
            }`}
            draggable={false}
          />
        </ContainerScroll>
      </section>
      <section className="mx-auto max-w-6xl flex flex-col gap-y-6 md:gap-y-12">
        <div className="pl-4 md:pl-12 lg:pl-0">
          <h3 className="text-2xl lg:text-3xl font-bold dark:text-white text-black mb-4">
            Tech Stack
          </h3>
          <div className="flex items-center overflow-x-auto pb-4 scrollbar-hide">
            {project?.techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 mr-8"
              >
                <tech.icon
                  size={48}
                  color="#ffffff"
                  className="mb-2 h-12 w-auto"
                />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 md:px-12 lg:px-0">
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            Summary and Feedback
          </h3>
          <p className="text-sm md:text-base text-white font-medium my-2">
            &quot;{project?.summaryTitle}&quot;
          </p>
          <p className="text-sm md:text-base text-neutral-300">
            {project?.summaryDescription}
          </p>
        </div>
        <div className="px-4 md:px-12 lg:px-0">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 pt-4 md:pt-2">
            Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project?.images.map((image, index) => (
              <motion.div
                key={index}
                layoutId={`image-${index}`}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedImage !== null && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                  className="fixed inset-0 z-50 bg-black/60"
                />
                <motion.div
                  layoutId={`image-${selectedImage}`}
                  className="fixed inset-0 z-50 flex items-center justify-center"
                >
                  <div className="relative h-[90vh] w-[90vw]">
                    <Image
                      src={project?.images[selectedImage] || ""}
                      alt={`Gallery image`}
                      fill
                      className="object-contain"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-0 right-4 p-2 text-white bg-black/50 rounded-full"
                    >
                      <IconX size={28} />
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
