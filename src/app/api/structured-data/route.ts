import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { recipeSchema } from "./schems";

export async function POST(req: Request) {
    const { dish } = await req.json();

    const result = streamObject({
      model: openai("gpt-5-nano"),
      schema: recipeSchema,
      prompt: `Generate a recipe for ${dish}`,
    });

    return result.toTextStreamResponse();
}