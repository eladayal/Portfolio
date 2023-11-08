<template>
  <NuxtLayout name="404">
    <section class="min-h-screen bg-primary flex justify-center items-center">
      <div class="container mx-auto px-10 md:px-20 flex flex-col md:flex-row justify-center items-center py-12">
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
        <div class="flex flex-col justify-center items-end w-1/2 gap-20 text-center">
          <div>
            <h1 class="emphasis !text-white">The page you are looking for, does not exist</h1>
            <h3 class="text-7xl emphasis !text-white">404</h3>
            <p class="text-white text-xl">not found</p>
          </div>
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
