import nodemailer from "nodemailer";
import { ContactZodSchema } from "~/zod/contact/contact.schema";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const parsed = ContactZodSchema.safeParse(body);
  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: "Invalid form data" });
  }

  const { name, email, subject, message } = parsed.data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: config.google.mail.user,
      pass: config.google.mail.password,
    },
  });

  await transporter.sendMail({
    from: `"${config.google.mail.name}" <${config.google.mail.user}>`,
    to: config.google.mail.user,
    replyTo: `"${name}" <${email}>`,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message ?? "(no message)"}</p>
    `,
  });

  return { success: true };
});
