<template>
  <div class="">
    <div class="flex flex-col gap-16">
      <form action="#" @submit.prevent="submitForm" class="space-y-8 max-md:container !px-5">
        <div>
          <label for="name" class="contact-label">Name</label>
          <input
            type="name"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label for="email" class="contact-label">Email</label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label for="subject" class="contact-label">Subject</label>
          <input
            type="text"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let me know how i can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="contact-label">Your message</label>
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContactForm } from "../types/index";
const form = ref<ContactForm>({
  name: "",
  subject: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("submit");
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
  @apply text-gray-900 dark:text-gray-300;
}
</style>
<!-- <form class="container mx-auto">
    <div>
      <label for="email" class="block text-lg font-semibold leading-6 text-gray-900">Email</label>
      <div class="mt-2">
        <input type="email" name="email" id="email" class="ea-input" placeholder="you@example.com" />
      </div>
    </div>
  </form> -->
