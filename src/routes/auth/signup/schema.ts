import { z } from "zod";

export const roles = [
    "clinic",
    "practitioner",
    "patient"
] as const;
 
export const formSchema = z.object({
 email: z.string().email(),
 password: z.string().min(8),
 first_name: z.string().max(50),
 last_name: z.string().max(50),
 role: z.array(z.enum(roles)).min(1)
});
 
export type FormSchema = typeof formSchema;