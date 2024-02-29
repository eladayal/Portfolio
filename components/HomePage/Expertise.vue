<template>
  <div
    class="px-10 lg:px-20 bg-cv-primary h-[80vh] flex flex-col justify-center text-white pt-20 pb-20 overflow-hidden"
  >
    <h2 class="py-5 text-5xl text-white text-center">/Experience.</h2>
    <div class="container mx-auto max-lg:px-10 grid grid-cols-1 lg:grid-cols-3 max-lg:gap-10">
      <!-- Box  -->
      <div v-for="(experience, idx) in expertises" class="flex flex-col lg:gap-5 expertise-box" :key="idx">
        <div class="flex gap-5">
          <div class="w-12">
            <img class="w-full" :src="experience.imagePath" alt="" />
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold custom-underline" :class="experience.color">
              {{ experience.title }}
            </h2>
            <h2 class="text-2xl lg:text-3xl font-bold">{{ experience.subtitle }}</h2>
          </div>
        </div>

        <div class="coding-tags">
          <p class="pl-10 text-lg">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const expertises = [
  {
    title: "Software",
    subtitle: "Developer",
    imagePath: "/images/icons/expertise-icons/software-white.png",
    description:
      "Experienced with JavaScript, TypeScript. I have a passion for building scalable and maintainable software.",
    color: "software",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Vue.js, Nuxt3",
    imagePath: "/images/icons/expertise-icons/whitelogo.png",
    description:
      "Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, Vue.js and Nuxt frameworks and more.",
    color: "vue",
  },
  {
    title: "Design & UI/UX",
    subtitle: "CSS, Tailwind, Figma, Adobe ",
    imagePath: "/images/icons/expertise-icons/tailwind-white.png",
    description: "I build beautiful and responsive websites using modern frontend technologies",
    color: "design",
  },
];
</script>

<style lang="scss" scoped>
.expertise-box {
  @apply border-2 border-white p-6;
}

.custom-underline {
  @apply relative z-10;
  &::after {
    transition: all 0.1s ease-in-out;
    content: "";
    position: absolute;
    bottom: 13.5%;
    z-index: -1;
    height: 0.3em;
    width: 100%;
    left: -1%;
  }
  &.software::after {
    background: linear-gradient(65deg, #2f73bf 0%, #f7df1c 100%, rgba(255, 208, 0, 0) 100%);
  }
  &.vue::after {
    background: linear-gradient(65deg, #42d392 0%, #647eff 100%, rgba(255, 208, 0, 0) 100%);
  }
  &.design::after {
    background: linear-gradient(65deg, #0ba5e9 0%, #ff0801 100%, rgba(255, 208, 0, 0) 100%);
  }
}

.coding-tags {
  @apply text-white before:content-['<p>'] after:content-['</p>'] before:opacity-50 after:opacity-50 font-mono;
}
</style>
