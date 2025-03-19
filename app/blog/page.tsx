import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Course After 10th Grade",
      excerpt:
        "Confused about what to do after 10th? This comprehensive guide will help you make an informed decision based on your interests and career goals.",
      date: "February 15, 2025",
      author: "Dr. Rajesh Kumar",
      category: "Career Guidance",
      image: "/placeholder.svg?height=400&width=600&text=Course+Selection",
    },
    {
      id: 2,
      title: "Top 10 Government Job Opportunities in 2025",
      excerpt:
        "Explore the most promising government job opportunities this year, along with eligibility criteria and preparation strategies.",
      date: "February 10, 2025",
      author: "Sunita Reddy",
      category: "Job Opportunities",
      image: "/placeholder.svg?height=400&width=600&text=Govt+Jobs",
    },
    {
      id: 3,
      title: "The Growing Importance of Data Science in Today's World",
      excerpt:
        "Learn why data science has become one of the most sought-after fields and how you can build a career in this domain.",
      date: "February 5, 2025",
      author: "Vikram Singh",
      category: "Technology Trends",
      image: "/placeholder.svg?height=400&width=600&text=Data+Science",
    },
    {
      id: 4,
      title: "Tips to Excel in Competitive Exams",
      excerpt:
        "Effective strategies and study techniques to help you prepare for and excel in competitive examinations.",
      date: "January 28, 2025",
      author: "Meena Patel",
      category: "Exam Prep",
      image: "/placeholder.svg?height=400&width=600&text=Exam+Tips",
    },
    {
      id: 5,
      title: "The Benefits of Pursuing a Technical Diploma",
      excerpt:
        "Discover how a technical diploma can provide practical skills and open doors to various career opportunities.",
      date: "January 20, 2025",
      author: "Dr. Rajesh Kumar",
      category: "Education Insights",
      image: "/placeholder.svg?height=400&width=600&text=Technical+Diploma",
    },
    {
      id: 6,
      title: "How to Build a Strong Resume for Your First Job",
      excerpt: "Essential tips for freshers to create an impressive resume that stands out to potential employers.",
      date: "January 15, 2025",
      author: "Sunita Reddy",
      category: "Career Guidance",
      image: "/placeholder.svg?height=400&width=600&text=Resume+Building",
    },
  ]

  const categories = [
    "Career Guidance",
    "Job Opportunities",
    "Technology Trends",
    "Exam Prep",
    "Education Insights",
    "Student Life",
    "Success Stories",
  ]

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-lg">
              Insights, tips, and guidance to help you navigate your educational and career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Post</h2>

          <div className="glass-card rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                  alt="Featured Post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>March 1, 2025</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4" />
                  <span>Dr. Rajesh Kumar</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  The Future of Education: Blending Traditional and Digital Learning
                </h3>

                <p className="text-muted-foreground mb-6">
                  In this comprehensive article, we explore how the educational landscape is evolving with the
                  integration of digital technologies while maintaining the core values of traditional learning
                  methodologies.
                </p>

                <Button asChild>
                  <Link href="/blog/future-of-education">Read Full Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="lg:grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>

              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="glass-card rounded-lg overflow-hidden">
                    <div className="grid md:grid-cols-[300px_1fr]">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={
                            post.image ||
                            `https://placehold.co/600x400/003366/ffffff?text=${encodeURIComponent(post.title.substring(0, 20))}`
                          }
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm">
                            <Tag className="h-4 w-4 text-primary" />
                            <span>{post.category}</span>
                          </div>

                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/blog/${post.id}`}>Read More</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              {/* Categories */}
              <div className="glass-card rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between text-muted-foreground hover:text-foreground"
                      >
                        <span>{category}</span>
                        <span className="bg-muted rounded-full w-6 h-6 flex items-center justify-center text-xs">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded overflow-hidden shrink-0">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="opacity-90 mb-8">
              Stay updated with the latest educational insights, career guidance, and course offerings.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md flex-1 text-foreground"
                required
              />
              <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

