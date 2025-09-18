import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST() {
  const {text}= await generateText({
    model: openai('gpt-4o-mini'),
    prompt: 'explain what llm is in simple trms'
  })

  return Response.json({text})
}