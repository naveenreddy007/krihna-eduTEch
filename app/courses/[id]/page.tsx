import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, DollarSign, GraduationCap } from "lucide-react"

// This would typically come from a database
const getCourseData = (id: string) => {
  const courses = [
    {
      id: "1",
      title: "Foundation Course in Coding & Mathematics",
      category: "Before SSC",
      description:
        "Introduces students to basic coding (Python, Scratch) and mathematical problem-solving skills to build a strong foundation.",
      longDescription:
        "This comprehensive course is designed for young students who want to build a strong foundation in coding and mathematics. The curriculum covers basic programming concepts using Python and Scratch, along with mathematical problem-solving techniques that will help students excel in their academic journey. Through hands-on projects and interactive sessions, students will develop logical thinking and analytical skills that are essential for future success in STEM fields.",
      duration: "3 months",
      fee: "₹5,000",
      tagline: "Start Young, Think Smart!",
      featured: true,
      startDate: "April 15, 2025",
      instructor: "Dr. Rajesh Kumar",
      syllabus: [
        "Introduction to Programming Logic",
        "Basics of Python Programming",
        "Interactive Projects with Scratch",
        "Mathematical Problem-Solving Techniques",
        "Logical Reasoning and Analytical Skills",
        "Final Project: Building a Simple Game",
      ],
    },
    {
      id: "2",
      title: "Science & Innovation Workshops",
      category: "Before SSC",
      description:
        "Engaging workshops in Physics, Chemistry, and Biology to develop critical thinking and problem-solving abilities.",
      longDescription:
        "Our Science & Innovation Workshops are designed to spark curiosity and foster a love for scientific exploration in young minds. Through hands-on experiments and interactive sessions, students will delve into the fascinating worlds of Physics, Chemistry, and Biology. The workshops emphasize critical thinking, problem-solving, and the practical application of scientific principles, making learning both fun and effective.",
      duration: "2 months",
      fee: "₹4,000",
      tagline: "Experiment, Innovate, and Discover!",
      featured: false,
      startDate: "May 1, 2025",
      instructor: "Prof. Sunita Reddy",
      syllabus: [
        "Physics: Forces and Motion",
        "Chemistry: Elements and Compounds",
        "Biology: Living Systems",
        "Scientific Method and Experimentation",
        "Innovation Challenges",
        "Science Fair Project Development",
      ],
    },
    // Default fallback for any other ID
    {
      id: "default",
      title: "Course Information",
      category: "General",
      description: "Detailed information about this course is being updated.",
      longDescription:
        "We're currently updating the detailed information for this course. Please check back soon or contact our admissions office for more details.",
      duration: "Varies",
      fee: "Contact for details",
      tagline: "Quality Education for All",
      featured: false,
      startDate: "Multiple batches available",
      instructor: "Various Faculty Members",
      syllabus: ["Curriculum details coming soon", "Please contact admissions for more information"],
    },
  ]

  return courses.find((course) => course.id === id) || courses[2] // Return the default if not found
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = getCourseData(params.id)

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/courses" className="hover:text-primary">
            Courses
          </Link>
          <span className="mx-2">/</span>
          <span>{course.title}</span>
        </div>

        {/* Course Header */}
        <div className="mb-8">
          <div className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded mb-3">
            {course.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-primary italic">{course.tagline}</p>
        </div>

        {/* Course Banner */}
        <div className="w-full h-64 bg-primary/10 rounded-lg flex items-center justify-center mb-8">
          <GraduationCap className="h-16 w-16 text-primary opacity-50" />
        </div>

        {/* Course Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card rounded-lg p-4 flex items-center">
            <Clock className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{course.duration}</p>
            </div>
          </div>

          <div className="glass-card rounded-lg p-4 flex items-center">
            <DollarSign className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Fee</p>
              <p className="font-medium">{course.fee}</p>
            </div>
          </div>

          <div className="glass-card rounded-lg p-4 flex items-center">
            <Calendar className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Start Date</p>
              <p className="font-medium">{course.startDate}</p>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="glass-card rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Course Description</h2>
          <p className="text-muted-foreground mb-4">{course.longDescription}</p>
          <p className="text-sm">
            Instructor: <span className="font-medium">{course.instructor}</span>
          </p>
        </div>

        {/* Course Syllabus */}
        <div className="glass-card rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Course Syllabus</h2>
          <ul className="space-y-2">
            {course.syllabus.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto">
            Enroll Now
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/contact">Request Information</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

