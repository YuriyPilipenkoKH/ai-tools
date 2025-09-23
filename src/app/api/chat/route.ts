import { UIMessage , streamText ,convertToModelMessages} from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const {messages} : {messages: UIMessage[]}= await  req.json()
    if (!messages || typeof messages !== 'string') {
      return Response.json({error: 'Invalid prompt'}, {status: 400})
    }
 const result = streamText({
      model: openai("gpt-5-nano"),
      messages: [
        {
          role: "system",
          content:
            "You are a helpful coding assistant. Keep responses under 3 sentences and focus on practical examples.",
        },
        ...convertToModelMessages(messages),
      ],
    });

    
    return result.toUIMessageStreamResponse() 

  } catch (error) {
    console.error(error);
    return Response.json({error: 'Failed to stream chat completion'}, {status: 500})
  }   
}