import z from "zod";

export const ContactZodSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your full name",
    })
    .min(1, "Please enter your full name")
    .max(25, "A name can contain up to 25 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email address"),
  subject: z.string({
    required_error: "Subject is required",
  }),
  message: z.string().optional(),
});

export type ContactZodSchemaType = z.TypeOf<typeof ContactZodSchema>;

export type ContactZodSchemaTypeError = z.ZodFormattedError<ContactZodSchemaType>;
