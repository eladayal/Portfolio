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
    let { data, error } = await supabase.from("sites").select("*");

    if (error) {
      console.error("Error fetching technologies:", error.message);
      return {
        status: 500,
        body: { message: "Error fetching technologies data" },
      };
    }

    return data;
  } catch (e: any) {
    console.error("Unexpected error:", e.message);
    return {
      status: 500,
      body: { message: "Unexpected server error" },
    };
  }
});
