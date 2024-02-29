<template>
  <div class="z-10">
    <div class="relative flex flex-col justify-center items-center max-md:py-10 md:pt-10 bg-primary">
      <!-- Mobile Shape -->
      <img
        class="shape md:hidden block absolute bottom-0 left-0 w-full h-full opacity-95 z-0 object-cover"
        src="/images/svg/mobileshape.png"
      />
      <div class="my-12 relative z-10">
        <h2 class="text-center text-5xl mb-5">/Contact me.</h2>
      </div>
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
        <!-- <ContactForm class="z-10" /> -->
        <div class="z-10">
          <div class="flex flex-col h-full">
            <form
              action="#"
              @submit.prevent="submitForm"
              class="h-full max-md:container !px-5 flex flex-col justify-center gap-5 md:gap-10"
            >
              <!-- space-y-8  -->
              <div>
                <label for="name" class="contact-label">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="John Doe"
                />
                <!-- <Transition>
              <span v-if="error" class="input-error">
                {{ error.join(", ") }}
              </span>
            </Transition> -->
              </div>
              <div>
                <label for="email" class="contact-label">Email</label>
                <input
                  v-model="form.email"
                  type="text"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label for="subject" class="contact-label">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let me know how i can help you"
                />
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="contact-label">Your message</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/vue/24/solid";
//   import { ContactForm } from "../../types/index";
import { ContactZodSchema } from "~/zod/contact/contact.schema";

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
