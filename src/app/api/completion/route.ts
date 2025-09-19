import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST() {
  const {text}= await generateText({
    model: openai('o3-mini'),
    prompt: 'explain what llm is in simple terms'
  })

  return Response.json({text})
}