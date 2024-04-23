import { z } from 'zod';

export const navigationLinkValidation = z.object({
  label: z.string().min(1),
  src: z.string().min(1),
  icon: z
    .object({
      path: z.string().min(1),
    })
    .optional(),
});

export const navigationBarValidation = z.array(navigationLinkValidation);

export type NavLink = z.infer<typeof navigationLinkValidation>;
export type NavigationBar = z.infer<typeof navigationBarValidation>;
