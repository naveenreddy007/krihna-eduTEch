export function getFallbackResponse(): string {
  const fallbackResponses = [
    "I am KrishnaBot, the career counseling AI assistant from Krishna EduTech. I'm here to provide information about our educational programs and offer career guidance. How can I assist you with your career or education plans today?",
    "As the AI assistant for Krishna EduTech, I can provide you with up-to-date information about our courses and career paths. What specific area of study or career are you interested in?",
    "I'm KrishnaBot, here to help with Krishna EduTech's courses and career guidance. Could you please tell me more about your educational background or career interests so I can provide relevant information?",
  ]

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

