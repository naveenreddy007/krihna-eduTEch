"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function CoursesPage() {
  const categories = [
    { id: "before-ssc", name: "Before SSC" },
    { id: "after-10th", name: "After 10th" },
    { id: "after-inter", name: "After Inter (12th)" },
    { id: "after-diploma", name: "After Diploma" },
    { id: "after-bsc", name: "After B.Sc" },
    { id: "after-btech", name: "After B.Tech" },
    { id: "after-pharm", name: "After Pharm" },
    { id: "govt-jobs", name: "Govt Job Courses" },
  ]

  const courses = [
    {
      id: 1,
      title: "SSC Exam Preparation",
      category: "before-ssc",
      description: "Comprehensive preparation for Staff Selection Commission exams with expert guidance.",
      duration: "6 months",
      fee: "₹15,000",
      featured: true,
    },
    {
      id: 2,
      title: "Diploma in Computer Science",
      category: "after-10th",
      description: "Learn programming, database management, and computer networking fundamentals.",
      duration: "3 years",
      fee: "₹45,000/year",
      featured: true,
    },
    {
      id: 3,
      title: "B.Tech Bridge Course",
      category: "after-diploma",
      description: "Specialized course to help diploma holders transition smoothly to B.Tech programs.",
      duration: "1 year",
      fee: "₹60,000",
      featured: true,
    },
    {
      id: 4,
      title: "Advanced Mathematics",
      category: "before-ssc",
      description: "Master mathematical concepts required for competitive exams and higher education.",
      duration: "3 months",
      fee: "₹8,000",
      featured: false,
    },
    {
      id: 5,
      title: "Diploma in Civil Engineering",
      category: "after-10th",
      description: "Learn about construction, structural design, and infrastructure development.",
      duration: "3 years",
      fee: "₹40,000/year",
      featured: false,
    },
    {
      id: 6,
      title: "B.Sc in Data Science",
      category: "after-inter",
      description: "Comprehensive program covering statistics, programming, and data analysis.",
      duration: "3 years",
      fee: "₹75,000/year",
      featured: false,
    },
    {
      id: 7,
      title: "M.Tech in AI & ML",
      category: "after-btech",
      description: "Advanced study of artificial intelligence and machine learning technologies.",
      duration: "2 years",
      fee: "₹1,20,000/year",
      featured: false,
    },
    {
      id: 8,
      title: "Bank PO Preparation",
      category: "govt-jobs",
      description: "Comprehensive preparation for banking probationary officer exams.",
      duration: "4 months",
      fee: "₹25,000",
      featured: false,
    },
    {
      id: 9,
      title: "Pharmacy Assistant Course",
      category: "after-pharm",
      description: "Practical training for pharmacy graduates to work in healthcare settings.",
      duration: "6 months",
      fee: "₹30,000",
      featured: false,
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Courses</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Discover a wide range of courses designed to help you achieve your educational and career goals.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container">
          <div className="lg:grid lg:grid-cols-[240px_1fr] gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">All Courses</h2>
              <Button variant="outline" size="sm" onClick={() => setShowMobileFilter(!showMobileFilter)}>
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Sidebar Filters */}
            <div className={`${showMobileFilter ? "block" : "hidden"} lg:block`}>
              <div className="glass-card rounded-lg p-6 sticky top-20">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedCategory === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedCategory("all")}
                  >
                    All Courses
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        selectedCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Listings */}
            <div>
              <div className="hidden lg:flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {selectedCategory === "all"
                    ? "All Courses"
                    : categories.find((c) => c.id === selectedCategory)?.name || "Courses"}
                </h2>
                <p className="text-muted-foreground">{filteredCourses.length} courses found</p>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="relative h-48">
                        <Image
                          src={`/placeholder.svg?height=300&width=500&text=${encodeURIComponent(course.title)}`}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        {course.featured && (
                          <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                            Featured
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
                          {categories.find((c) => c.id === course.category)?.name}
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
                          <Link href={`/courses/${course.id}`}>Enroll Now</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No courses found matching your criteria.</p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all")
                      setSearchQuery("")
                    }}
                  >
                    View All Courses
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Course to Choose?</h2>
            <p className="text-muted-foreground mb-8">
              Our education counselors are here to help you find the perfect course based on your interests and career
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Counseling</Link>
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

