"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Smartphone, Globe, Palette, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "expertise", "projects", "certificates", "articles", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "articles", label: "Articles" },
    { id: "contact", label: "Contact" },
  ]

  const techStack = [
    { name: "C", icon: "🔧" },
    { name: "C++", icon: "⚡" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MariaDB", icon: "🐬" },
    { name: "Git", icon: "📚" },
    { name: "GitHub", icon: "🐙" },
  ]

  const projects = [
    {
      name: "Verbo Voice Converter Web App",
      description:
        "An interactive Voice Converter Web App with Text-to-Speech (TTS) and Speech-to-Text (STT) functionalities. Built using HTML, CSS, and JavaScript, it utilizes modern Web Speech APIs to enable seamless text-to-voice conversion and speech transcription. Features a user-friendly interface and cross-browser support for an enhanced experience.",
      image: "/assets/images/verbo.png",
      demoUrl: "https://verbo-web-application.vercel.app",
      githubUrl: "https://github.com/Dev-Kavindu/verbo--web-application",
    },
    {
      name: "Personal Portfolio Website",
      description:
        "\uD83C\uDF10 Personal Portfolio Website\nI designed and developed this portfolio website using V0.dev, Cursor AI, and deployed it via Netlify. The contact form is powered by Formspree to enable easy communication. This site showcases my projects, skills, and professional background in software development.",
      image: "/assets/images/portfolio.png",
      demoUrl: "https://musical-tarsier-e910c0.netlify.app",
      githubUrl: "https://github.com/Dev-Kavindu/Portfolio-Web-Site",
    },
  ]

  const articles = [
    {
      title: "From Code to Confidence: Why Building Real-World Projects is the Ultimate Developer Hack",
      snippet: "Discover why hands-on project building is the fastest way to grow as a developer and boost your confidence.",
      url: "https://medium.com/@codewaveacademy/from-code-to-confidence-why-building-real-world-projects-is-the-ultimate-developer-hack-3c9ac3f0ef8e",
    },
    {
      title: "The Practical Roadmap to Becoming a Job-Ready Developer",
      snippet: "A step-by-step guide to help you become a job-ready developer with practical skills.",
      url: "https://medium.com/@codewaveacademy/the-practical-roadmap-to-becoming-a-job-ready-developer-b1fd3e6f6d90",
    },
    {
      title: "Escaping Tutorial Hell: How to Actually Start Building as a Self-Taught Developer",
      snippet: "Break free from endless tutorials and start building real projects as a self-taught developer.",
      url: "https://medium.com/@codewaveacademy/escaping-tutorial-hell-how-to-actually-start-building-as-a-self-taught-developer-f8e41ddf0e0b",
    },
  ]

  // Add static certificate data
  const certificates: Array<{
    image: string;
    description: React.ReactNode;
    link?: string;
    linkedin?: string;
    alt: string;
  }> = [
    {
      image: "/assets/images/1743779729510.jpeg", // Update this path if you have a specific image
      description: (
        <>
          I am super excited to share that I’ve just completed Introduction to Figma Basics. 🎓<br /><br />
          I had a great experience learning industry aligned skills of <br /><br />
          I’d recommend <span className="text-blue-400">#SkillUp</span> by <span className="text-blue-400">#Simplilearn</span> to anyone looking to learn today’s in-demand professional skills. Keep learning and adding the valued certificates to your professional portfolio. 🌟<br /><br />
          Explore 200+ free courses: <a href="https://lnkd.in/gpUcigEi" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">https://lnkd.in/gpUcigEi</a><br /><br />
          #Upskilling #Certification #JobReady #SkillUpBySimplilearn
        </>
      ),
      link: "https://lnkd.in/gpUcigEi",
      alt: "Introduction to Figma Basics Certificate"
    },
    {
      image: "/assets/images/1731269865102.jpeg", // Update this path if you have a specific image
      description: (
        <>
          I am thrilled to have completed the Get Started with Python course, hosted by Shalitha Maduwantha through the Microsoft Student Ambassadors program. This learning experience has enhanced my understanding of Python programming and strengthened my skills for future projects in the field of technology and innovation. A big thank you to Shalitha for organizing and guiding us through this event!<br /><br />
          Looking forward to applying this knowledge in my studies and professional journey. Onward and upward! 🚀<br /><br />
          #MicrosoftLearn #Python #StudentAmbassador #LearningJourney #Programming #Technology #Achievement
        </>
      ),
      alt: "Get Started with Python Certificate"
    },
    {
      image: "/assets/images/image.jpg",
      description: (
        <>
          Excited to share that I have successfully completed the Introduction to C++ course on Sololearn! This course helped me build a strong foundation in C++ programming, improving my problem-solving and coding skills. Looking forward to applying this knowledge in future projects!<br /><br />
          <a href="https://lnkd.in/guYsUYma" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">📜 Certificate: https://lnkd.in/guYsUYma</a><br /><br />
          #CPlusPlus #Programming #Sololearn #Learning #SoftwareDevelopment
        </>
      ),
      link: "https://lnkd.in/guYsUYma",
      linkedin: "https://www.linkedin.com/in/your-linkedin-profile/",
      alt: "Introduction to C++ Certificate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 animate-gradient-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kavindu's Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Link href="https://github.com/Dev-Kavindu" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0">
          <Image
            src="/assets/images/WhatsApp Image 2025-07-15 at 20.43.20_63158554.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Dark overlay for increased darkness */}
        <div className="absolute inset-0 bg-black opacity-30 pointer-events-none z-10" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-circle absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
          <div className="floating-circle absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float-delay-1"></div>
          <div className="floating-circle absolute bottom-40 left-20 w-24 h-24 bg-pink-500/10 rounded-full animate-float-delay-2"></div>
          <div className="floating-circle absolute bottom-20 right-10 w-12 h-12 bg-blue-400/10 rounded-full animate-float-delay-3"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-typing">
            Kavindu Chamod
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            I create beautiful, responsive web applications and mobile experiences that solve real-world problems with
            clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg animate-bounce-in hover:animate-pulse-glow transition-all duration-300 w-full sm:w-auto"
            >
              View My Projects
            </Button>
            <Link
              href="https://www.linkedin.com/in/chamod-ranaweera-7159a1235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold animate-bounce-in hover:animate-pulse-glow transition-all duration-300 shadow-lg w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-pulse-slow-delay"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full animate-pulse-slow-delay-2"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-profile-entrance">
            <div className="relative inline-block">
              <Image
                src="/assets/images/WhatsApp Image 2025-07-15 at 20.51.00_6f40e938.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-blue-500/30 animate-profile-glow"
              />
              {/* Animated rings around profile */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ring-1"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 animate-ring-2"></div>
              <div className="absolute inset-0 rounded-full border-2 border-pink-400/20 animate-ring-3"></div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-text-shimmer">
            About Me
          </h2>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-text-reveal">
            I'm a passionate full-stack developer with expertise in multiple programming languages and database systems.
            I love solving complex problems with clean, efficient code and have experience building everything from
            system-level applications to web services. When I'm not coding, you'll find me exploring new technologies,
            contributing to open source projects, or sharing knowledge with the developer community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center animate-skill-card-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-bounce hover:animate-icon-spin">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400">Building responsive and performant web applications</p>
            </div>

            <div className="text-center animate-skill-card-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-bounce hover:animate-icon-spin">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">System Programming</h3>
              <p className="text-gray-400">Creating efficient system-level applications with C/C++</p>
            </div>

            <div className="text-center animate-skill-card-3">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-bounce hover:animate-icon-spin">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p className="text-gray-400">Designing and optimizing database systems with MySQL & MariaDB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-blue-400">Mobile App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Building cross-platform mobile applications using React Native and Flutter, with focus on performance
                  and user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-400">Web App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Creating scalable web applications with modern frameworks like React, Next.js, and Node.js,
                  emphasizing clean architecture and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-pink-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-pink-400">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Designing user-centered interfaces with attention to accessibility, usability, and modern design
                  principles using Figma and design systems.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-gray-200">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`text-center group animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-700 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                    <span className="text-2xl group-hover:animate-bounce">{tech.icon}</span>
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/25 animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 shadow-lg rounded-t-lg"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Project Card Foreground Content */}
                <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-200 flex items-center gap-2"
                      >
                        <Link href={project.demoUrl}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            width={24}
                            height={16}
                            className="rounded shadow object-cover"
                            style={{ display: 'inline-block' }}
                          />
                          Demo
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-gray-600 hover:bg-gray-700 bg-transparent hover:scale-105 transition-all duration-200"
                      >
                        <Link href={project.githubUrl}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="bg-gray-800 border-4 border-blue-500/40 rounded-xl shadow-lg hover:border-blue-400 transition-all duration-300">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent>
                  <div className="text-gray-200 text-center text-sm">{cert.description}</div>
                  {cert.link && (
                    <div className="mt-4 flex justify-center">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      >
                        View Certificate
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GitHub & Writing
            </h2>
            <Link
              href="https://github.com/Dev-Kavindu"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              <Github className="w-6 h-6 mr-2" />
              View My GitHub Profile
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{article.snippet}</p>
                  <Button size="sm" asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href={article.url}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <form
                action="https://formspree.io/f/mpwlpkpr"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">© {new Date().getFullYear()} Kavindu Chamod. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="https://github.com/Dev-Kavindu" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/chamod-ranaweera-7159a1235" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
