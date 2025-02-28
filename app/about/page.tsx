import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">About Krishna EduTech</h1>
              <p className="text-muted-foreground text-lg mb-6">
                We are dedicated to empowering students and professionals with quality education across various fields.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=About+Us"
                alt="About Krishna EduTech"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To provide accessible, quality education that empowers individuals to achieve their academic and
                professional goals, fostering a lifelong love for learning and personal growth.
              </p>
              <p className="text-muted-foreground">
                We are committed to ensuring that at least one student from each home has access to quality education,
                breaking barriers and creating opportunities for all.
              </p>
            </div>
            <div className="glass-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                To be the leading educational platform that transforms lives through innovative learning experiences,
                creating a community of empowered individuals who contribute positively to society.
              </p>
              <p className="text-muted-foreground">
                We envision a world where quality education is accessible to all, regardless of geographical or
                socioeconomic barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                  2010
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Krishna EduTech was founded with a vision to provide quality education to students in rural areas.
                    Starting with just two classrooms and three dedicated teachers, we began our journey to transform
                    education.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                  2015
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expansion Phase</h3>
                  <p className="text-muted-foreground">
                    With growing recognition and success, we expanded our offerings to include more courses and opened
                    centers in five major cities across the region, reaching thousands of students.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground">
                    Embracing technology, we launched our online learning platform, making quality education accessible
                    to students regardless of their geographical location, especially during the global pandemic.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0">
                  Today
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Leading the Way</h3>
                  <p className="text-muted-foreground">
                    Today, Krishna EduTech stands as a leading educational institution with over 10,000 graduates, 50+
                    courses, and a presence in multiple cities, continuing our mission to empower every learner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Founder & CEO",
                bio: "Ph.D. in Education with 20+ years of experience in educational leadership.",
                image: "/placeholder.svg?height=300&width=300&text=RK",
              },
              {
                name: "Prof. Sunita Reddy",
                role: "Academic Director",
                bio: "Former university professor with expertise in curriculum development.",
                image: "/placeholder.svg?height=300&width=300&text=SR",
              },
              {
                name: "Vikram Singh",
                role: "Technology Head",
                bio: "Tech innovator with a passion for creating accessible learning platforms.",
                image: "/placeholder.svg?height=300&width=300&text=VS",
              },
              {
                name: "Dr. Meena Patel",
                role: "Student Success Lead",
                bio: "Dedicated to ensuring every student achieves their full potential.",
                image: "/placeholder.svg?height=300&width=300&text=MP",
              },
            ].map((member, index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Our team includes 100+ expert faculty members across various disciplines, all committed to our mission of
              empowering learners.
            </p>
            <Button asChild>
              <Link href="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
            <p className="opacity-90 mb-8">
              Join Krishna EduTech and be part of our mission to empower every learner and enable every dream.
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

