import type React from "react"

interface UnstructuredBotResponseProps {
  content: string
}

export const UnstructuredBotResponse: React.FC<UnstructuredBotResponseProps> = ({ content }) => {
  const formatText = (text: string) => {
    // Try to parse as JSON first
    try {
      const jsonContent = JSON.parse(text)
      return <pre className="whitespace-pre-wrap overflow-x-auto">{JSON.stringify(jsonContent, null, 2)}</pre>
    } catch (e) {
      // If not JSON, format as before
      return text.split("\n").map((line, index) => {
        if (line.match(/^\d+\./)) {
          return (
            <li key={index} className="ml-4">
              {line}
            </li>
          )
        }
        return (
          <p key={index} className="mb-2">
            {line}
          </p>
        )
      })
    }
  }

  return <div className="max-w-[80%] p-3 rounded-lg bg-muted text-foreground">{formatText(content)}</div>
}

