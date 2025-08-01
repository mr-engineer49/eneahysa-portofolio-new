"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Software Quality Assurance Tester",
    company: "Test IO",
    location: "Remote",
    period: "Jul 2024 - Present · 1 yr 2 mos",
    type: "Freelance",
    description:
      "Conducting comprehensive software testing for various applications and platforms, specializing in functional testing, performance testing, and bug reporting.",
    achievements: [
      "Performed Software Testing, Bug Reporting, and BlackBox Testing",
      "Conducted Functional Testing and Performance Testing across multiple platforms",
      "Delivered detailed bug reports and quality assessments",
      "Maintained high testing standards for client projects",
    ],
    technologies: [
      "Black Box Testing",
      "Functional Testing",
      "Performance Testing",
      "Bug Reporting",
      "Software Testing",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "Test Automation Specialist | First Line Support",
    company: "Revelop SRL",
    location: "Tirana, Albania",
    period: "Oct 2021 - Jun 2024 · 2 yrs 9 mos",
    type: "Full-time · On-site",
    description:
      "Led test automation initiatives and provided critical first-line support for web applications, focusing on automation script development and root cause analysis.",
    achievements: [
      "Developed and maintained Test Automation and Web Automation solutions",
      "Provided First Line Support for production systems",
      "Conducted Root Cause Analysis for complex technical issues",
      "Created Automation Scripts using Python and Selenium",
      "Improved system reliability and performance through comprehensive testing",
    ],
    technologies: ["Python", "Python selenium", "Test Automation", "Web Automation", "Root Cause Analysis"],
    link: "#",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Freelancer",
    location: "Tirana, Albania",
    period: "Sep 2020 - Jan 2022 · 1 yr 5 mos",
    type: "Freelance",
    description:
      "Provided comprehensive web development services including UI/UX design and full-stack web application development using modern frameworks.",
    achievements: [
      "Delivered UI & UX Design solutions for various client projects",
      "Developed Web Applications using Django framework",
      "Built responsive applications with Next.js",
      "Created custom PHP solutions for client requirements",
      "Managed complete project lifecycle from design to deployment",
    ],
    technologies: ["Django", "Next.js", "PHP", "Web Application Development", "UI/UX Design"],
    link: "#",
  },
  {
    id: 4,
    title: "Web Designer",
    company: "Self-employed",
    location: "Remote",
    period: "Aug 2019 - Aug 2021 · 2 yrs 1 mo",
    type: "Self-employed",
    description:
      "Focused on web design and user experience, creating engaging and functional web interfaces using Django and modern design principles.",
    achievements: [
      "Designed and developed user-centric web interfaces",
      "Specialized in Django-based web solutions",
      "Implemented User Experience (UX) best practices",
      "Created responsive and accessible web designs",
      "Built long-term client relationships through quality deliverables",
    ],
    technologies: ["Django", "User Experience (UX)", "Web Design", "UI Design"],
    link: "#",
  },
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0])

  return (
    <section id="experience" className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive journey through software testing, automation engineering, and web development roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-1 space-y-4">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedExperience.id === exp.id
                    ? "bg-blue-900/20 border-blue-500"
                    : "bg-gray-900 border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setSelectedExperience(exp)}
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs mb-2">{exp.type}</p>
                  <div className="flex items-center text-gray-400 text-xs space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period.split(" · ")[0]}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedExperience.title}</h3>
                    <p className="text-blue-400 text-lg mb-1">{selectedExperience.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{selectedExperience.type}</p>
                    <div className="flex items-center text-gray-400 text-sm space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {selectedExperience.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {selectedExperience.location}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{selectedExperience.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-blue-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
