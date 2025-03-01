import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    name: "Open House",
    date: "March 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Krishna EduTech Main Campus, Hyderabad",
    description: "Explore our facilities, meet faculty members, and learn about our diverse range of courses.",
  },
  {
    name: "Career Counseling Session",
    date: "March 22, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Online (Zoom)",
    description: "Get personalized career advice from our expert counselors and industry professionals.",
  },
  {
    name: "Workshop on AI & ML",
    date: "April 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Krishna EduTech Tech Hub, Bangalore",
    description:
      "Hands-on workshop covering the latest trends and technologies in Artificial Intelligence and Machine Learning.",
  },
  {
    name: "SSC Exam Preparation Seminar",
    date: "April 12, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Krishna EduTech Center, Vijayawada",
    description: "Learn effective strategies and tips for acing your SSC exams from our experienced faculty.",
  },
  {
    name: "Parent-Teacher Meet",
    date: "April 20, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "All Krishna EduTech Centers",
    description:
      "Discuss your child's progress and get insights into their academic journey with our dedicated teachers.",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div key={index} className="glass-card rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">{event.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <p className="text-sm mb-4 flex-grow">{event.description}</p>
            <Button className="w-full mt-auto">Register</Button>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

