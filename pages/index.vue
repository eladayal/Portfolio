<template>
  <div>
    <!-- About me  -->
    <section class="min-h-screen bg-primary">
      <div class="container mx-auto flex flex-col md:flex-row justify-center items-center py-12">
        <!-- #1 -->
        <div class="flex flex-col justify-center items-end w-1/2 gap-14">
          <div>
            <h1 class="emphasis !text-white">Full Stack Developer.</h1>
            <p class="text-white text-xl">
              Proven track record of delivering websites and applications that meet and exceed customer demands and
              expectations.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p class="text-white">
              Proven track record of delivering websites and applications that meet and exceed customer demands and
              expectations.
            </p>
            <p class="text-white">
              Proven track record of delivering websites and applications that meet and exceed customer demands and
              expectations.
            </p>
          </div>
        </div>
        <!-- #2 -->
        <div class="flex justify-center items-center">
          <nuxt-img
            class="w-4/5"
            src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1697314591/Portfolio/%D7%90%D7%9C%D7%A2%D7%93_%D7%98%D7%99%D7%9C__cjbr9p.png"
            alt="my-image"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="min-h-screen bg-[#f9f9f9] text-[#1d1d1d] flex justify-center items-center">
      <div class="container my-auto mx-auto grid grid-cols-1 md:grid-cols-2">
        <!-- 1# -->
        <div class="flex flex-col gap-10 p-20 bg-white border-r-2 border-orange-500">
          <h3 class="whitespace-pre-line">I build & design stuff</h3>

          <p class="">Open source projects, web apps and experimentals.</p>

          <a href="/work"><button class="orange-btn">&lt;See my Work /&gt;</button></a>
        </div>

        <!-- 2# -->
        <div class="flex flex-col gap-10 p-20 bg-white">
          <h3 class="whitespace-pre-line">I build & design stuff</h3>

          <p class="">Open source projects, web apps and experimentals.</p>

          <button class="orange-btn">See my Work</button>
        </div>
      </div>
    </section>

    <section>
      <section>
        <div>Work history</div>
      </section>

      <div>Skills</div>
    </section>

    <section>
      <div>My Work</div>
    </section>

    <section>
      <div>CV to download</div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.text-shadow {
  text-shadow: -1px 2px 2px #1d1d1d;
}
</style>
