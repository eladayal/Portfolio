<template>
  <div>
    <div
      class="relative z-0 h-[50vh] md:h-[70vh] bg-center bg-no-repeat bg-cover flex items-center justify-start"
      style="background-image: url('/images/hero.jpg')"
    >
      <div
        class="z-0 opacity-50 absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-black/50 to-black"
      ></div>
      <!-- START -->
      <div class="text-shadow lg:w-2/5 w-3/4 text-2xl md:text-4xl text-white font-semibold z-10 ml-10 md:ml-20">
        <div>
          Unlock the power of recycling with our groundbreaking app: simply
          <span class="emphasis">scan the barcode</span> of any recycled product and effortlessly turn it into
          <span class="emphasis">cash rewards</span>, right at your fingertips!
        </div>
        <div class="my-5 md:my-10">
          Turn your <span class="emphasis font-primary">trash</span>, into <span class="emphasis">Cash</span>
        </div>
        <button
          class="text-white text-sm md:text-xl bg-[#fcb01c] hover:bg-[#ffbb37] font-medium rounded-lg px-5 py-2.5 mr-2 mb-2"
        >
          Get Cycled
        </button>
      </div>
      <!-- End -->
    </div>
    <!-- How it Works -->
    <section class="container mt-10 mb-24">
      <h2 class="font-bold mx-5 md:mx-0 text-[40px] md:text-[60px] mb-20 font-primary">How the App works</h2>
      <div class="flex flex-col gap-20 mx-20">
        <div
          v-for="(how, idx) in howItWorks"
          :key="how.title"
          class="flex flex-col md:flex-row gap-10 md:even:flex-row-reverse"
        >
          <h2
            class="font-bold text-5xl font-primary h-fit w-fit p-5 bg-[#b9db91] rounded-full"
            :class="idx % 2 ? 'self-end md:self-start' : ''"
          >
            {{ idx + 1 }}
          </h2>
          <div class="flex flex-col sm:flex-row gap-12" :class="idx % 2 ? 'sm:flex-row-reverse' : ''">
            <NuxtImg class="w-48 h-48" :src="how.image" alt="image" width="300" height="auto" />
            <div class="flex flex-col gap-2 md:gap-5 w-full md:w-1/2">
              <h2 class="font-bold text-2xl font-primary">{{ how.title }}</h2>
              <p class="text-xl">{{ how.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How it Works  End-->
    <!-- <div class="text-5xl">slider</div> -->
    <!-- <template>
      <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
        <SplideSlide>
          <img src="image1.jpg" alt="Sample 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Sample 2" />
        </SplideSlide>
      </Splide>
    </template> -->
    <!-- Belive -->
    <section>
      <div class="container flex flex-col gap-5 md:gap-0 md:flex-row justify-between font-primary mb-24">
        <div class="md:w-2/5">
          <h2 class="font-bold text-4xl">Lorem ipsum dolor sit amet consectetur</h2>
          <p class="text-2xl">
            adipisicing elit. Sunt cumque eligendi quae, doloremque tempora cum corrupti atque, minus amet ullam
            similique perferendis provident quaerat fugit rerum velit hic nulla id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloremque quasi deserunt laboriosam esse asperiores soluta id commodi
            officiis? Quasi autem in odio ab eveniet reiciendis iure animi excepturi cumque! Velit?
          </p>
        </div>
        <nuxt-img class="rounded-3xl object-contain" src="/images/win.jpg" alt="image" width="500" height="auto" />
      </div>
    </section>
    <!-- Belive End -->

    <!-- Join Us -->
    <section>
      <div class="flex flex-col gap-5 justify-center items-center bg-[#ffcc075e] px-6 py-24">
        <h2 class="text-5xl font-bold font-primary">Join the initiative.</h2>
        <p class="text-lg">
          We have ambitious aspirations to transform the world. Get in touch to become a part of this expedition.
        </p>
        <button class="text-white bg-[#fcb01c] hover:bg-[#ffbb37] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
          Join the Initiative
        </button>
      </div>
    </section>
    <!-- Join Us End -->
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import "@splidejs/vue-splide/css";

const howItWorks = [
  {
    title: "Effortlessly scan and organize packages from home",
    description:
      "Make recycling a breeze with Cycled: simply scan the barcode of plastic containers, milk cartons, metal cans, and more as you prepare for recycling",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/how1_jrwsnr.png",
  },
  {
    title: "Make the most of your existing recycling spot.",
    description:
      "Continue your usual recycling routine. Easily add your bins or local recycling facility if they're not listed on the map.",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/how2_okva1w.png",
  },
  {
    title: "Turn recycling into rewards.",
    description:
      "Verify your location with the app and unlock a world of rewards. Earn points or cash to withdraw to your bank account, donate to charity, or enjoy discounts on future purchases.",
    image: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1687329347/Cycled/how3_q6kkcv.png",
  },
];
</script>

<style scoped>
.text-shadow {
  text-shadow: -1px 2px 2px #1d1d1d;
}
</style>
