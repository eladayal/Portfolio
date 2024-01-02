<template>
  <div>
    <div class="container my-5 md:my-0 w-full flex flex-col md:flex-row gap-5 md:gap-5 justify-between items-center">
      <div class="flex flex-col md:py-14 items-center">
        <NuxtImg
          src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1698231194/Portfolio/logo-blue_vpgtzv.png"
          alt="image"
          width="200"
          height="auto"
        />
        <div class="my-5 text-2xl font-medium font-primary">
          Coding done <span class="emphasis font-semibold">your way</span>
        </div>
      </div>
      <div class="text-center">
        <small class="font-semibold"
          >Copyright © 2021 All rights reserved to <span class="emphasis font-semibold">Elad Ayal</span></small
        >
      </div>
      <nav class="social-nav flex gap-5">
        <div v-for="nav in socialNav" :key="nav.icon">
          <NuxtLink target="_blank" :href="nav.url" ta>
            <NuxtImg
              class="w-7 h-7 hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              :src="nav.icon"
              alt="image"
              width="40"
              height="40"
            />
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const socialNav = [
  {
    name: "github",
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1698318279/Portfolio/github_qyyfhs.png",
    url: "https://github.com/eladayal",
  },
  {
    name: "linkedin",
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1698318280/Portfolio/linkedin_m3re2v.png",
    url: "https://www.linkedin.com/in/eladayal/",
  },
  {
    name: "instagram",
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1698318279/Portfolio/instagram_awokxd.png",
    url: "https://www.instagram.com/eladayal/",
  },
];
</script>

<style scoped></style>
