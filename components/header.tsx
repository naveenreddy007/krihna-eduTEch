"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Krishna EduTech Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="hidden font-bold text-primary md:inline-block">Krishna EduTech</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Link href="/courses" className="text-sm font-medium hover:text-primary">
            Courses
          </Link>
          <Link href="/testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative hidden md:block">
              <Input type="search" placeholder="Search courses..." className="w-[200px] pr-8" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          ) : (
            <button
              className="hidden md:flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </button>
          )}

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm">Register</Button>
          </div>

          <button
            className="flex items-center justify-center rounded-md w-8 h-8 md:hidden hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
          <nav className="container grid gap-6 p-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/testimonials"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="mt-6 space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button className="w-full">Register</Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

