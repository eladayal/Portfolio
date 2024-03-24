<template>
  <div class="container flex flex-col gap-8 px-20 py-40 !font-inter !text-cv-primary">
    <!-- Header -->

    <div class="flex justify-between items-center gap-4">
      <div>
        <h1 class="text-5xl">Elad Ayal</h1>
        <h3 class="text-cv-secondary font-medium">Full Stack Developer</h3>
      </div>
      <div class="">
        <img
          class="rounded-xl w-40"
          src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1702846987/Portfolio/IMG_8425_m8ecnh.jpg"
          alt="Cv image"
          width="100"
          height="200"
        />
      </div>
    </div>

    <!-- Contact Info -->
    <div class="contact-info-container grid grid-cols-2">
      <!-- Phone -->
      <span>
        <a href="https://wa.me/+972506492486" class="flex items-center gap-4">+972 50-6492486 </a>
      </span>

      <!-- Email -->
      <span>
        <a href="mailto:ayalelad@gmail.com">ayalelad@gmail.com</a>
      </span>

      <!-- linkedin -->
      <span>
        <a href="linkedin.com/in/eladayal">linkedin.com/in/eladayal</a>
      </span>

      <!-- Location -->
      <span>
        <p>Tel Aviv, Israel</p>
      </span>
    </div>

    <!-- Summery -->
    <section>
      <h2 class="text-3xl mb-2">Summery</h2>
      <p>
        Full Stack Developer with a proven track record of delivering websites and applications that meet and exceed
        customer demands and expectations. understanding of web development front-end, back-end and server-side
        technologies. expertise in HTML5, CSS, JavaScript, and modern frameworks such as Vue, React and Angular, With
        strong problem-solving skills and a detail-oriented approach. committed to delivering high-quality code and
        ensuring optimal user experience. Excellent communication and teamwork abilities, I thrive in collaborative
        environments, responsible, ability to manage and motivate others, efficiently working within tight deadlines and
        multi-tasking, tech and gaming enthusiast, and adapting quickly to new environments.
      </p>
    </section>

    <!-- Skills -->
    <section>
      <h2 class="text-3xl mb-2">Skills</h2>
      <div class="flex flex-wrap gap-3">
        <div v-for="(skill, idx) in skills" :key="idx" class="">
          <p class="underline font-semibold">{{ skill.full_name }}</p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section>
      <h2 class="text-3xl mb-2">Experience</h2>
      <div class="flex flex-col gap-8">
        <div class="grid grid-cols-1 md:grid-cols-6" v-for="(experience, idx) in experiences" :key="idx">
          <div class="col-span-1 flex flex-col">
            <p>{{ experience.period }}</p>
            <p>{{ experience.pos }}</p>
          </div>
          <div class="col-span-5">
            <p class="font-medium text-xl">{{ experience.position }}</p>
            <p class="font-semibold text-lg text-cv-secondary">{{ experience.workplace }}</p>
            <p class="font-semibold">{{ experience.technologies }}</p>
            <div class="flex flex-col gap-2">
              <p v-for="(desc, idx) in experience.description" :key="idx">{{ desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION & MILLITARY SERVICE -->
    <section>
      <h2 class="text-3xl mb-2">Education & Military Service</h2>
      <div class="flex flex-col gap-8">
        <div class="grid grid-cols-1 md:grid-cols-6" v-for="(eduAndMil, idx) in educationAndMilitary" :key="idx">
          <div class="col-span-1 flex flex-col">
            <p>{{ eduAndMil.period }}</p>
          </div>
          <div class="col-span-5">
            <p class="font-medium text-xl">{{ eduAndMil.position }}</p>
            <p class="font-semibold text-lg text-cv-secondary">{{ eduAndMil.where }}</p>

            <div class="flex flex-col gap-2">
              <p v-for="(desc, idx) in eduAndMil.description" :key="idx">{{ desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LANGUAGES -->
    <section class="delayDropParent">
      <h2 class="text-3xl mb-5 md:mb-2">Languages</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 max-md:gap-10">
        <div class="flex gap-2 md:justify-center items-center">
          <div>
            <p class="font-semibold text-xl">Hebrew</p>
            <p class="font-bold text-lg">Native</p>
          </div>

          <div class="flex gap-2" v-for="index in 5" :key="index">
            <span class="bg-cv-secondary w-5 h-5 rounded-full delayDropChild"></span>
          </div>
        </div>
        <div class="flex gap-2 md:justify-center items-center">
          <div>
            <p class="font-semibold text-xl">English</p>
            <p class="font-bold text-lg">Native</p>
          </div>

          <div class="flex gap-2 delayDropChild" v-for="index in 5" :key="index">
            <span class="bg-cv-secondary w-5 h-5 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>

    <div class="py-20">
      <CVDownload />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContactForm } from "../../types/index";
import { ContactZodSchema } from "~/zod/contact/contact.schema";
const supabase = useSupabaseClient();
const skills = ref<any>([]);
const loading = ref<boolean>(false);
const contactInfo = [
  {
    icon: "phone",
    text: "+972 506492486",
    isLink: true,
  },
  {
    icon: "email",
    text: "ayalelad@gmail.com",
  },
  {
    icon: "address",
    text: "Tel Aviv, Israel",
  },
  {
    icon: "linkedin",
    text: "linkedin.com/in/eladayal",
  },
];

const experiences = [
  {
    period: "2023 - Present",
    position: "Full Stack Developer",
    pos: "Full time",
    workplace: "Media Maven",
    technologies: "Vue.js, Nuxt.js, Wordpress, TypeScript, MySQL, Postgras, MongoDB with Prisma",
    description: [
      "Developing tailor-made websites from inception to completion, collaborating seamlessly with designer teams to meet and exceed customer expectations. (rustic-bakery.co.il, ned-dc.com, cyan-eilat.com, place-il.org).",
    ],
  },
  {
    period: "2022 - 2023",
    position: "Full Stack Developer",
    pos: "Full time",
    workplace: "Convertologic",
    technologies: "Vue.js, Nuxt.js, Wordpress, TypeScript, MySQL, Nest.js",
    description: [
      "Developed end-to-end CMS and CRM applications using the latest Vue.js, Nuxt.js, and Fastify with Tailwind.",
      "Continuously enhance live production sites by developing new features, ensuring their appeal and interactivity using css and design, and creating targeted promotions for different regions.",
    ],
  },
  {
    period: "2021 - 2022",
    position: "Full Stack Developer",
    pos: "Internship",
    workplace: "EZ Digital | Insurance & Investments",
    technologies: "Laravel, PHP, With Vue.js and Redis",
    description: [
      "Developing new features and applications from scratch  with third-party systems and API’s, while ﬁnding and repairing bugs in the company website and software.",
    ],
  },
  {
    period: "2019 - 2021",
    position: "Agent at Critical solutions department",
    pos: "Full time",
    workplace: "ICL Israel Cargo Logistics",
    description: [
      "Managed time-critical imports and exports of shipments, including experiments, vaccines, and highly sensitive devices, from customer pick-up to destination arrival, while maintaining close communication with clients, airlines, and liaisons worldwide. Overseeing and coordinating over 40 shipments globally at any given moment, each with unique challenges.",
    ],
  },
];

const educationAndMilitary = [
  {
    period: "11/2021 - 03/2022",
    position: "Full stack intensive Boot camp",
    where: "Coding Academy",
    description: [
      "Intensive 640-hour coding boot camp, we delved deeply into the intricacies of web development, acquiring extensive knowledge and practical skills for success.",
    ],
  },
  {
    period: "08/2013 - 08/2016",
    position: "IDF",
    where: "Air Force",
    description: [
      "Commander, a major sergeant, commanded an intelligence unit numbering 8 soldiers. As part of my job, I worked quite a bit with 'Elbit Systems' in order to evaluate, purchase and implement new systems for the IDF.",
    ],
  },
  {
    position: "School graduate in electronics with honors",
    where: "'Revivim' high-school",
    description: ["GPA 95+ / 100"],
  },
];

onMounted(async () => {
  try {
    loading.value = true;
    const { data: technologies, error: techError } = await supabase
      .from("technologies")
      .select("*")
      .order("id", { ascending: true });

    if (!techError) {
      skills.value = technologies;
      loading.value = false;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
// import nodemailer from "nodemailer";

// const supabase = useSupabaseClient();
const config = useRuntimeConfig();

const form = ref<ContactForm>({
  name: "",
  subject: "",
  email: "",
  message: "",
});

const errors = ref<any>({});

const clearForm = () => {
  form.value = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
};
const submitForm = async () => {
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: config.smtp,
  // });
  const parsedForm = ContactZodSchema.safeParse(form.value);
  if (!parsedForm.success) {
    errors.value = parsedForm.error.formErrors?.fieldErrors;
  } else {
    errors.value = {};
  }
  // console.log("aweweqwe", parsedForm);
  console.log(errors.value);
  // const res = await $fetch("/api/contact", {
  //   method: "POST",
  //   body: parsedForm.data,
  // });

  // if (res) {
  //   // swal.fire({
  //   //   icon: 'success',
  //   //   title: 'הטופס נשלח בהצלחה',
  //   //   text: 'תודה, נדאג לחזור אליך בהקדם',
  //   // });
  // }

  clearForm();
};
</script>

<style scoped>
.contact-info-container span {
  @apply flex items-center gap-2;
}

.ea-input {
  @apply block w-full rounded-md px-2 border-0 py-1.5;
  @apply text-gray-900 shadow-sm sm:text-sm sm:leading-6;
  @apply ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600;
}
.contact-label {
  @apply block text-lg mb-2 font-semibold leading-6 font-primary;
  @apply text-gray-900;
}
</style>
