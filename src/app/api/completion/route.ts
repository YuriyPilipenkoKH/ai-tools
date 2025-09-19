import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    
    const {prompt} = await  req.json()
    if (!prompt || typeof prompt !== 'string') {
      return Response.json({error: 'Invalid prompt'}, {status: 400})
    }
    const {text}= await generateText({
      model: openai('gpt-4'),
      prompt: 'explain what llm is in simple trms'
    })
  
    return Response.json({text})
  } catch (error) {
    console.log(error);
    return Response.json({error: 'Failed to generate text'}, {status: 500})
  }
}