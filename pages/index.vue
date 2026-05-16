<template>
  <div>
    <HomePageWelcomeHero />

    <HomePageSkills />

    <HomePageExpertise />

    <HomePageProfessionalExperience />

    <HomePageProjects />

  </div>
</template>

<script setup lang="ts">
import useTech from "~/composable/useTech";

useSeoMeta({
  title: "Elad Ayal | Full Stack Developer",
  description: "Portfolio of Elad Ayal — Full Stack Developer specializing in Vue, Nuxt, TypeScript, and modern web technologies.",
  ogTitle: "Elad Ayal | Full Stack Developer",
  ogDescription: "Portfolio of Elad Ayal — Full Stack Developer specializing in Vue, Nuxt, TypeScript, and modern web technologies.",
});

await useTech();
</script>

<style scoped>
.contact-me-title {
  @apply text-white;
}
.text-shadow {
  text-shadow: -1px 2px 2px #1d1d1d;
}

.skill-title {
  @apply font-semibold text-lg underline capitalize mb-4;
}

.float-anim {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
.wave-anim {
  animation: wave 3s ease-in-out infinite;
}
@keyframes wave {
  0% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(20px);
  }
}
</style>
