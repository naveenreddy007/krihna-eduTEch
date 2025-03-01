"use client"

import { useState } from "react"
import { testDeepSeekAPI } from "@/lib/deepseek"
import { Button } from "@/components/ui/button"

export default function APITestPage() {
  const [testResult, setTestResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTestAPI = async () => {
    setIsLoading(true)
    try {
      const result = await testDeepSeekAPI()
      setTestResult(result)
    } catch (error) {
      setTestResult("An error occurred while testing the API.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">DeepSeek API Test</h1>
      <Button onClick={handleTestAPI} disabled={isLoading}>
        {isLoading ? "Testing..." : "Test DeepSeek API Connection"}
      </Button>
      {testResult && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">Test Result:</h2>
          <p>{testResult}</p>
        </div>
      )}
    </div>
  )
}

