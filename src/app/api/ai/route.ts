import { NextResponse } from "next/server";
import { google } from "@/lib/ai";
import { generateText } from "ai";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.prompt)
      return NextResponse.json({
        response: "No prompt provided",
        status: 400,
        success: false,
      });
    const { text: response } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `${body.prompt}`,
    });
    console.log(response);
    return NextResponse.json({
      response,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      response: error,
      status: 500,
      success: false,
    });
  }
}
