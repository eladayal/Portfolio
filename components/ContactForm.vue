<template>
  <div class="">
    <div class="flex flex-col h-full">
      <form
        action="#"
        @submit.prevent="submitForm"
        class="h-full max-md:container !px-5 flex flex-col justify-evenly gap-5"
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
</template>

<script setup lang="ts">
// import nodemailer from "nodemailer";
import { ContactForm } from "../types/index";
import { ContactZodSchema } from "~/zod/contact/contact.schema";

const supabase = useSupabaseClient();
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
