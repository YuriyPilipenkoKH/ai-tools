import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const {prompt} = await  req.json()
    if (!prompt || typeof prompt !== 'string') {
      return Response.json({error: 'Invalid prompt'}, {status: 400})
    }
    const stream = streamText({
      model: openai('gpt-4'),
      prompt,
    })
    return stream.toUIMessageStreamResponse()
    
  } catch (error) {
        console.error(error);
    return new Response('Failed to stream text', {status: 500})
  }
}