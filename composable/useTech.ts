// import { Country } from '~/server/api/countries/index.get';

export type Technology = {
  id: number;
  name: string;
  image: string;
  type: string;
};

export default async () => {
  const technologies = useState("technologies", () => ({
    data: [] as any,
    lastFetched: 0,
  }));
  // technologies.value.data = [{ id: 1, name: "test", image: "test", type: "test" }];
  if (Date.now() - technologies.value.lastFetched > 1000 * 60 * 60) {
    const supabase = useSupabaseClient();
    //   // const data = await $fetch('/api/technologies');
    try {
      let { data: technologies, error } = await supabase.from("technologies").select("id");
      // console.log("technologies", technologies);
      technologies.value.data = technologies || [];
      technologies.value.lastFetched = Date.now();
    } catch (e) {
      console.log(e);
    }
  }

  return technologies;
};
