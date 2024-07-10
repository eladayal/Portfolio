<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <!-- max-lg:mt-28 -->
    <main class="flex-1 h-full">
      <slot />
    </main>
    <HostagesTicker />
    <Footer />
    <!--  -->
  </div>
</template>
<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Gsap animation

onNuxtReady(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("p:not(.homepage-project-title)").forEach((p: any) => {
    gsap.from(p, {
      duration: 1,
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: p,
        // start animation when the top of the element is 90% from the top of the viewport
        ...getScrollValues(),
        toggleActions: "play none none none",
      },
    });
  });

  function getScrollValues() {
    // Define different start and end values for different viewport sizes (e.g., mobile)
    if (window.innerWidth <= 768) {
      // Adjust the breakpoint as needed
      // Mobile
      return { start: "top 90%", end: "bottom 60%" };
    } else {
      // Desktop
      return { start: "top 90%", end: "bottom 60%" };
    }
  }

  ["h1", "h2", "h3", "h4", "h5"].forEach((tag) => {
    gsap.utils.toArray(tag).forEach((heading: any) => {
      gsap.from(heading, {
        duration: 1,
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  gsap.utils.toArray("img:not(.site-logo, .social-icon, .dont-animate), svg:not(.dont-animate)").forEach((img: any) => {
    gsap.from(img, {
      duration: 1.2,
      opacity: 0,
      y: 45,
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
<style scoped></style>
