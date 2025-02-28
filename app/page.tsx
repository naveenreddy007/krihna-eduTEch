import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, GraduationCap, BookOpen, Award, Users, Calendar, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Students learning"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 animate-fade-in">
              Empowering Every Learner, <br className="hidden sm:inline" />
              <span className="text-primary">Enabling Every Dream</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Quality education across various fields for students and professionals. Join Krishna EduTech to transform
              your learning journey.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Button size="lg" asChild>
                <Link href="/courses">
                  Explore Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular courses designed to help you achieve your educational and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SSC Exam Preparation",
                category: "Before SSC",
                description: "Comprehensive preparation for Staff Selection Commission exams with expert guidance.",
                duration: "6 months",
                fee: "₹15,000",
              },
              {
                title: "Diploma in Computer Science",
                category: "After 10th",
                description: "Learn programming, database management, and computer networking fundamentals.",
                duration: "3 years",
                fee: "₹45,000/year",
              },
              {
                title: "B.Tech Bridge Course",
                category: "After Diploma",
                description: "Specialized course to help diploma holders transition smoothly to B.Tech programs.",
                duration: "1 year",
                fee: "₹60,000",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=${encodeURIComponent(course.title)}`}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm mb-4">
                    <span>Duration: {course.duration}</span>
                    <span>Fee: {course.fee}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/courses">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our students who have transformed their careers through our courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                course: "B.Tech Bridge Course",
                quote:
                  "Krishna EduTech helped me transition from diploma to B.Tech seamlessly. The faculty support was exceptional!",
                image: "/placeholder.svg?height=100&width=100&text=PS",
              },
              {
                name: "Rahul Verma",
                course: "SSC Exam Preparation",
                quote:
                  "I cleared my SSC exam in the first attempt thanks to the structured curriculum and mock tests provided.",
                image: "/placeholder.svg?height=100&width=100&text=RV",
              },
              {
                name: "Ananya Patel",
                course: "Diploma in Computer Science",
                quote:
                  "The practical approach to teaching helped me gain industry-relevant skills that landed me a great internship.",
                image: "/placeholder.svg?height=100&width=100&text=AP",
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.course}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              At Krishna EduTech, we're proud to say we've reached{" "}
              <span className="font-bold">at least one student from each home</span> in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GraduationCap className="h-10 w-10" />, stat: "10,000+", label: "Graduates" },
              { icon: <BookOpen className="h-10 w-10" />, stat: "50+", label: "Courses" },
              { icon: <Award className="h-10 w-10" />, stat: "95%", label: "Success Rate" },
              { icon: <Users className="h-10 w-10" />, stat: "100+", label: "Expert Faculty" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Regional Impact</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { region: "Hyderabad", students: "4,500+" },
                { region: "Vijayawada", students: "2,800+" },
                { region: "Warangal", students: "1,200+" },
                { region: "Tirupati", students: "950+" },
                { region: "Guntur", students: "1,500+" },
                { region: "Karimnagar", students: "750+" },
              ].map((region, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium">{region.region}</h4>
                  <p className="text-sm opacity-90">{region.students} students</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Chat */}
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Live Chat Support</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Have questions? Our support team is available to help you with course selection, enrollment, and more.
              </p>
              <Button variant="outline" className="w-full">
                Chat with Us
              </Button>
            </div>

            {/* Event Calendar */}
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Upcoming Events</h3>
              </div>
              <ul className="space-y-3 mb-4">
                {[
                  { name: "Open House", date: "March 15, 2025" },
                  { name: "Career Counseling Session", date: "March 22, 2025" },
                  { name: "Workshop on AI & ML", date: "April 5, 2025" },
                ].map((event, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{event.name}</span>
                    <span className="text-muted-foreground">{event.date}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </div>

            {/* Discussion Forum */}
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Student Community</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Join our vibrant community of learners. Discuss courses, share resources, and connect with peers.
              </p>
              <Button variant="outline" className="w-full">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of students who have transformed their careers with Krishna EduTech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Explore Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

