import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const MODEL = "gpt-4o";
export async function openAiResponse(prompt: string, maxTokens?: number) {
    if (!process.env.OPENAI_API_KEY) throw new Error("No OPENAI_API_KEY set");
  
    const apiKey = process.env.OPENAI_API_KEY;

    const client = new OpenAI({ apiKey });

    const messages: ChatCompletionMessageParam[] = [
      { role: "user", content: prompt },
    ];

    const response = await client.chat.completions.create(
      {
        model: MODEL,
        messages,
        max_tokens: maxTokens || 2048,
        temperature: 0.5,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      { maxRetries: 0 }
    );

    const output = response.choices[0].message.content?.trim() || "";

    return output;

  }
  