import { serverSupabaseClient } from "#supabase/server";

export type Project = {
  created_at: string;
  id: number;
  name: string;
  description: string;
  site_name: string;
  site_image: string;
  url: string;
  tags: string[];
  hover?: boolean;
};

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  try {
    let { data } = await client.from("sites").select("*");
    const sites = data;
    return sites;
  } catch (e) {
    console.log(e);
  }
});
