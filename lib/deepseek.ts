const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions"

export async function callDeepSeekAPI(userQuery: string): Promise<BotResponse> {
  console.log("Calling DeepSeek API with query:", userQuery)

  const context = `
You are KrishnaBot, a friendly and knowledgeable AI assistant for Krishna EduTech, an educational platform in India. Your personality is warm, encouraging, and slightly humorous. You specialize in career counseling and providing information about Krishna EduTech's courses.

When responding:
1. Use a conversational tone, as if chatting with a friend.
2. Occasionally use Indian English expressions to sound more relatable.
3. Provide specific course recommendations based on the user's interests or questions.
4. Always end with an open-ended question to keep the conversation going.

Respond in a JSON format with the following structure:
{
  "greeting": A warm, personalized greeting (if starting a conversation),
  "message": Your main response, broken into 2-3 short paragraphs for readability,
  "courseRecommendation": A specific course recommendation if applicable, or null if not,
  "followUpQuestion": An engaging question to continue the conversation
}
`

  const messages = [
    { role: "system", content: context },
    { role: "user", content: userQuery },
  ]

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`DeepSeek API error: ${response.status}`, errorText)
      throw new Error(`DeepSeek API error: ${response.status}`)
    }

    const data = await response.json()

    if (data.choices && data.choices.length > 0 && data.choices[0].message) {
      const content = data.choices[0].message.content
      console.log("DeepSeek API response:", content)
      return JSON.parse(content)
    } else {
      console.error("Unexpected API response format:", data)
      throw new Error("Unexpected API response format")
    }
  } catch (error) {
    console.error("Error calling DeepSeek API:", error)
    return getFallbackResponse()
  }
}

function getFallbackResponse(): BotResponse {
  return {
    greeting: "Hello there!",
    message:
      "I apologize, but I'm having a bit of trouble accessing my knowledge base at the moment. But no worries, I'm still here to chat! How about we start with you telling me a little bit about your educational interests?",
    courseRecommendation: null,
    followUpQuestion: "What subjects or career paths are you most excited about right now?",
  }
}

export interface BotResponse {
  greeting: string | null
  message: string
  courseRecommendation: string | null
  followUpQuestion: string
}

export interface StructuredResponse {
  greeting: string
  congratulations: string
  introduction: string
  careerOptions: {
    title: string
    description: string
    details: string[]
    krishnaEduTechOffering: string | null
  }[]
  followUp: string
}

export async function testDeepSeekAPI(): Promise<string> {
  try {
    const response = await callDeepSeekAPI("What courses do you offer for B.Tech graduates?")
    console.log("API Test Response:", response)
    return "API connection successful! Response: " + JSON.stringify(response)
  } catch (error) {
    console.error("API Test Error:", error)
    return `API connection failed. Error: ${error.message}. Check your console for more details.`
  }
}

