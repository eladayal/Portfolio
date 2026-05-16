<template>
  <div class="">
    <div class="flex flex-col h-full">
      <form
        class="h-full max-md:container !px-5 flex flex-col justify-center gap-5 md:gap-10"
        @submit.prevent="submitForm"
      >
        <div>
          <label for="name" class="contact-label">Name</label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="John Doe"
          />
          <span v-if="errors.name" class="input-error">{{ errors.name.join(", ") }}</span>
        </div>
        <div>
          <label for="email" class="contact-label">Email</label>
          <input
            v-model="form.email"
            type="text"
            name="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@company.com"
          />
          <span v-if="errors.email" class="input-error">{{ errors.email.join(", ") }}</span>
        </div>
        <div>
          <label for="subject" class="contact-label">Subject</label>
          <input
            v-model="form.subject"
            type="text"
            name="subject"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let me know how I can help you"
          />
          <span v-if="errors.subject" class="input-error">{{ errors.subject.join(", ") }}</span>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="contact-label">Your message</label>
          <textarea
            v-model="form.message"
            id="message"
            name="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <p v-if="successMsg" class="text-green-600 font-semibold">{{ successMsg }}</p>
        <p v-if="errorMsg" class="text-red-600 font-semibold">{{ errorMsg }}</p>

        <button
          type="submit"
          :disabled="sending"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 disabled:opacity-50"
        >
          {{ sending ? "Sending…" : "Send message" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ContactForm } from "../../types/index";
import { ContactZodSchema } from "~/zod/contact/contact.schema";

const form = ref<ContactForm>({ name: "", subject: "", email: "", message: "" });
const errors = ref<Record<string, string[]>>({});
const sending = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

const submitForm = async () => {
  errors.value = {};
  successMsg.value = "";
  errorMsg.value = "";

  const parsed = ContactZodSchema.safeParse(form.value);
  if (!parsed.success) {
    errors.value = parsed.error.formErrors.fieldErrors as Record<string, string[]>;
    return;
  }

  sending.value = true;
  try {
    await $fetch("/api/contact", { method: "POST", body: parsed.data });
    successMsg.value = "Message sent! I'll get back to you soon.";
    form.value = { name: "", subject: "", email: "", message: "" };
  } catch {
    errorMsg.value = "Something went wrong. Please try again or email me directly.";
  } finally {
    sending.value = false;
  }
};
</script>

<style scoped>
.input-error {
  @apply text-red-500 text-sm mt-1 block;
}
.contact-label {
  @apply block text-lg mb-2 font-semibold leading-6 font-primary;
  @apply text-gray-900;
}
</style>
