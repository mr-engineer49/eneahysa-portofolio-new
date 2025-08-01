import { Suspense } from "react"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enea Hysa - Software QA Tester | n8n | Automation & RPA Engineer",
  description:
    "Enea Hysa - Software QA Tester at Test IO, specializing in automation, RPA engineering with n8n, and web development. 3+ years experience in Python & Selenium testing. Open to Django Developer and QA roles.",
  keywords:
    "Enea Hysa, Software QA Tester, Test IO, n8n automation, RPA Engineer, Python Selenium, Django Developer, Black Box Testing, Automation Testing, Albania",
  authors: [{ name: "Enea Hysa" }],
  openGraph: {
    title: "Enea Hysa - Software QA Tester | Automation & RPA Engineer",
    description:
      "Software QA Tester at Test IO specializing in automation, RPA engineering, and web development. Open to new opportunities.",
    type: "website",
    locale: "en_US",
    url: "https://eneahysa-portofolio.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enea Hysa - Software QA Tester | Automation Engineer",
    description: "Software QA Tester specializing in automation, RPA engineering, and web development.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-900 rounded-lg" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-900 rounded-lg" />}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
