import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

// import { checkSubscription } from "@/lib/subscription";
// import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!configuration.apiKey) {
      return NextResponse.json({ error: "OpenAI API Key not configured." }, { status: 500 });
    }

    if (!messages) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error('[CODE_ERROR]', error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
