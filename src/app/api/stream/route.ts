import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const {prompt} = await  req.json()
  if (!prompt || typeof prompt !== 'string') {
    return Response.json({error: 'Invalid prompt'}, {status: 400})
  }
  const stream = streamText({
    model: openai('gpt-4'),
    prompt,
  })
  return stream.toUIMessageStreamResponse()
}