import { Technology } from "~/server/api/technologies/index.get";

export default async () => {
  const technologies = useState("technologies", () => ({
    data: [] as Technology[],
    lastFetched: 0,
  }));

  if (Date.now() - technologies.value.lastFetched > 1000 * 60 * 60) {
    const data = await $fetch("/api/technologies");
    technologies.value.data = data as Technology[];
    technologies.value.lastFetched = Date.now();
  }

  return technologies;
};
