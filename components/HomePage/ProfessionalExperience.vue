<template>
  <section class="bg-cv-primary text-white">
    <div class="container mx-auto flex flex-col justify-center p-10 lg:p-20">
      <h2 class="py-5 text-white text-5xl text-center">/Professional Experience.</h2>
      <div class="flex flex-col gap-2 lg:px-20">
        <div v-for="(exp, idx) in experiences" :key="idx">
          <!-- Exp Tab -->
          <div
            @click="accOpen(idx)"
            class="p-4 bg-sky-600 rounded-md transition-all ease-in-out duration-300"
            :class="openAcc === idx ? '!bg-sky-500' : ''"
          >
            <div class="text-base md:text-xl flex justify-between items-center">
              <h4 class="flex gap-2 items-baseline">{{ exp.position }} @ {{ exp.name }}</h4>
              <div class="hidden md:flex justify-center items-baseline md:gap-5">
                <h4>{{ exp.period }}</h4>
                <!-- Accordion + & - -->
                <p
                  :class="openAcc === idx ? 'hidden' : ''"
                  class="flex text-2xl text-white justify-center items-center"
                >
                  &#43;
                </p>
                <p
                  :class="openAcc !== idx ? 'hidden' : ''"
                  class="flex text-2xl text-white justify-center items-center"
                >
                  &#8722;
                </p>
              </div>
            </div>
          </div>
          <!-- Exp Card -->
          <div
            class="bg-sky-600/50 flex flex-col-reverse md:flex-row gap-5 rounded-md h-0 transition-all ease-in-out duration-500"
            :class="openAcc === idx ? 'h-auto p-4 my-5' : ''"
          >
            <div v-show="openAcc === idx" class="flex flex-col gap-4">
              <!-- Location & Site Link -->
              <div class="font-mono flex flex-col md:flex-row gap-5">
                <div class="flex gap-2">
                  <span class="w-5">
                    <svg
                      class="w-5"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 395.71 395.71"
                      xml:space="preserve"
                      stroke="#fff"
                    >
                      <path
                        d="M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738c.579.792 1.501 1.255 2.471 1.255.985 0 1.901-.463 2.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0zm0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191z"
                      />
                    </svg>
                  </span>
                  <p>{{ exp.location }}</p>
                </div>
                <!-- Website Link -->
                <a class="flex gap-2" :href="exp.website">
                  <svg class="w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0h24ZM12.5934901 23.257841l-.0115499.0016721-.0710625.0355308-.0189986.003703-.0151639-.003703-.0710604-.0355308c-.0098319-.0031469-.0186055-.0004896-.0235127.0053943l-.0041098.0109236-.0170913.4272787.0049537.0203897.0110101.0122145.1035729.0739792.0148714.0039203.0117661-.0039203.103575-.0739792.0126036-.0160406.0033589-.0165636-.0170917-.4272787c-.0019886-.0101297-.0085498-.0165317-.0160709-.01799Zm.2649005-.1125548-.0138421.002021-.1847042.0923525-.0099621.0102455-.0026879.0112062.0179.4295275.0048406.0127789.0084511.0070753.2009542.0927458c.0120883.003661.0228931-.0002514.0284884-.0080125l.0039949-.0140625-.0341458-.6146308c-.0023895-.0119434-.0102675-.0195315-.0192871-.0212469Zm-.7153433.002021c-.0098295-.0049147-.020871-.0020466-.0274108.0052882l-.0057192.0139377-.0341459.6146308c-.0006391.0115.0070385.0206963.0168767.0234037l.0156079-.0013287.2009546-.0927458.0094391-.0080584.0038546-.0117958.0178967-.4295275-.003156-.0125938-.0094919-.0088579-.1847058-.0923525Z"
                      />
                      <path
                        d="M21 4c0-.55228-.4477-1-1-1h-5c-.5523 0-1 .44772-1 1 0 .55229.4477 1 1 1h2.5858l-2.1092 2.10925c.5465.38919 1.025.8677 1.4142 1.41422L19 6.41424V9c0 .55228.4477 1 1 1s1-.44772 1-1V4Zm-5.5235 3.10925C14.4957 6.41079 13.2958 6 12 6H5c-1.10457 0-2 .89543-2 2v11c0 1.1046.89543 2 2 2h11c1.1046 0 2-.8954 2-2v-7c0-1.2958-.4108-2.49572-1.1093-3.47653l-6.1836 6.18363c-.3905.3905-1.02368.3905-1.41421 0-.39052-.3905-.39052-1.0237 0-1.4142l6.18361-6.18365Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>

                  {{ exp.website }}</a
                >
              </div>
              <!-- Exp Description -->

              <div v-for="(expDesc, idx) in exp.description" :key="idx">
                <p class="w-full">{{ expDesc }}</p>
              </div>
              <!-- Exp technologies -->
              <div class="flex gap-2 flex-wrap font-mono mt-auto">
                <span
                  class="bg-sky-400/50 text-sm rounded-full px-3 py-1"
                  v-for="(expTech, idx) in exp.technologies"
                  :key="idx"
                  >{{ expTech }}
                </span>
              </div>
            </div>
            <!-- Site Image -->
            <div v-show="openAcc === idx" class="md:max-w-[28%] flex justify-center items-center p-2">
              <img class="w-32 md:w-[300px]" :src="exp.logo" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openAcc = ref<any>(null);
function accOpen(idx: number) {
  if (openAcc.value === idx) {
    openAcc.value = null;
    return;
  }
  openAcc.value = idx;
}
const experiences = [
  {
    period: "2023 - Present",
    position: "Full Stack Developer",
    location: "On site (Tel Aviv, Israel)",
    name: "Media Maven",
    website: "media-maven.co.il",
    logo: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1709396402/Portfolio/MMNEW-LOGO_be5z6e.webp",
    technologies: ["HTML", "JS", "TS", "Vue.js", "Nuxt.js", "WP", "MySQL", "MongoDB", "Prisma"],
    description: [
      "Developing tailor-made websites from inception to completion, collaborating seamlessly with designer teams to meet and exceed customer expectations. (rustic-bakery.co.il, ned-dc.com, cyan-eilat.com, place-il.org).",
    ],
  },
  {
    period: "2022 - 2023",
    position: "Full Stack Developer",
    location: "On site (Tel Aviv, Israel)",
    name: "Convertologic",
    website: "convertologic.com",
    logo: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1709400721/Portfolio/convertologo_al9zsg.png",
    technologies: ["HTML", "JS", "TS", "Vue.js", "Nuxt.js", "WP", "MySQL", "Nest.js"],
    description: [
      "Developed end-to-end CMS and CRM applications using the latest Vue.js, Nuxt.js, and Fastify with Tailwind.",
      "Continuously enhance live production sites by developing new features, ensuring their appeal and interactivity using css and design, and creating targeted promotions for different regions.",
    ],
  },
  {
    period: "2021 - 2022",
    position: "Full Stack Developer",
    location: "On site (Tel Aviv, Israel)",
    name: "EZ Digital",
    website: "ezdigital.co.il",
    logo: "https://res.cloudinary.com/dbt4olgrj/image/upload/v1709401562/Portfolio/exdigital_logo_rcfz1d.png",
    technologies: ["HTML", "JS", "TS", "Laravel", "PHP", "Vue.js", "Redis"],
    description: [
      "Developing new features and applications from scratch  with third-party systems and API’s, while ﬁnding and repairing bugs in the company website and software.",
    ],
  },
];
</script>

<style scoped></style>
