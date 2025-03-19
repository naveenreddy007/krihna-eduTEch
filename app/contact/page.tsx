"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would handle form submission here
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Have questions or need more information? We're here to help you on your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">Our team is available Monday-Saturday, 9am-6pm</p>
              <a href="tel:+919876543210" className="text-primary font-medium">
                +91 9876543210
              </a>
            </div>

            <div className="glass-card rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Our support team will get back to you within 24 hours</p>
              <a href="mailto:info@krishnaedutech.com" className="text-primary font-medium">
                info@krishnaedutech.com
              </a>
            </div>

            <div className="glass-card rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Office</h3>
              <p className="text-muted-foreground mb-4">Visit our headquarters in Hyderabad</p>
              <p className="text-primary font-medium">123 Education Street, Hyderabad, 500001</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              {formSubmitted ? (
                <div className="glass-card rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="+91 9876543210" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-sm font-medium">
                        Course Interest
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="before-ssc">Before SSC</SelectItem>
                          <SelectItem value="after-10th">After 10th</SelectItem>
                          <SelectItem value="after-inter">After Inter (12th)</SelectItem>
                          <SelectItem value="after-diploma">After Diploma</SelectItem>
                          <SelectItem value="after-bsc">After B.Sc</SelectItem>
                          <SelectItem value="after-btech">After B.Tech</SelectItem>
                          <SelectItem value="govt-jobs">Govt Job Courses</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your educational goals or any questions you have..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="glass-card rounded-lg overflow-hidden h-[400px] relative">
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Map placeholder - Google Maps would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How can I enroll in a course?",
                  answer:
                    "You can enroll in a course by visiting our website, selecting the desired course, and clicking on the 'Enroll Now' button. Alternatively, you can visit our office or call our enrollment team for assistance.",
                },
                {
                  question: "What are the payment options available?",
                  answer:
                    "We accept various payment methods including credit/debit cards, net banking, UPI, and EMI options. We also offer scholarships and financial aid for eligible students.",
                },
                {
                  question: "Do you offer online courses?",
                  answer:
                    "Yes, we offer both online and offline courses. Our online courses provide the same quality education with the flexibility of learning from anywhere.",
                },
                {
                  question: "How can I get career counseling?",
                  answer:
                    "You can schedule a career counseling session by filling out the contact form on this page or by calling our counseling team directly.",
                },
                {
                  question: "What is your refund policy?",
                  answer:
                    "We offer a 7-day refund policy for most courses if you're not satisfied with the course content. Please refer to the specific course terms for detailed refund policies.",
                },
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="opacity-90 mb-8">
              Join thousands of students who have transformed their careers with Krishna EduTech.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

