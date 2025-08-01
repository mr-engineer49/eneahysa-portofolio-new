"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Traveblo",
    description: "Travel Management Tool that helps agencies create new campaigns and manage travel operations.",
    longDescription:
      "Traveblo is a comprehensive Travel Management Tool designed to help travel agencies create new campaigns and efficiently manage their operations. The platform provides tools for campaign creation, client management, booking systems, and analytics dashboard. Built with Django backend for robust data handling and modern frontend technologies for optimal user experience.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Django", "Web Development", "Campaign Management", "Travel Industry"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    period: "Apr 2023 - Present",
    status: "Active",
    featured: true,
  },
  {
    id: 2,
    title: "Blog Platform",
    description: "Full-featured blogging platform with content management and user engagement features.",
    longDescription:
      "Developed a comprehensive blogging platform with advanced content management capabilities. Features include user authentication, rich text editor, comment system, category management, and SEO optimization. Built with Django backend and modern HTML5/CSS3 frontend with responsive design for optimal user experience across all devices.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Django", "HTML5", "CSS3", "Content Management", "SEO"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    period: "Jan 2024 - Mar 2024",
    status: "Completed",
    featured: true,
  },
  {
    id: 3,
    title: "n8n Automation Workflows",
    description: "Custom automation workflows using n8n for data pipelines and API integrations.",
    longDescription:
      "Created sophisticated automation workflows using n8n visual workflow builder. Developed data pipelines that integrate multiple APIs, automate repetitive tasks, and streamline business processes. The workflows include data transformation, API integrations, and automated reporting systems that significantly reduce manual work and improve efficiency.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["n8n", "Automation", "API Integration", "Data Pipelines", "Workflow Design"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    period: "2024 - Present",
    status: "Ongoing",
    featured: false,
  },
  {
    id: 4,
    title: "Python Selenium Test Suite",
    description: "Comprehensive automated testing framework using Python and Selenium for web applications.",
    longDescription:
      "Developed a robust automated testing framework using Python and Selenium for comprehensive web application testing. The framework includes cross-browser testing capabilities, detailed reporting, and integration with CI/CD pipelines. Features include page object model implementation, data-driven testing, and extensive logging for debugging and analysis.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Selenium", "Test Automation", "Cross-browser Testing", "CI/CD"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    period: "2021 - 2024",
    status: "Completed",
    featured: false,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length
    setCurrentIndex(nextIndex)
    setSelectedProject(projects[nextIndex])
  }

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    setCurrentIndex(prevIndex)
    setSelectedProject(projects[prevIndex])
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of real-world projects spanning travel management, automation workflows, and testing frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Showcase */}
          <div className="relative">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${
                      selectedProject.status === "Active"
                        ? "bg-green-600"
                        : selectedProject.status === "Ongoing"
                          ? "bg-blue-600"
                          : "bg-gray-600"
                    } text-white`}
                  >
                    {selectedProject.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {selectedProject.period}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevProject}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextProject}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 hover:bg-gray-800 bg-transparent"
                    asChild
                  >
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProject.id === project.id
                    ? "bg-blue-900/20 border-blue-500 scale-105"
                    : "bg-gray-900 border-gray-800 hover:border-gray-700 hover:scale-102"
                }`}
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentIndex(index)
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white flex items-center">
                          {project.title}
                          {project.featured && <Badge className="ml-2 bg-blue-600 text-xs">Featured</Badge>}
                        </h3>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            project.status === "Active"
                              ? "bg-green-900 text-green-300"
                              : project.status === "Ongoing"
                                ? "bg-blue-900 text-blue-300"
                                : "bg-gray-800 text-gray-400"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-2">{project.description}</p>
                      <p className="text-gray-500 text-xs mb-3">{project.period}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-gray-800 text-gray-400 text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
