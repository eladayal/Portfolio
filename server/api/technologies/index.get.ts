import { serverSupabaseClient } from "#supabase/server";

export type Technology = {
  created_at: string;
  id: number;
  name: string;
  full_name: string;
  image: string;
  type: string;
};

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  try {
    let { data } = await client.from("technologies").select("*");
    const technologies = data;
    return technologies;
  } catch (e) {
    console.log(e);
  }
});
