<template>
  <div class="px-10 md:px-20 container mx-auto py-32">
    <h1 class="font-primary text-center my-12">/projects.</h1>
    <Loader v-if="loading" />
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        <div
          class="rounded group max-h-fit overflow-hidden shadow-md flex flex-col hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          v-for="(project, idx) in projects"
          :key="idx">
          <a :href="project.url" class="!cursor-pointer">
            <div class="relative flex items-center justify-center w-full h-40 bg-slate-200 overflow-hidden">
              <NuxtImg
                class="dont-animate transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 w-16 min-w-[150px]"
                :src="project.image"
                :alt="project.name"
                preload />
              <NuxtImg
                class="dont-animate transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 w-full h-full object-cover"
                :src="project.site_image"
                :alt="project.name"
                preload />
            </div>

            <div class="px-6 py-4">
              <p class="font-bold text-xl mb-1">{{ project.name }}</p>
              <p class="text-gray-700 text-base h-24 overflow-y-auto">
                {{ project.description }}
              </p>
              <p class="text-lg font-bold text-sky-700 hover:underline">
                {{ project.site_name }}
              </p>
            </div>
            <div
              class="text-left space-y-2 md:opacity-0 md:translate-y-full transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              <div class="flex gap-2 px-2 py-2">
                <div class="w-5 h-auto flex justify-center items-center" v-for="(tag, idx) in project.tags" :key="idx">
                  <NuxtImg
                    v-if="icons.find((icon:any) => icon.name === tag)"
                    class="dont-animate object-contain"
                    :src="icons.find((icon:any) => icon.name === tag)?.image"
                    width="50"
                    height="50"
                    preload />
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
import useTech from "~/composable/useTech";
import useProject from "~/composable/useProject";
import type { Technology, Site } from "~/types";

useSeoMeta({
  title: "Projects | Elad Ayal",
  description: "A showcase of projects built by Elad Ayal — Full Stack Developer.",
  ogTitle: "Projects | Elad Ayal",
  ogDescription: "A showcase of projects built by Elad Ayal — Full Stack Developer.",
});

const technologies = await useTech();
const sites = await useProject();

const icons = ref<Technology[]>(technologies.value?.data || []);
const projects = ref<Site[]>(sites.value?.data || []);

const loading = ref<boolean>(false);
</script>

<style scoped></style>
