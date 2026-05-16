<template>
  <div class="loader"><span>{</span><span>E</span><span>A</span><span>}</span></div>
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

    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.3s; }
  }
}

@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
