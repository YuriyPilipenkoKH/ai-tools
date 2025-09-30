import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const result = await generateObject({
      model: openai("gpt-5-nano"),
      prompt: `List the key features of ${text} in an array of objects with name and abilities properties.`,    
      output: 'enum',
      enum: [{ name: "string", abilities: ["string"] }],
    })
  } catch (error) {
    
  }
}