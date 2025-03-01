"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function CareerCounselingChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await generateText({
        model: openai("gpt-4o"),
        prompt: `You are a career counseling chatbot. The user said: "${input}". Ask a follow-up question to better understand their career goals or provide relevant advice. Keep your response concise.`,
      })

      const botMessage: Message = { role: "assistant", content: response.text }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error generating response:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm sorry, I'm having trouble responding right now. Please try again later.",
      }
      setMessages((prev) => [...prev, errorMessage])
    }

    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Career Counseling Chatbot</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {message.content}
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full space-x-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? "Thinking..." : "Send"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

