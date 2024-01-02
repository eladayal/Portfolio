<template>
  <NuxtLayout name="404">
    <section class="min-h-screen bg-primary flex">
      <div
        class="container mx-auto px-10 md:px-20 flex flex-col md:flex-row justify-center md:items-center py-12 max-md:gap-10"
      >
        <!-- #1 -->
        <div class="flex justify-center items-center">
          <NuxtImg
            class="w-1/2"
            src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1697532746/Portfolio/my-image_widuah.png"
            alt="my-image"
            width="400"
            height="400"
          />
        </div>
        <!-- #2 -->
        <div class="flex flex-col justify-center items-center gap-10 text-center">
          <div>
            <h1 class="emphasis !text-white">There seems to be an error</h1>
            <h3 class="text-7xl emphasis !text-white">404</h3>
            <p class="text-white text-xl">not found</p>
          </div>
          <button>
            <NuxtLink
              to="/"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Back to safety
            </NuxtLink>
          </button>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
