import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
    const { dish } = await req.json();

    console.log({ dish });
}