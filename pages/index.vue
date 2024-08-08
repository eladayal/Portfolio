<template>
  <div>
    <HomePageWelcomeHero />

    <HomePageSkills />

    <HomePageExpertise />

    <HomePageProfessionalExperience />

    <HomePageProjects />

    <ContactMe />
    <!-- Section 3 -->
    <!-- <section class="min-h-screen bg-[#f9f9f9] text-[#1d1d1d] flex justify-center items-center">
      <div class="container my-auto mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        <div class="flex flex-col gap-10 p-20 bg-white border-r-2 border-primary">
          <h3 class="whitespace-pre-line">Projects iv'e done</h3>

          <p class="">Some of the projects iv'e done over the years</p>

          <a href="/work"
            ><button class="button-48"><span>See my Work</span></button></a
          >
        </div>

       
        <div class="flex flex-col gap-10 p-20 bg-white">
          <h3 class="whitespace-pre-line">I build & design stuff</h3>

          <p class="">Some of the projects iv'e done over the years</p>

          <button class="button-48"><span>See my Work</span></button>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import useTech from "~/composable/useTech";

const technologies = await useTech();
const icons = ref<any>([]);
const loading = ref<boolean>(false);

onMounted(async () => {
  loading.value = true;
  try {
    if (technologies) {
      icons.value = technologies.value.data;
    }

    loading.value = false;
  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    loading.value = false;
  }
});
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
