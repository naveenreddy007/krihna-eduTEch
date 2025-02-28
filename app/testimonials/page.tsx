import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Hyderabad",
      course: "B.Tech Bridge Course",
      quote:
        "Krishna EduTech helped me transition from diploma to B.Tech seamlessly. The faculty support was exceptional and the curriculum was perfectly designed to bridge the knowledge gap. I'm now pursuing my B.Tech with confidence.",
      image: "/placeholder.svg?height=100&width=100&text=PS",
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Vijayawada",
      course: "SSC Exam Preparation",
      quote:
        "I cleared my SSC exam in the first attempt thanks to the structured curriculum and mock tests provided by Krishna EduTech. The faculty's guidance on exam strategy was invaluable. I've now secured a government job that I always dreamed of.",
      image: "/placeholder.svg?height=100&width=100&text=RV",
    },
    {
      id: 3,
      name: "Ananya Patel",
      location: "Warangal",
      course: "Diploma in Computer Science",
      quote:
        "The practical approach to teaching helped me gain industry-relevant skills that landed me a great internship. The labs and projects were designed to give us real-world experience. I'm grateful to Krishna EduTech for kickstarting my career in tech.",
      image: "/placeholder.svg?height=100&width=100&text=AP",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Tirupati",
      course: "Bank PO Preparation",
      quote:
        "After multiple failed attempts at clearing the Bank PO exam, I joined Krishna EduTech. Their focused approach and personalized attention helped me understand my weaknesses and work on them. I finally cleared the exam and am now working at a leading bank.",
      image: "/placeholder.svg?height=100&width=100&text=VS",
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Guntur",
      course: "B.Sc in Data Science",
      quote:
        "The B.Sc in Data Science program at Krishna EduTech is comprehensive and up-to-date with industry trends. The faculty members are experienced professionals who bring real-world insights into the classroom. I'm now working as a junior data analyst.",
      image: "/placeholder.svg?height=100&width=100&text=MR",
    },
    {
      id: 6,
      name: "Arjun Kumar",
      location: "Karimnagar",
      course: "M.Tech in AI & ML",
      quote:
        "The advanced curriculum and research opportunities in the M.Tech program helped me specialize in AI & ML. The industry partnerships provided networking opportunities that led to my current role at a leading tech company. Krishna EduTech truly enables dreams!",
      image: "/placeholder.svg?height=100&width=100&text=AK",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Success Stories</h1>
            <p className="text-muted-foreground text-lg">
              Hear from our students who have transformed their careers through our courses.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card rounded-lg p-6 flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-sm text-primary">{testimonial.course}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="italic text-muted-foreground relative z-10 pl-4">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Story</h2>

          <div className="max-w-4xl mx-auto glass-card rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Featured+Student"
                  alt="Featured Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Sanjay Mehta</h3>
                <p className="text-primary font-medium mb-4">From Struggling Student to Tech Lead</p>

                <p className="text-muted-foreground mb-4">
                  "I was struggling to find direction after completing my 12th grade with average marks. Krishna
                  EduTech's career counseling helped me discover my passion for technology. I enrolled in their Diploma
                  in Computer Science program, which laid a strong foundation.
                </p>

                <p className="text-muted-foreground mb-4">
                  Later, I completed their B.Tech Bridge Course and went on to earn my B.Tech degree. Today, I'm working
                  as a Tech Lead at a multinational company, earning more than I ever imagined.
                </p>

                <p className="text-muted-foreground mb-6">
                  Krishna EduTech didn't just provide education; they transformed my life and enabled my dream."
                </p>

                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-semibold">Sanjay Mehta</p>
                    <p className="text-sm text-muted-foreground">Tech Lead, Global Solutions Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Video Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Video+Testimonial+${index}`}
                    alt={`Video Testimonial ${index}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Student Success Story {index}</h3>
                  <p className="text-sm text-muted-foreground">
                    Watch how our courses transformed this student's career
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Write Your Success Story With Us</h2>
            <p className="opacity-90 mb-8">
              Join thousands of students who have transformed their careers with Krishna EduTech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

