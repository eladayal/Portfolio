<template>
  <div class="px-10 md:px-20 container mx-auto py-32">
    <h1 class="font-primary text-center my-12">/projects.</h1>
    <Loader v-if="loading" />
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        <div
          class="rounded group max-h-fit overflow-hidden shadow-md flex flex-col hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          v-for="(project, idx) in projects"
          :key="idx"
          @mouseover="setHover(idx, false)"
          @mouseleave="setHover(idx, true)"
        >
          <a :href="project.url" class="!cursor-pointer" target="_blank">
            <div
              class="flex items-center justify-center w-full h-40 bg-slate-200 transition-all duration-300 ease-in-out"
            >
              <NuxtImg
                class="transition-opacity duration-300 ease-in-out"
                :class="
                  project.hover
                    ? 'min-w-[150px] w-16 opacity-100 group-hover:opacity-0'
                    : 'opacity-0 w-full h-full object-cover group-hover:opacity-100'
                "
                :src="project.hover ? project.image : project.site_image"
                :alt="project.name"
                preload
              />
              <!-- <NuxtImg
                v-if="!hover"
                class="opacity-0 hidden group-hover:block group-hover:opacity-100 w-full transition-all duration-300 ease-in-out"
                :src="project.site_image"
                :alt="project.name"
              /> -->
            </div>

            <div class="px-6 py-4">
              <p class="font-bold text-xl mb-1">{{ project.name }}</p>
              <p class="text-gray-700 text-base h-24 overflow-y-auto">
                {{ project.description }}
              </p>
              <p class="text-lg font-bold text-sky-700 hover:underline">{{ project.site_name }}</p>
            </div>
            <div
              class="text-left space-y-2 md:opacity-0 md:translate-y-full transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            >
              <div class="flex gap-2 px-2 py-2">
                <div class="w-5 h-auto flex justify-center items-center" v-for="(tag, idx) in project.tags" :key="idx">
                  <NuxtImg
                    v-if="icons.find((icon:any) => icon.name === tag)"
                    class="object-contain"
                    :src="icons.find((icon:any) => icon.name === tag)?.image"
                    width="50"
                    height="50"
                    preload
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTech, { Technology } from "~/composable/useTech";

const supabase = useSupabaseClient();

const icons = ref<any>([]);
const projects = ref<any>([]);
const loading = ref<boolean>(false);
const hover = ref<boolean>(true);

const setHover = (index: number, value: boolean) => {
  projects.value[index].hover = value;
};

onMounted(async () => {
  try {
    loading.value = true;
    const { data: technologies, error: techError } = await supabase.from("technologies").select("*");
    const { data: sites, error } = await supabase.from("sites").select("*");

    if (!techError || !error) {
      icons.value = technologies;
      projects.value = sites;
      loading.value = false;

      // Initialize the 'hover' property for each project
      projects.value = sites?.map((project: any) => ({
        ...project,
        hover: true,
      }));
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});

// const projects = [
//   {
//     name: "NED - Data Centers",
//     siteName: "ned-dc.com",
//     description:
//       "an Israeli-based data center owner-operator. We focus on funding, designing, building and operating data centers",
//     image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697369517/Portfolio/ned_vyygbm.png",
//     url: "https://ned-dc.com/",
//     tags: ["php", "wp", "tailwind", "gsap", "alpine", "ps", "xd"],
//   },
//   {
//     name: "Mundo Market",
//     siteName: "mundomarket.co.il",
//     description:
//       "A tailor made site for a customer that specializes in importing of sweets and goods from all over the world!",
//     image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697373571/Portfolio/logo_hz8azz.png",
//     url: "https://test.mundomarket.co.il/",
//     tags: ["nuxt", "tailwind", "pinia", "prisma", "ps", "xd"],
//   },
//   {
//     name: "Jello",
//     siteName: "jello.io",
//     description:
//       "Trello base clone, Our goal was to create a Trello clone, a task management app designed to manage projects and increase productivity.!",
//     image:
//       "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697374679/Portfolio/Screenshot_2023-10-15_at_15.51.13_gj4xbf.png",
//     url: "https://jello-server-0byo.onrender.com/",
//     tags: ["react", "node", "tailwind", "mongo"],
//   },
//   {
//     name: "Place-IL",
//     siteName: "place-il.org",
//     description:
//       "Enabling Israeli tech companies to effectively hire new talent from under-represented groups at scale with minimal risk.",
//     image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697379862/Portfolio/logo-yangoAsset_2_uydlux.svg",
//     url: "https://place-il.org/join-us-lp/",
//     tags: ["php", "wp", "tailwind", "gsap", "alpine", "ps", "ai"],
//   },
//   {
//     name: "Aroma - Home Barista",
//     siteName: "aroma.dbur.co.il/barista",
//     description:
//       "Aroma - Home BaristaAroma - Home Barista Sep 2023 - PresentSep 2023 - Present A landing page for one of the largest coffeehouse and coffee distributors in Israel for a new service they provide. in addition of making real time adjustments to the site design and components to suit customer requests.",
//     image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697375337/Portfolio/aroma-logo_lc2blc.svg",
//     url: "https://aroma.dbur.co.il/barista",
//     tags: ["php", "wp", "tailwind", "gsap", "alpine", "ps", "ai"],
//   },
//   {
//     name: "Rustic Bakery",
//     siteName: "rustic-bakery.co.il",
//     description:
//       "Tailor made site for one of the largest importers of: Nature valley, Pillsbury, Haggen daaz and Fiber one,keeping the site responsive and up to date with latest technologies.Tailor made site for one of the largest importers of: Nature valley, Pillsbury, Haggen daaz and Fiber one, keeping the site responsive and up to date with latest technologies.",
//     image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697376517/Portfolio/Rustic-logo_shq4gz.png",
//     url: "https://rustic-bakery.co.il/",
//     tags: ["php", "wp", "tailwind", "gsap", "alpine", "ps", "xd"],
//   },
//   {
//     name: "Cyan",
//     siteName: "cyan-eilat.com",
//     description: "Real estate site for a customer, dynamic components and content management system.",
//     image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697375069/Portfolio/cyan-logo-inverted_kwepe8.svg",
//     url: "https://cyan-eilat.com/",
//     tags: ["php", "wp", "tailwind", "gsap", "alpine", "ps", "figma"],
//   },
// ];

// const icons = [
//   {
//     name: "vue",
//     imagePath: "/images/icons/vue.png",
//   },
//   {
//     name: "nuxt",
//     imagePath: "/images/icons/nuxt.png",
//   },
//   {
//     name: "react",
//     imagePath: "/images/icons/react.png",
//   },
//   {
//     name: "node",
//     imagePath: "/images/icons/node.png",
//   },
//   {
//     name: "php",
//     imagePath: "/images/icons/php.png",
//   },
//   {
//     name: "wp",
//     imagePath: "/images/icons/wp.png",
//   },
//   {
//     name: "tailwind",
//     imagePath: "/images/icons/tailwind.png",
//   },
//   {
//     name: "gsap",
//     imagePath: "/images/icons/gsap.svg",
//   },
//   {
//     name: "alpine",
//     imagePath: "/images/icons/alpine.png",
//   },
//   {
//     name: "ps",
//     imagePath: "/images/icons/adobeps.png",
//   },
//   {
//     name: "xd",
//     imagePath: "/images/icons/adobexd.png",
//   },
//   {
//     name: "ai",
//     imagePath: "/images/icons/adobeai.png",
//   },
//   {
//     name: "figma",
//     imagePath: "/images/icons/figma.webp",
//   },
//   {
//     name: "prisma",
//     imagePath: "/images/icons/prisma.png",
//   },
//   {
//     name: "pinia",
//     imagePath: "/images/icons/pinia.png",
//   },
//   {
//     name: "mongo",
//     imagePath: "/images/icons/mongo.png",
//   },
//   {
//     name: "mysql",
//     imagePath: "/images/icons/mysql.png",
//   },
// ];
</script>

<style scoped></style>
