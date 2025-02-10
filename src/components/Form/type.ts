import { z } from "zod";


export const validationSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email({ message: "Invalid email" }),
  username: z.string().min(3,"Username is required"),
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 500 * 1024, 
      "File size must be less than 500KB"
    )
    .refine(
      (file) => file.type === "image/jpeg" || file.type === "image/png",
      "Only JPG and PNG files are allowed"
    ),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;