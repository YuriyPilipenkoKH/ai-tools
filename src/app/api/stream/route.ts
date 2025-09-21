import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";


export async function POST(req: Request) {
  try {
    const {prompt} = await  req.json()
    // console.log(prompt);
    if (!prompt || typeof prompt !== 'string') {
      return Response.json({error: 'Invalid prompt'}, {status: 400})
    }
    const stream = streamText({
      model: openai('gpt-4o-mini'),
      prompt,
    })

        // Log token usage after streaming completes
    stream.usage.then((usage) => {
      console.log({
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });

    return stream.toUIMessageStreamResponse()
    
  } catch (error) {
        console.error(error);
    return new Response('Failed to stream text', {status: 500})
  }
}