<template>
  <div class="loader"><span>{</span><span>}</span></div>
</template>

<script setup lang="ts"></script>

<style scoped>
@background-color: #fff;
@loader-color: #32aed1;

.loader {
  @apply flex justify-center;
  color: #32aed1;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 25vh;

  opacity: 0.8;

  span {
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;

    &:nth-child(odd) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
