import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { prompt } = await req.json()
  if (!prompt || typeof prompt !== 'string') {
    return Response.json({ error: 'Invalid prompt' }, { status: 400 })
  }
  const {text}= await generateText({
    model: openai('o3-mini'),
    prompt,
  })

  return Response.json({text})
}