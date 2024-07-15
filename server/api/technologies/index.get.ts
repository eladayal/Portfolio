import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NUXT_APP_SUPABASE_URL || "", process.env.NUXT_APP_SUPABASE_KEY || "");

export type Technology = {
  created_at: string;
  id: number;
  name: string;
  full_name: string;
  image: string;
  type: string;
};

export default defineEventHandler(async (event) => {
  try {
    let { data } = await supabase.from("technologies").select("*");
    const technologies = data;
    return technologies;
  } catch (e) {
    console.log(e);
  }
});
