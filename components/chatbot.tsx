"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { callDeepSeekAPI, type BotResponse } from "@/lib/deepseek"
// import { StructuredBotResponse } from "./StructuredBotResponse"
// import { UnstructuredBotResponse } from "./UnstructuredBotResponse"

type MessageType = "user" | "bot"

interface Message {
  type: MessageType
  content: string | BotResponse
}

// Add this function after the existing imports:
async function callHuggingFaceAPI(userQuery: string) {
  try {
    const response = await fetch("/api/huggingface", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userQuery }),
    })

    if (!response.ok) {
      throw new Error("Failed to fetch from Hugging Face API")
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error("Error calling Hugging Face API:", error)
    return "I am KrishnaBot, the career counseling AI assistant from Krishna EduTech. I'm having trouble connecting right now. How can I help you with your career questions?"
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages]) //Corrected dependency

  // Update the handleSendMessage function to use the new API route
  // Replace the existing handleSendMessage function with this:
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    setMessages((prev) => [...prev, { type: "user", content: message }])
    setInputValue("")
    setIsLoading(true)

    try {
      // Use DeepSeek API as the primary option
      const botResponse = await callDeepSeekAPI(message)
      setMessages((prev) => [...prev, { type: "bot", content: botResponse }])
    } catch (error) {
      console.error("Error with DeepSeek API, falling back to Hugging Face:", error)
      try {
        // Fall back to Hugging Face API
        const textResponse = await callHuggingFaceAPI(message)
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: {
              greeting: null,
              message: textResponse,
              courseRecommendation: null,
              followUpQuestion: "What else would you like to know about our courses?",
            },
          },
        ])
      } catch (fallbackError) {
        console.error("Both APIs failed:", fallbackError)
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: {
              greeting: null,
              message: "Oops! It seems I'm having a bit of trouble right now. How about we try a different topic?",
              courseRecommendation: null,
              followUpQuestion: "What else would you like to know about our courses or career options?",
            },
          },
        ])
      }
    } finally {
      setIsLoading(false)
    }
  }

  const renderBotResponse = (content: BotResponse) => {
    return (
      <div className="space-y-2">
        {content.greeting && <p className="font-medium">{content.greeting}</p>}
        <p>{content.message}</p>
        {content.courseRecommendation && (
          <p className="text-primary">Course Recommendation: {content.courseRecommendation}</p>
        )}
        <p className="italic">{content.followUpQuestion}</p>
      </div>
    )
  }

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 w-80 md:w-96 rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out ${
            isMinimized ? "h-14" : "h-[500px]"
          }`}
        >
          {/* Chat header */}
          <div className="bg-primary text-primary-foreground p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Krishna EduTech Logo"
                width={30}
                height={30}
                className="rounded-md mr-2"
              />
              <h3 className="font-semibold">Krishna EduTech Assistant</h3>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-primary-foreground/10 rounded"
              >
                {isMinimized ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-primary-foreground/10 rounded">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat body - only shown when not minimized */}
          {!isMinimized && (
            <>
              <div className="bg-white dark:bg-gray-800 p-4 h-[calc(500px-120px)] overflow-y-auto">
                {/* Messages */}
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.type === "user"
                          ? (message.content as string)
                          : renderBotResponse(message.content as BotResponse)}
                      </div>
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-muted p-3 rounded-lg flex items-center space-x-1">
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Chat input */}
              <div className="bg-muted p-4 rounded-b-lg">
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isLoading}
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Add styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}

