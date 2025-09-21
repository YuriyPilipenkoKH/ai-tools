import { UIMessage , streamText ,convertToModelMessages} from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const {messages} : {messages: UIMessage[]}= await  req.json()
    if (!messages || typeof messages !== 'string') {
      return Response.json({error: 'Invalid prompt'}, {status: 400})
    }
    const stream = streamText({
     model: openai('gpt-4o-mini'),
      messages: convertToModelMessages(messages),
    })

  } catch (error) {
    console.error(error);
    return Response.json({error: 'Failed to stream text'}, {status: 500})
  }   
}