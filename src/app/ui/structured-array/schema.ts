import {z} from "zod";

export const structuredArraySchema = z.object({ 
  name: z.string(),
  abilities: z.array(z.string()),
});

export const structuredArrayUISchema = z.array(structuredArraySchema)

export type Pokemon = z.infer<typeof structuredArraySchema>;

// export type Pokemon = {
//   name: string;
//   abilities: string[];
// };