<template>
  <div class="mt-28 z-10">
    <div class="my-12 relative z-10">
      <h1 class="text-center mb-5">/Contact me.</h1>
      <p class="text-2xl text-center font-medium">Feel free to contact me for inquires or questions</p>
    </div>
    <div class="relative flex flex-col justify-center items-center max-md:py-10 md:pt-10 bg-primary">
      <!-- Mobile Shape -->
      <img
        class="shape md:hidden block absolute bottom-0 left-0 w-full h-full opacity-95 z-0 object-cover"
        src="/images/svg/mobileshape.png"
      />
      <div class="relative w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
        <img
          class="shape hidden md:block absolute bottom-0 md:left-0 w-3/4 opacity-95 z-0"
          src="/images/svg/Shape5.png"
        />

        <div class="relative h-full max-md:py-12 container mx-auto flex gap-1 md:gap-10 justify-center items-center">
          <!-- <div class="container mx-auto flex gap-20 md:gap-5 justify-center items-center"> -->
          <div class="relative md:h-full flex-1 flex justify-center items-center">
            <img class="md:hidden absolute w-full z-10" src="/images/svg/photo-background.png" alt="waves-image" />
            <img
              class="w-3/4 xl:w-full md:min-w-[300px] md:w-full max-md:rounded-b-[37%] md:self-end max-w-[25vw] z-20 grayscale"
              src="/images/elad-min.png"
            />
          </div>
          <!-- personal info -->
          <div class="personal-info-container">
            <h3>{{ personalInfo.name }}</h3>
            <p>{{ personalInfo.position }}</p>
            <a href="mailto:ayalelad@gmail.com" class="with-icon">
              <EnvelopeIcon class="h-5 w-5" />
              <p>{{ personalInfo.email }}</p>
            </a>
            <a href="tel:+9720549250936" class="with-icon">
              <DevicePhoneMobileIcon class="h-5 w-5" />
              <p>{{ personalInfo.phone }}</p>
            </a>
          </div>
          <!-- </div> -->
        </div>
        <ContactForm class="z-10" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/vue/24/solid";

const personalInfo = {
  name: "Elad Ayal",
  position: "Full Stack Developer",
  email: "ayalelad@gmail.com",
  phone: "+972 50-6492-486",
};
</script>

<style scoped>
.with-icon {
  @apply flex justify-center items-center gap-2;
}
.personal-info-container {
  @apply z-10 flex flex-col gap-3 items-start justify-center;
  p {
    @apply md:text-xl font-primary font-semibold;
  }
}

.shape {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
