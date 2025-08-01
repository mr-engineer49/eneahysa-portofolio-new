"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Enea Hysa
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300">Software QA Tester | n8n | Automation & RPA Engineer</h2>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Software Engineer with Bachelor's in Software Engineering and ongoing Master's in Computer Engineering &
              Multimedia Design. Specialized in Testing & Automation with 3+ years of experience using Python &
              Selenium. Expert in web development with Django, Flask, React.js/Next.js, and automation workflows with
              n8n.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 hover:bg-gray-800 bg-transparent" asChild>
              <a href="https://eneahysa-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Portfolio
              </a>
            </Button>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/eneahs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0106e5c50d326bf435"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Upwork Profile"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
            <a
              href="mailto:eneahysa49@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Open to work
            </span>
            <span>•</span>
            <span>626 LinkedIn followers</span>
            <span>•</span>
            <span>500+ connections</span>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Enea Hysa - Professional Photo"
              width={400}
              height={400}
              className="relative z-10 rounded-full border-4 border-gray-800"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  )
}
