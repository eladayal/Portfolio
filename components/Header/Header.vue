<template>
  <div
    class="w-full fixed z-30 bg-transparent transition-all duration-300"
    :class="scrollPosition > 130 ? ' bg-white drop-shadow-lg' : ''"
  >
    <div
      class="container mx-auto px-10 md:px-20 flex justify-between items-center gap-5 py-5 transition-all duration-300 transition-height"
    >
      <!-- Site Logo -->
      <a href="/">
        <img
          class="site-logo w-40 md:w-56"
          :class="scrollPosition > 130 ? '' : ''"
          :src="
            scrollPosition > 130 || !isCurrentRouteHome
              ? 'https://res.cloudinary.com/dbt4olgrj/image/upload/v1698231194/Portfolio/logo-blue_vpgtzv.png'
              : 'https://res.cloudinary.com/dbt4olgrj/image/upload/v1697352414/Portfolio/elad-white-logo_aaqtbv.png'
          "
          alt="image"
          width="200"
          height="40"
        />
      </a>
      <!-- Mobile Menu -->
      <div class="block md:hidden">
        <svg
          @click="isMenuOpen = true"
          class="w-8 h-8 fill-black"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M4 18h16M4 12h16M4 6h16"
            :stroke="scrollPosition > 130 ? '#000' : '#fff'"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <!-- Screen -->

        <div
          v-if="isMenuOpen"
          class="lg:hidden cursor-pointer fixed w-screen h-screen top-0 left-0 z-10 bg-black/70 transition-all"
          @click="isMenuOpen = false"
          @keypress="isMenuOpen = false"
        ></div>
        <!-- Menu -->
        <Transition name="slide-fade">
          <div
            v-show="isMenuOpen"
            class="py-10 flex lg:hidden flex-col gap-7 items-center fixed right-0 z-20 top-0 h-screen w-60 bg-[#fafafa]"
          >
            <button
              class="absolute left-0 top-0 text-white -translate-x-1/2 translate-y-5 p-2.5 bg-cv-primary"
              @click="isMenuOpen = false"
              @keypress="isMenuOpen = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 20.744 20.744">
                <g id="Group_52" data-name="Group 52" transform="translate(-5614.304 -1030.01)">
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    x2="18.622"
                    y2="18.622"
                    transform="translate(5615.364 1031.07)"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="3"
                  />
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    y1="18.622"
                    x2="18.622"
                    transform="translate(5615.364 1031.07)"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </button>
            <nav class="flex flex-col justify-center items-center gap-5">
              <a
                v-for="item in menu"
                :key="item.name"
                :href="item.link"
                class="text-lg font-medium text-primary font-primary hover:!text-black transition-all duration-300"
              >
                {{ item.name }}
              </a>
            </nav>
          </div>
        </Transition>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:block">
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
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const isMenuOpen = ref(false);
const scrollPosition = ref(0);
const isCurrentRouteHome = computed(() => router.currentRoute.value.fullPath === "/");
const menu = [
  {
    name: "Projects",
    link: "/projects",
  },

  {
    name: "Resume",
    link: "/resume",
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
