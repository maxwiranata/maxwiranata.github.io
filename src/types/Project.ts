import { IconType } from "react-icons";

export type Project = {
  id: number;
  title: string;
  description: string;
  shortSummary: string;
  link?: string;
  techStack: TechStack[];
  summaryTitle: string;
  summaryDescription: string;
  images: string[];
  thumbnail?: string;
};

type TechStack = {
  name: string;
  icon: IconType;
};
