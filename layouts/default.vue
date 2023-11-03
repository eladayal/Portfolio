<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 h-full max-lg:mt-28">
      <slot />
    </main>
    <Footer />
    <!--  -->
  </div>
</template>

<style scoped></style>
