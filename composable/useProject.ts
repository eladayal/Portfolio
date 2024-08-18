import { Site } from "~/server/api/projects/index.get";

interface SiteWithHover extends Site {
  hover: boolean;
}

export default async () => {
  const projects = useState("projects", () => ({
    data: [] as SiteWithHover[], // Update the type to match your final data structure
    lastFetched: 0,
  }));

  if (Date.now() - projects.value.lastFetched > 1000 * 60 * 60) {
    try {
      // The response could either be an array or an error object
      let data: Site[] | { body: { message: string }; status: number } = await $fetch("/api/projects");

      // Check if the response is an array
      if (Array.isArray(data)) {
        const sites: SiteWithHover[] = data.map((project: Site) => ({
          ...project,
          hover: true,
        }));
        projects.value.data = sites;
      } else {
        // Handle the error scenario (optional)
        console.error(`Error fetching projects: ${data.body.message}`);
      }

      projects.value.lastFetched = Date.now();
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  return projects;
};
