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

        <div
          class="w-full rounded group max-h-fit overflow-hidden shadow-md flex flex-col hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out"
        >
          <a href="/contact" class="!cursor-pointer">
            <div
              class="flex items-center justify-center w-full h-40 bg-slate-200 transition-all duration-300 ease-in-out"
            >
              <NuxtImg
                class="min-w-[150px] w-16 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-ou"
                src="/images/svg/yourlogogoeshere.png"
                alt=""
                preload
              />
            </div>

            <div class="px-6 py-4">
              <p class="font-bold text-xl mb-1">Your site</p>
              <p class="text-gray-700 text-base h-24 overflow-y-auto">
                Your next project could be featured here! <br />
                click here to get in touch.
              </p>
              <p class="text-lg font-bold text-sky-700 hover:underline">Mysite.com</p>
            </div>
            <div
              class="text-left space-y-2 md:opacity-0 md:translate-y-full transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            >
              <div class="flex gap-2 px-2 py-2">
                <div class="w-5 h-auto flex justify-center items-center">
                  <!-- <NuxtImg src="" class="object-contain" width="50" height="50" preload /> -->
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

onNuxtReady(async () => {
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
</script>

<style scoped></style>
