"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming & Development",
    skills: ["Python", "React.js", "Django", "Flask", "Next.js", "JavaScript", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Testing & QA",
    skills: [
      "Python Selenium",
      "Black Box Testing",
      "Functional Testing",
      "Performance Testing",
      "Bug Reporting",
      "Test Automation",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Automation & Tools",
    skills: ["n8n", "Automation", "RPA Engineering", "Web Automation", "API Integration", "Workflow Design"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Design & Services",
    skills: [
      "Web Design",
      "WordPress Design",
      "UI/UX Design",
      "User Experience",
      "Web Development",
      "Software Testing",
    ],
    color: "from-orange-500 to-red-500",
  },
]

const topSkills = ["Python (Programming Language)", "React.js", "Django", "Black Box Testing", "Python selenium"]

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise in software testing, automation, web development, and RPA engineering with modern
            tools and technologies.
          </p>
        </div>

        {/* Top Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Top Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topSkills.map((skill) => (
              <Badge
                key={skill}
                className="bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}
                >
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
