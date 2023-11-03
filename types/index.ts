// ~/types/index.d.ts

export { ContactForm };

declare global {
  interface ContactForm {
    name: string;
    subject: string;
    email: string;
    message: string;
  }
}
