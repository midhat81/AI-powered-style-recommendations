import { z } from 'zod';

export const OutfitPreferencesSchema = z.object({
  style: z.string().min(1, 'Style is required'),
  colors: z
    .array(z.string())
    .min(1, 'At least one color is required')
    .max(5, 'Maximum 5 colors allowed'),
  occasion: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export type OutfitPreferencesInput = z.infer<typeof OutfitPreferencesSchema>;

export const GenerateOutfitRequestSchema = z.object({
  style: z.string().min(1),
  colors: z.array(z.string()).min(1).max(5),
  occasion: z.string().optional(),
});

export type GenerateOutfitRequest = z.infer<typeof GenerateOutfitRequestSchema>;