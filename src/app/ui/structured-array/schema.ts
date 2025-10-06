import {z} from "zod";

export const Pokemon = z.object({ 
  name: z.string(),
  abilities: z.array(z.string()),
});

export const pokemonUISchema = z.array(Pokemon)

// export type Pokemon = z.infer<typeof structuredArraySchema>;

