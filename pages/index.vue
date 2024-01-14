<template>
  <div>
    <HomePageWelcomeHero />

    <!-- Skills Section -->
    <HomePageSkills />

    <!-- Section 3 -->
    <section class="min-h-screen bg-[#f9f9f9] text-[#1d1d1d] flex justify-center items-center">
      <div class="container my-auto mx-auto grid grid-cols-1 lg:grid-cols-2">
        <!-- 1# -->
        <div class="flex flex-col gap-10 p-20 bg-white border-r-2 border-primary">
          <h3 class="whitespace-pre-line">Projects iv'e done</h3>

          <p class="">Some of the projects iv'e done over the years</p>

          <a href="/work"
            ><button class="button-48"><span>See my Work</span></button></a
          >
        </div>

        <!-- 2# -->
        <div class="flex flex-col gap-10 p-20 bg-white">
          <h3 class="whitespace-pre-line">I build & design stuff</h3>

          <p class="">Some of the projects iv'e done over the years</p>

          <button class="button-48"><span>See my Work</span></button>
        </div>
      </div>
    </section>

    <section>
      <div>Experience</div>
    </section>

    <section>
      <div>My Work</div>
    </section>

    <section class="container flex justify-center py-32">
      <button class="download-button">
        <div class="docs">
          <svg
            class="css-i6dzq1"
            stroke-linejoin="round"
            stroke-linecap="round"
            fill="none"
            stroke-width="2"
            stroke="currentColor"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line y2="13" x2="8" y1="13" x1="16"></line>
            <line y2="17" x2="8" y1="17" x1="16"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Download my resume
        </div>
        <div class="download">
          <svg
            class="css-i6dzq1"
            stroke-linejoin="round"
            stroke-linecap="round"
            fill="none"
            stroke-width="2"
            stroke="currentColor"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line y2="3" x2="12" y1="15" x1="12"></line>
          </svg>
        </div>
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const icons = ref<any>([]);
const loading = ref<boolean>(false);

onMounted(async () => {
  try {
    loading.value = true;
    const { data: technologies, error: techError } = await supabase.from("technologies").select("*");

    if (!techError) {
      icons.value = technologies;
      loading.value = false;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
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
