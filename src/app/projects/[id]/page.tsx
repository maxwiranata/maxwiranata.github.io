import { projects } from "@/data/projects";
import ProjectDetail from "./components/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectDetail params={params} />;
}
