import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();
  } catch (error) {
    
  }
}