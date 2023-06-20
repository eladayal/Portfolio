<template>
  <div>
    <div class="w-full flex justify-between items-center container">
      <div class="flex flex-col py-14">
        <nuxt-img class="" src="/images/cycledlogo.png" alt="image" width="200" height="auto" />
        <div class="my-5 text-2xl font-medium font-primary">
          Turn your <span class="emphasis font-semibold">trash</span>, into
          <span class="emphasis font-semibold">Cash</span>
        </div>
      </div>
      <div class="text-center">
        <small class="font-semibold">Copyright © 2023 All rights reserved to Cycled</small>
        <div class="flex gap-1">
          <div v-for="creator in creators" class="flex">
            <nuxt-link :to="creator.linkedin">
              <small class="">{{ creator.name }} | </small>
            </nuxt-link>
          </div>
        </div>
      </div>
      <nav class="social-nav flex gap-5">
        <nuxt-img
          v-for="nav in socialNav"
          :key="nav.icon"
          class=""
          :src="`/images/${nav.icon}.png`"
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
    icon: "facebook",
  },
  {
    icon: "insta",
  },
  {
    icon: "linkedin",
  },
];

const creators = [
  { name: "Stav Schnarch", linkedin: "https://www.linkedin.com/in/stav-schnarch-13856a272" },
  { name: "Rom Elias" },
  { name: "Yehonatan Sabag" },
  { name: "Rotem Strauss" },
  { name: "Ilay Landes" },
];
</script>

<style scoped></style>
