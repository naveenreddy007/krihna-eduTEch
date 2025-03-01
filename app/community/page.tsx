import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-12 text-center">
      <Users className="h-24 w-24 text-primary mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4">Student Community</h1>
      <p className="text-xl text-muted-foreground mb-8">
        We're working hard to build an amazing community platform for our students.
      </p>
      <div className="max-w-md mx-auto bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
        <p className="mb-6">
          Our student community platform is under development. Stay tuned for discussions, resource sharing, and
          connecting with peers!
        </p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

