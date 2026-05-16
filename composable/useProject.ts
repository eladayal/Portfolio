import type { Site } from "~/types";

interface SiteWithHover extends Site {
  hover: boolean;
}

export default async () => {
  const projects = useState("projects", () => ({
    data: [] as SiteWithHover[],
    lastFetched: 0,
  }));

  if (Date.now() - projects.value.lastFetched > 1000 * 60 * 60) {
    try {
      const data = await $fetch("/api/projects");

      if (Array.isArray(data)) {
        projects.value.data = (data as Site[]).map((project) => ({
          ...project,
          hover: true,
        }));
      }

      projects.value.lastFetched = Date.now();
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  return projects;
};
