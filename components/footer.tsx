import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Krishna EduTech</h3>
            <p className="text-sm text-primary-foreground/80 mb-6">Empowering Every Learner, Enabling Every Dream</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/courses?category=before-ssc"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Before SSC
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=after-10th"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  After 10th
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=after-inter"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  After Inter (12th)
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=after-diploma"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  After Diploma
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=after-bsc"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  After B.Sc
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=govt-jobs"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Govt Job Courses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span className="text-primary-foreground/80">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <span className="text-primary-foreground/80">info@krishnaedutech.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Krishna EduTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

