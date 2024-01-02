<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <!-- max-lg:mt-28 -->
    <main class="flex-1 h-full">
      <slot />
    </main>
    <Footer />
    <!--  -->
  </div>
</template>

<style scoped></style>
