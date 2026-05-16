import technologiesData from "~/server/data/technologies.json";
import type { Technology } from "~/types";

export type { Technology };

export default defineEventHandler(() => {
  return technologiesData as Technology[];
});
