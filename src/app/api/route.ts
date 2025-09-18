import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req:Request) {
  generateText({
    model: openai('gpt-3.5-turbo'),
    prompt: 'explain what llm is in simple trms'
  })
}