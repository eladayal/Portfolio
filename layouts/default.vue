<template>
  <div class="min-h-screen flex flex-col">
    <Transition name="overlay-fade">
      <div v-if="!pageReady" class="fixed inset-0 z-[100] bg-white flex justify-center items-center">
        <Loader />
      </div>
    </Transition>
    <Header />
    <main class="flex-1 h-full">
      <slot />
    </main>

    <Footer />
  </div>
</template>
<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pageReady = ref(false);

onNuxtReady(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Pre-set initial animation states while the overlay is still visible.
  // This prevents the flash where SSR content appears at its final position
  // before GSAP runs and snaps it back to the start state.
  gsap.set("p:not(.homepage-project-title):not(.delayDropChild)", { opacity: 0, y: 30 });
  gsap.set(
    "h1:not(.delayDropChild), h2:not(.delayDropChild), h3:not(.delayDropChild), h4:not(.delayDropChild), h5:not(.delayDropChild)",
    { opacity: 0, y: -30 },
  );
  gsap.set(
    "img:not(.site-logo):not(.social-icon):not(.dont-animate):not(.delayDropChild), svg:not(.dont-animate):not(.delayDropChild)",
    { opacity: 0, y: 45 },
  );

  // Reveal the page — elements are now at their initial animation positions
  pageReady.value = true;

  // Use gsap.to() since initial states are already set via gsap.set() above
  gsap.utils.toArray("p:not(.homepage-project-title):not(.delayDropChild)").forEach((p: any) => {
    gsap.to(p, {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: p,
        ...getScrollValues(),
        toggleActions: "play none none none",
      },
    });
  });

  function getScrollValues() {
    if (window.innerWidth <= 768) {
      return { start: "top 90%", end: "bottom 60%" };
    } else {
      return { start: "top 90%", end: "bottom 60%" };
    }
  }

  ["h1", "h2", "h3", "h4", "h5"].forEach((tag) => {
    gsap.utils.toArray(`${tag}:not(.delayDropChild)`).forEach((heading: any) => {
      gsap.to(heading, {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  gsap.utils
    .toArray(
      "img:not(.site-logo):not(.social-icon):not(.dont-animate):not(.delayDropChild), svg:not(.dont-animate):not(.delayDropChild)",
    )
    .forEach((img: any) => {
      gsap.to(img, {
        duration: 1.2,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "bottom 40%",
          toggleActions: "play none none none",
        },
      });
    });

  const delayParent = document.querySelectorAll(".delayDropParent");

  delayParent.forEach((element) => {
    const childElements = element.querySelectorAll(".delayDropChild");

    const timeline = gsap.timeline();

    childElements.forEach((child, index) => {
      timeline.from(child, { opacity: 0, y: -100, duration: 0.1 }, index * 0.1);
      timeline.to(child, { opacity: 100, y: 0, duration: 0.1 });
    });

    ScrollTrigger.create({
      trigger: element,
      start: "center bottom",
      animation: timeline,
    });
  });
});
</script>
<style scoped>
.overlay-fade-leave-active {
  transition: opacity 0.4s ease;
}
.overlay-fade-leave-to {
  opacity: 0;
}
</style>
