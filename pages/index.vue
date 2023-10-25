<template>
  <div>
    <!-- About me  -->
    <section class="min-h-screen bg-primary flex justify-center items-center">
      <div class="container mx-auto px-10 lg:px-20 flex flex-col lg:flex-row justify-center items-center py-12">
        <!-- #1 -->
        <div class="flex flex-col justify-center items-end w-1/2 gap-14">
          <div>
            <h1 class="emphasis !text-white">Full Stack Developer <span class="text-xl">&&</span> Tech enthusiast</h1>
            <h3 class="emphasis !text-white">
              Mission-driven full stack developer with a passion for thoughtful UI design
            </h3>
            <p class="text-white text-xl"></p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <p class="text-white">
              Proven track record of delivering websites and applications that meet and exceed customer demands and
              expectations.
            </p>
            <p class="text-white">
              excellent communication and teamwork abilities, I thrive in collaborative environments, responsible,
              ability to manage and motivate others
            </p>
          </div>
        </div>
        <!-- #2 -->
        <div class="flex justify-center items-center">
          <nuxt-img
            class="w-1/2"
            src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1697532746/Portfolio/my-image_widuah.png"
            alt="my-image"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>

    <section class="container mx-auto my-auto p-10 lg:p-20 text-center">
      <h2 class="py-5">/Skills.</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p class="skill-title">Frontend:</p>
          <div class="flex flex-wrap gap-5 justify-center items-center">
            <div v-for="icon in icons" :key="icon.id" v-show="icon.type === 'frontend'">
              <div class="flex flex-col items-center justify-evenly">
                <img class="object-contain max-h-12" :src="icon.image" width="50" height="50" />
                <p class="capitalize">{{ icon.full_name }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="underline">Backend:</p>
          <div class="flex flex-wrap gap-5 justify-center items-center">
            <div v-for="icon in icons" :key="icon.id" v-show="icon.type === 'backend'">
              <div class="flex flex-col items-center justify-evenly">
                <img class="object-contain max-h-12" :src="icon.image" width="50" height="50" />
                <p class="capitalize">{{ icon.full_name }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="underline">Stores & Libraries:</p>
          <div class="flex flex-wrap gap-5 justify-center items-center">
            <div v-for="icon in icons" :key="icon.id" v-show="icon.type === 'store' || icon.type === 'lib'">
              <div class="flex flex-col items-center justify-evenly">
                <img class="object-contain max-h-12" :src="icon.image" width="50" height="50" />
                <p class="capitalize">{{ icon.full_name }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="underline">Design:</p>
          <div class="flex flex-wrap gap-5 justify-center items-center">
            <div v-for="icon in icons" :key="icon.id" v-show="icon.type === 'design'">
              <div class="flex flex-col items-center justify-evenly">
                <img class="object-contain max-h-12" :src="icon.image" width="50" height="50" />
                <p class="capitalize">{{ icon.full_name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <section>
      <div>CV to download</div>
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
</style>
