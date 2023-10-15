<template>
  <div class="container mx-auto py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
      <div
        class="group max-w-sm w-full rounded overflow-hidden shadow-lg flex flex-col transition-all duration-300 ease-in-out"
        v-for="(project, idx) in projects"
        :key="idx"
      >
        <a :href="project.url" class="!cursor-pointer" target="_blank">
          <div
            class="flex items-center justify-center w-full h-40 p-4 bg-slate-200 transition-all duration-300 ease-in-out"
          >
            <nuxt-img
              class="min-w-[150px] object-cover"
              :src="project.image"
              :alt="project.name"
              width="150"
              height="150"
            />
          </div>
          <div class="px-6 py-4">
            <p class="font-bold text-xl mb-2">{{ project.name }}</p>
            <!-- <p
          class="md:hidden group-hover:block md:invisible group-hover:visible text-gray-700 text-base transition-all duration-300 ease-in-out"
        >
          {{ project.description }}
        </p> -->
            <a target="_blank" :href="project.url">{{ project.siteName }}</a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "NED - Data Centers",
    siteName: "ned-dc.com",
    description:
      "an Israeli-based data center owner-operator. We focus on funding, designing, building and operating data centers",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697369517/Portfolio/ned_vyygbm.png",
    url: "https://ned-dc.com/",
  },
  {
    name: "Mundo Market",
    siteName: "mundomarket.co.il",
    description:
      "A tailor made site for a customer that specializes in importing of sweets and goods from all over the world!",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697373571/Portfolio/logo_hz8azz.png",
    url: "https://test.mundomarket.co.il/",
  },
  {
    name: "Jello",
    siteName: "jello.io",
    description:
      "Trello base clone, Our goal was to create a Trello clone, a task management app designed to manage projects and increase productivity.!",
    image:
      "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697374679/Portfolio/Screenshot_2023-10-15_at_15.51.13_gj4xbf.png",
    url: "https://jello-server-0byo.onrender.com/",
  },
  {
    name: "Place-IL",
    siteName: "place-il.org",
    description:
      "Enabling Israeli tech companies to effectively hire new talent from under-represented groups at scale with minimal risk.",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697379862/Portfolio/logo-yangoAsset_2_uydlux.svg",
    url: "https://place-il.org/join-us-lp/",
  },
  {
    name: "Aroma - Home Barista",
    siteName: "aroma.dbur.co.il/barista",
    description:
      "Aroma - Home BaristaAroma - Home Barista Sep 2023 - PresentSep 2023 - Present A landing page for one of the largest coffeehouse and coffee distributors in Israel for a new service they provide. in addition of making real time adjustments to the site design and components to suit customer requests.",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697375337/Portfolio/aroma-logo_lc2blc.svg",
    url: "https://aroma.dbur.co.il/barista",
  },
  {
    name: "Rustic Bakery",
    siteName: "rustic-bakery.co.il",
    description:
      "Tailor made site for one of the largest importers of: Nature valley, Pillsbury, Haggen daaz and Fiber one,keeping the site responsive and up to date with latest technologies.Tailor made site for one of the largest importers of: Nature valley, Pillsbury, Haggen daaz and Fiber one, keeping the site responsive and up to date with latest technologies.",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697376517/Portfolio/Rustic-logo_shq4gz.png",
    url: "https://rustic-bakery.co.il/",
  },
  {
    name: "Cyan",
    siteName: "cyan-eilat.com",
    description: "Real estate site for a customer, dynamic components and content management system. ",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1697375069/Portfolio/cyan-logo-inverted_kwepe8.svg",
    url: "https://cyan-eilat.com/",
  },
];
</script>

<style scoped></style>
