import { Project } from "~/server/api/projects/index.get";

export default async () => {
  const projects = useState("projects", () => ({
    data: [] as Project[],
    lastFetched: 0,
  }));

  if (Date.now() - projects.value.lastFetched > 1000 * 60 * 60) {
    let data = await $fetch("/api/projects");
    const sites: any = data?.map((project: any) => ({
      ...project,
      hover: true,
    }));
    projects.value.data = sites;
    projects.value.lastFetched = Date.now();
  }

  return projects;
};
