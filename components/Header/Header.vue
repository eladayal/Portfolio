<template>
  <div
    class="w-full fixed z-10 bg-transparent transition-all duration-300"
    :class="scrollPosition > 130 ? ' bg-white drop-shadow-lg' : ''"
  >
    <a href="/">
      <div
        class="container mx-auto flex justify-between items-center gap-5 py-10 transition-all duration-300 transition-height"
      >
        <!-- Site Logo -->
        <nuxt-img
          class="w-40 md:w-56"
          :class="scrollPosition > 130 ? '' : ''"
          :src="
            scrollPosition > 130 || !isCurrentRouteHome
              ? 'https://res.cloudinary.com/dbt4olgrj/image/upload/v1697352414/Portfolio/elad-logo-color_ipgnph.png'
              : 'https://res.cloudinary.com/dbt4olgrj/image/upload/v1697352414/Portfolio/elad-white-logo_aaqtbv.png'
          "
          alt="image"
          width="200"
          height="40"
        />

        <div>
          <nav class="flex gap-5">
            <a
              v-for="item in menu"
              :key="item.name"
              :href="item.link"
              class="text-lg font-medium text-white font-primary hover:!text-black transition-all duration-300"
              :class="scrollPosition > 130 || !isCurrentRouteHome ? '!text-primary' : ''"
            >
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const isCurrentRouteHome = computed(() => router.currentRoute.value.fullPath === "/");
const scrollPosition = ref(0);
const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function updateScroll() {
  scrollPosition.value = window.scrollY;
}
if (process.client) {
  window.addEventListener("scroll", updateScroll);
}
</script>

<style scoped>
.enlarge {
  @apply transform scale-110; /* Increase the image size by 25% */
  @apply transition-all duration-300; /* Add transition effect */
}
.descale {
  @apply transform scale-110; /* Increase the image size by 25% */
  @apply transition-all duration-300; /* Add transition effect */
}
</style>
