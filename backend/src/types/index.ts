import { z } from "zod";

// Validation Schema
export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .trim()
    .refine(
      (value) =>
        /^(?=(?:.*[A-Z]){1,})(?=(?:.*[!@#$&*]){1,})(?=(?:.*[0-9]){2,})(?=(?:.*[a-z]){2,}).*$/.test(value),
      {
        message:
          "Password must include at least 1 uppercase letter, 2 lowercase letters, 2 digits, and 1 special character",
      }
    ),
});

// Type Definitions
export type User = {
  id: number;
  name: string;
  bio: string | null;
  create_at: Date;
  update_at: Date;
};

export type ErrorResponse = {
  success: false;
  error: string;
  isFormError?: boolean;
};

export type SuccessResponse<T = void> = {
  success: true;
  message: string;
} & (T extends void ? {} : { data: T });
