import { NextResponse } from "next/server"
import { getFallbackResponse } from "@/lib/huggingface"

const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"

export async function POST(request: Request) {
  try {
    const { userQuery } = await request.json()
    const apiKey = process.env.HUGGING_FACE_API_TOKEN

    if (!apiKey) {
      console.error("Hugging Face API token is not set")
      return NextResponse.json({ response: getFallbackResponse() })
    }

    const context = `
    You are KrishnaBot, an AI career counseling assistant for Krishna EduTech, an educational platform in India.
    Your role is to provide career guidance and information about Krishna EduTech's courses.
    Courses include: Before SSC, After 10th, After 12th, After Diploma, After B.Sc, B.Tech, Pharm, Govt Jobs.
    Always introduce yourself as "I am KrishnaBot, the career counseling AI assistant from Krishna EduTech."
    Focus solely on career counseling and Krishna EduTech services. Do not claim personal experiences.
    If asked about personal details, redirect the conversation to how you can assist with career guidance.
    `

    const prompt = `${context}

    H: ${userQuery}

    KrishnaBot:`

    const response = await fetch(HUGGING_FACE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_length: 150,
          temperature: 0.7,
          top_p: 0.9,
          do_sample: true,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`HTTP error! status: ${response.status}, body: ${errorText}`)
      return NextResponse.json({ response: getFallbackResponse() })
    }

    const data = await response.json()

    if (Array.isArray(data) && data.length > 0 && data[0].generated_text) {
      const processedResponse = postProcessResponse(data[0].generated_text)
      return NextResponse.json({ response: processedResponse })
    } else {
      console.error("Unexpected API response format:", data)
      return NextResponse.json({ response: getFallbackResponse() })
    }
  } catch (error) {
    console.error("Error calling Hugging Face API:", error)
    return NextResponse.json({ response: getFallbackResponse() })
  }
}

function postProcessResponse(response: string): string {
  // Remove any text before "KrishnaBot:" if present
  const botResponseStart = response.indexOf("KrishnaBot:")
  if (botResponseStart !== -1) {
    response = response.slice(botResponseStart + 10).trim()
  }

  // Ensure the response starts with the correct introduction
  if (!response.toLowerCase().startsWith("i am krishnabot") && !response.toLowerCase().startsWith("as krishnabot")) {
    response = "I am KrishnaBot, the career counseling AI assistant from Krishna EduTech. " + response
  }

  // If the response is too short or seems off-topic, use the fallback response
  if (response.length < 20 || !isRelevantResponse(response)) {
    return getFallbackResponse()
  }

  return response
}

function isRelevantResponse(response: string): boolean {
  const relevantKeywords = ["career", "course", "education", "study", "job", "Krishna EduTech", "guidance", "assist"]
  return relevantKeywords.some((keyword) => response.toLowerCase().includes(keyword))
}

