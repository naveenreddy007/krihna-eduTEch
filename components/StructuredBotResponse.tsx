import type React from "react"
import type { StructuredResponse } from "@/lib/deepseek"

interface StructuredBotResponseProps {
  response: StructuredResponse
}

export const StructuredBotResponse: React.FC<StructuredBotResponseProps> = ({ response }) => {
  return (
    <div className="max-w-[80%] p-3 rounded-lg bg-muted text-foreground">
      <p className="font-medium">
        {response.greeting} {response.congratulations}
      </p>
      <p className="mt-2">{response.introduction}</p>

      <h3 className="font-bold mt-4 mb-2">Career Options</h3>
      {response.careerOptions.map((option, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold">{option.title}</h4>
          <p>{option.description}</p>
          <ul className="list-disc ml-5 mt-2">
            {option.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          {option.krishnaEduTechOffering && (
            <p className="mt-2 text-primary">
              <strong>Krishna EduTech offers:</strong> {option.krishnaEduTechOffering}
            </p>
          )}
        </div>
      ))}

      <p className="mt-4 italic">{response.followUp}</p>
    </div>
  )
}

