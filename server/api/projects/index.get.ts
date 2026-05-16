import sitesData from "~/server/data/sites.json";
import type { Site } from "~/types";

export type { Site };

export default defineEventHandler(() => {
  return sitesData as Site[];
});
