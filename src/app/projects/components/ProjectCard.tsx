import { PinContainer } from "@/components/partials/3dPin";
import Image from "next/image";
import { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  icons: IconType[];
}

export default function ProjectCard({
  title,
  description,
  href,
  image,
  icons,
}: ProjectCardProps) {
  return (
    <PinContainer title={title} href={href}>
      <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2">
        <h3 className="max-w-xs !pb-1 !m-0 font-bold text-lg xl:text-xl text-white">
          {title}
        </h3>
        <div className="text-sm xl:text-base !m-0 !p-0 font-normal">
          <span className="text-neutral-400">{description}</span>
        </div>
        <Image
          src={image}
          alt="project"
          className="w-full h-auto mt-6 mb-8 aspect-video object-cover object-top rounded-md"
          width={400}
          height={200}
          priority
        />
        <div className="flex items-center gap-x-4 text-white">
          {icons.map((Icon, index) => (
            <Icon key={index} size={28} />
          ))}
        </div>
      </div>
    </PinContainer>
  );
}
