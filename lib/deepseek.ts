const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions"

export async function callDeepSeekAPI(userQuery: string, context = ""): Promise<BotResponse> {
  const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY

  if (!apiKey) {
    console.error("DeepSeek API key is not set")
    return getFallbackResponse()
  }

  const systemPrompt = `
You are KrishnaBot, a friendly AI assistant from Krishna EduTech. Your goal is to inspire and guide students in their educational journey across various fields. Keep responses brief, positive, and engaging.

Key Points:
1. Be concise and cheerful in your responses.
2. Offer quick insights into a wide range of careers and courses, not just engineering.
3. Provide short, motivational study tips for various subjects.
4. Give brief, encouraging resume feedback.
5. Maintain a supportive and optimistic tone.
6. Remember that Krishna EduTech offers courses for various stages: Before SSC, After 10th, After 12th (Intermediate), After Diploma, After B.Sc, After B.Tech, After Pharm, and Government Job preparation.

Provide a structured response with the following format:
{
  "greeting": string,
  "message": string,
  "options": string[],
  "insight": string,
  "encouragement": string
}
`

  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: context },
    { role: "user", content: userQuery },
  ]

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: messages,
        max_tokens: 300,
        temperature: 0.7,
        top_p: 0.9,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`HTTP error! status: ${response.status}, body: ${errorText}`)
      return getFallbackResponse()
    }

    const data = await response.json()

    if (data.choices && data.choices.length > 0 && data.choices[0].message) {
      return postProcessResponse(data.choices[0].message.content)
    } else {
      console.error("Unexpected API response format:", data)
      return getFallbackResponse()
    }
  } catch (error) {
    console.error("Error calling DeepSeek API:", error)
    return getFallbackResponse()
  }
}

function postProcessResponse(response: string): BotResponse {
  try {
    const cleanedResponse = response.replace(/^```json\s*/, "").replace(/```\s*$/, "")
    const structuredResponse = JSON.parse(cleanedResponse) as BotResponse

    if (
      structuredResponse.greeting &&
      structuredResponse.message &&
      structuredResponse.options &&
      structuredResponse.insight &&
      structuredResponse.encouragement
    ) {
      return structuredResponse
    }
  } catch (error) {
    console.error("Failed to parse structured response:", error)
    console.log("Raw response:", response)
  }

  return getFallbackResponse()
}

function getFallbackResponse(): BotResponse {
  return {
    greeting: "Namaste! 🌟",
    message:
      "I'm KrishnaBot, your friendly guide at Krishna EduTech. How can I brighten your educational journey today?",
    options: ["Explore careers", "Discover courses", "Get a study tip", "Resume help", "Exam preparation"],
    insight:
      "Did you know? Krishna EduTech offers courses for every stage of your educational journey, from SSC to postgraduate studies!",
    encouragement: "Remember, your potential is limitless. Let's find the perfect path for you!",
  }
}

export interface BotResponse {
  greeting: string
  message: string
  options: string[]
  insight: string
  encouragement: string
}

export interface StructuredResponse {
  greeting: string
  congratulations: string
  introduction: string
  careerOptions: {
    title: string
    description: string
    details: string[]
    krishnaEduTechOffering?: string
  }[]
  followUp: string
}

export async function testDeepSeekAPI(): Promise<string> {
  try {
    const response = await callDeepSeekAPI("Tell me something cool about engineering")
    console.log("API Response:", response)
    return "API connection successful! Response: " + JSON.stringify(response)
  } catch (error) {
    console.error("API Test Error:", error)
    return `API connection failed. Error: ${error.message}. Check your console for more details.`
  }
}

