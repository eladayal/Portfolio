<template>
  <div>
    <div class="container my-5 md:my-0 w-full flex flex-col md:flex-row gap-5 md:gap-5 justify-between items-center">
      <div class="flex flex-col md:py-14 items-center">
        <nuxt-img
          src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1697352414/Portfolio/elad-logo-color_ipgnph.png"
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
        <nuxt-img
          v-for="nav in socialNav"
          :key="nav.icon"
          class=""
          :src="nav.icon"
          alt="image"
          width="40"
          height="auto"
        />
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const socialNav = [
  {
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/facebook_ots8uf.png",
  },
  {
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329348/Cycled/insta_yjkezr.png",
  },
  {
    icon: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/linkedin_etr33h.png",
  },
];
</script>

<style scoped></style>
