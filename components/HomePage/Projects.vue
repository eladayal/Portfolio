<template>
  <section id="projects" class="bg-primary text-white overflow-hidden">
    <div class="container mx-auto gap-10 grid grid-cols-1 lg:grid-cols-2 p-10 lg:py-20">
      <div class="w-full lg:w-3/4 flex flex-col gap-5 justify-evenly justify-self-center lg:justify-self-end lg:py-16">
        <h2 class="py-5 text-white text-5xl">/Projects.</h2>
        <p class="font-mono text-xl leading-relaxed sap">
          Built and deployed 20+ projects ranging from e-commerce sites for global brands to well-known local brands,
          specializing in scalable web and hybrid mobile applications using Vue and PWA technologies.
        </p>

        <a href="/projects"
          ><button
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            View more projects
          </button></a
        >
      </div>
      <div class="flex justify-center items-center w-full">
        <img class="lg:px-28 w-3/4 lg:w-full" src="/images/projects.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
