import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { prompt } = body;

        if (!prompt) {
            return new NextResponse("Prompt is required.");
        }

        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: prompt,
            n: 4,
            size: "1024x1024"
        });

        return NextResponse.json(response.data);
    }
    catch (error) {
        console.log("An error occurred", error);
        return new NextResponse("Internal Server Error");
    }
}