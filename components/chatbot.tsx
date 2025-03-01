"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X, ChevronDown, ChevronUp, Upload, User, Bot } from "lucide-react"
import { callDeepSeekAPI, type BotResponse } from "@/lib/deepseek"
import { motion, AnimatePresence } from "framer-motion"

type MessageType = "user" | "bot"

interface Message {
  type: MessageType
  content: string | BotResponse
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [conversationContext, setConversationContext] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messagesEndRef]) //Corrected dependency

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleInitialMessage()
    }
  }, [isOpen, messages.length])

  const handleInitialMessage = async () => {
    setIsLoading(true)
    try {
      const initialResponse = await callDeepSeekAPI("Hello")
      setMessages([{ type: "bot", content: initialResponse }])
    } catch (error) {
      console.error("Error fetching initial message:", error)
      setMessages([{ type: "bot", content: getFallbackResponse() }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    setMessages((prev) => [...prev, { type: "user", content: message }])
    setInputValue("")
    setIsLoading(true)

    try {
      const botResponse = await callDeepSeekAPI(message, conversationContext)
      setMessages((prev) => [...prev, { type: "bot", content: botResponse }])
      setConversationContext((prev) => prev + "\nUser: " + message + "\nBot: " + JSON.stringify(botResponse))
    } catch (error) {
      console.error("Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: getFallbackResponse(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setMessages((prev) => [...prev, { type: "user", content: `Uploaded: ${file.name}` }])

      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate processing time
      setIsLoading(false)

      const resumeAnalysisResponse = await callDeepSeekAPI(`Quick resume tip for: ${file.name}`, conversationContext)
      setMessages((prev) => [...prev, { type: "bot", content: resumeAnalysisResponse }])
      setConversationContext(
        (prev) => prev + "\nUser: Uploaded resume: " + file.name + "\nBot: " + JSON.stringify(resumeAnalysisResponse),
      )
    }
  }

  const getFallbackResponse = (): BotResponse => ({
    greeting: "Namaste! 🌟",
    message: "I'm having trouble connecting right now. How else can I assist you?",
    options: ["Try again", "Explore courses", "Contact support"],
    insight: "Technology hiccups happen, but learning never stops!",
    encouragement: "Let's keep moving forward together!",
  })

  const renderBotResponse = (content: BotResponse) => (
    <div className="space-y-2">
      <p className="font-bold">{content.greeting}</p>
      <p>{content.message}</p>
      {content.options && content.options.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {content.options.map((option, index) => (
            <Button key={index} variant="outline" size="sm" onClick={() => handleSendMessage(option)}>
              {option}
            </Button>
          ))}
        </div>
      )}
      <p className="italic text-sm">{content.insight}</p>
      <p className="text-sm text-primary">{content.encouragement}</p>
    </div>
  )

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
          >
            <MessageSquare className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 w-80 md:w-96 rounded-lg shadow-xl z-50 bg-background border border-border ${
              isMinimized ? "h-14" : "min-h-[500px] max-h-[70vh]"
            }`}
          >
            <div className="bg-primary text-primary-foreground p-3 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <span className="text-primary text-xl font-bold">K</span>
                </div>
                <h3 className="font-semibold">Krishna EduTech Assistant</h3>
              </div>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="icon" onClick={() => setIsMinimized(!isMinimized)}>
                  {isMinimized ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="bg-background p-4 h-[calc(500px-120px)] overflow-y-auto">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} mb-4`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          {message.type === "user" ? (
                            <div className="flex items-center">
                              <User className="h-5 w-5 mr-2" />
                              <span>{message.content as string}</span>
                            </div>
                          ) : (
                            <div className="flex items-start">
                              <Bot className="h-5 w-5 mr-2 mt-1" />
                              <div>{renderBotResponse(message.content as BotResponse)}</div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted p-3 rounded-lg flex items-center space-x-2">
                        <Bot className="h-5 w-5" />
                        <div className="flex space-x-1">
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
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="bg-muted p-4 rounded-b-lg">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSendMessage(inputValue)
                    }}
                    className="flex items-center space-x-2"
                  >
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <input
                      type="file"
                      id="resume-upload"
                      className="hidden"
                      onChange={handleFileSelect}
                      accept=".pdf,.doc,.docx"
                    />
                    <Button
                      type="button"
                      onClick={() => document.getElementById("resume-upload")?.click()}
                      disabled={isLoading}
                      size="icon"
                      variant="outline"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                    <Button type="submit" disabled={!inputValue.trim() || isLoading} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}

