<template>
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
        <p class="skill-title">Backend:</p>
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
        <p class="skill-title">Stores & Libraries:</p>
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
        <p class="skill-title">Design:</p>
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
</style>
