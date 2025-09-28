import {z} from "zod";

export const structuredArraySchema = z.object({ 
  name: z.string(),
  abilities: z.array(z.string()),
});

export const structuredArrayUISchema = z.array(structuredArraySchema)

export type StructuredArray = z.infer<typeof structuredArraySchema>;