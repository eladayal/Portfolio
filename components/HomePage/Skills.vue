<template>
  <section
    id="skills"
    class="container mx-auto my-auto p-10 lg:p-20 text-center"
  >
    <h2 class="text-5xl py-5">/Skills.</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-x-16">
      <div class="skill-container">
        <p class="skill-title">Frontend:</p>
        <div class="skill-box">
          <div
            v-for="icon in icons"
            :key="icon.id"
            v-show="icon.type === 'frontend' || icon.type === 'css'"
          >
            <div class="skill">
              <img
                class="object-contain h-12"
                :src="icon.image"
                width="50"
                height="50"
              />
              <p class="capitalize">{{ icon.full_name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-container">
        <p class="skill-title">Backend:</p>
        <div class="skill-box">
          <div
            v-for="icon in icons"
            :key="icon.id"
            v-show="icon.type === 'backend'"
          >
            <div class="skill">
              <img
                class="object-contain max-h-12"
                :src="icon.image"
                width="50"
                height="50"
              />
              <p class="capitalize">{{ icon.full_name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-container">
        <p class="skill-title">Stores & Libraries:</p>
        <div class="skill-box">
          <div
            v-for="icon in icons"
            :key="icon.id"
            v-show="icon.type === 'store' || icon.type === 'lib'"
          >
            <div class="skill">
              <img
                class="object-contain max-h-12"
                :src="icon.image"
                width="50"
                height="50"
              />
              <p class="capitalize">{{ icon.full_name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-container">
        <p class="skill-title">Design:</p>
        <div class="skill-box">
          <div
            v-for="icon in icons"
            :key="icon.id"
            v-show="icon.type === 'design'"
          >
            <div class="skill">
              <img
                class="object-contain max-h-12"
                :src="icon.image"
                width="50"
                height="50"
              />
              <p class="capitalize">{{ icon.full_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  } finally {
    loading.value = false;
  }
});
// onMounted(async () => {
//   try {
//     loading.value = true;
//     const { data: technologies, error: techError } = await supabase.from("technologies").select("*");

//     if (!techError) {
//       icons.value = technologies;
//       loading.value = false;
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     loading.value = false;
//   }
// });
</script>

<style scoped>
.text-shadow {
  text-shadow: -1px 2px 2px #1d1d1d;
}

.skill-container {
  @apply flex flex-col justify-center items-center;
  .skill-title {
    @apply font-semibold text-lg underline capitalize mb-4;
  }

  .skill-box {
    @apply flex flex-wrap max-w-md gap-5 justify-center items-center;

    .skill {
      @apply h-20 flex flex-col items-center justify-between;
    }
  }
}

.float-anim {
  animation: float 6s ease-in-out infinite;
}
</style>
