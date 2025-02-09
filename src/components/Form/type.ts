import { z } from "zod";

export const validationSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email({ message: "Invalid email" }),
  username: z.string().min(3,"Username is required")
});

export type RegistrationFormData = z.infer<typeof validationSchema>;