"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Home,
  Briefcase,
  FileSpreadsheet,
  Send,
  Code,
  BookOpen,
  GraduationCap,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const certificationsRef = useRef(null)
  const educationRef = useRef(null)
  const trainingRef = useRef(null)
  const cvRef = useRef(null)
  const blogRef = useRef(null)
  const contactRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: false })
  const isAboutInView = useInView(aboutRef, { once: false })
  const isSkillsInView = useInView(skillsRef, { once: false })
  const isProjectsInView = useInView(projectsRef, { once: false })
  const isCertificationsInView = useInView(certificationsRef, { once: false })
  const isEducationInView = useInView(educationRef, { once: false })
  const isTrainingInView = useInView(trainingRef, { once: false })
  const isCvInView = useInView(cvRef, { once: false })
  const isBlogInView = useInView(blogRef, { once: false })
  const isContactInView = useInView(contactRef, { once: false })

  const { scrollYProgress } = useScroll()

  const typewriterTexts = ["Developer.", "Builder.", "Innovator."]

  useEffect(() => {
    const text = typewriterTexts[loopNum % typewriterTexts.length]

    const handleTyping = () => {
      setTypewriterText(text.substring(0, isDeleting ? typewriterText.length - 1 : typewriterText.length + 1))

      setTypingSpeed(isDeleting ? 80 : 150)

      if (!isDeleting && typewriterText === text) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && typewriterText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Pause before starting to type again
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [typewriterText, isDeleting, loopNum, typewriterTexts, typingSpeed])

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", ref: heroRef, icon: <Home className="h-4 w-4" /> },
    { name: "About", ref: aboutRef, icon: <FileText className="h-4 w-4" /> },
    { name: "Skills", ref: skillsRef, icon: <Code className="h-4 w-4" /> },
    { name: "Projects", ref: projectsRef, icon: <Briefcase className="h-4 w-4" /> },
    { name: "Certifications", ref: certificationsRef, icon: <FileSpreadsheet className="h-4 w-4" /> },
    { name: "Education", ref: educationRef, icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Training", ref: trainingRef, icon: <BookOpen className="h-4 w-4" /> },
    { name: "CV", ref: cvRef, icon: <FileText className="h-4 w-4" /> },
    { name: "Blog", ref: blogRef, icon: <FileText className="h-4 w-4" /> },
    { name: "Contact", ref: contactRef, icon: <Send className="h-4 w-4" /> },
  ]

  const skills = [
    {
      category: "Languages",
      items: ["Java", "C++", "JavaScript"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "Ubuntu"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
        </svg>
      ),
    },
    {
      category: "Expertise",
      items: ["Data Structures", "Responsive Design", "Problem Solving", "JavaScript Logic"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
  ]

  const projects = [
    {
      title: "Music Player (C++)",
      description:
        "Console-based music player using OOP & doubly linked list. Features include dynamic playlist creation, song navigation, looping, and real-time playback updates.",
      tech: ["C++"],
      github: "https://github.com/aditya-nagar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8v4l2 2" />
        </svg>
      ),
    },
    {
      title: "Amazon Clone Website",
      description:
        "Responsive e-commerce layout with product grid, mobile optimization, navigation bar, and Font Awesome icons.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/aditya-nagar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        </svg>
      ),
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "JavaScript-based 2-player game with turn logic, win detection, and restart feature. Includes responsive layout and minimal UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/aditya-nagar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <path d="M2 12h20" />
          <path d="M10 2v20" />
          <path d="m8 16 4-4" />
          <path d="m16 8-4 4" />
          <path d="m8 8 4 4" />
          <path d="m16 16-4-4" />
        </svg>
      ),
    },
  ]

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Jul–Oct 2024",
      icon: "🏆",
    },
    {
      title: "Introduction to Cybersecurity Essentials",
      issuer: "Coursera",
      date: "May 2024",
      icon: "🔒",
    },
    {
      title: "CompTIA Linux+ XKO-005",
      issuer: "Cybrary",
      date: "Apr 2024",
      icon: "🐧",
    },
    {
      title: "The Bits and Bytes of Networking",
      issuer: "Google",
      date: "Nov 2023",
      icon: "🌐",
    },
    {
      title: "Become a Data Scientist",
      issuer: "LinkedIn Learning",
      date: "Feb 2023",
      icon: "📊",
    },
  ]

  const blogPosts = [
    {
      title: "How I Built a Music Player in C++",
      excerpt:
        "Exploring the challenges and learning opportunities in building a console-based music player application using C++ and object-oriented programming principles.",
      date: "June 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Responsive Layouts with Pure CSS",
      excerpt:
        "A deep dive into modern CSS techniques that can help you create stunning responsive layouts without relying heavily on JavaScript frameworks or libraries.",
      date: "May 22, 2024",
      readTime: "7 min read",
    },
    {
      title: "What DSA Taught Me (GFG Edition)",
      excerpt:
        "My journey through learning data structures and algorithms with GeeksforGeeks, and how this knowledge helped me tackle complex problems in real-world projects.",
      date: "April 10, 2024",
      readTime: "6 min read",
    },
  ]

  const education = [
    {
      institution: "Lovely Professional University, Punjab",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022–Present",
      grade: "CGPA: 7.3",
    },
    {
      institution: "Central India Academy, Dewas",
      degree: "12th Standard",
      period: "2020–2021",
      grade: "81%",
    },
    {
      institution: "Central India Academy, Dewas",
      degree: "10th Standard",
      period: "2018–2019",
      grade: "78%",
    },
  ]

  const training = [
    {
      organization: "GeeksforGeeks",
      title: "Summer Bootcamp",
      period: "May–Nov 2024",
      description:
        "Mastered DSA, Interview Prep, DBMS, OS, CN, SQL with self-paced modules and hands-on problem solving",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-[#0F0F0F]/80 border-b border-[#A239CA]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"
          >
            AN
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.ref)}
                className="text-sm font-medium transition-colors hover:text-[#A239CA] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#A239CA] after:transition-all"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#A239CA]"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0F0F0F]/95 pt-20 px-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.ref)}
                className="text-lg font-medium py-3 border-b border-[#A239CA]/20 text-left flex justify-between items-center"
              >
                <span className="flex items-center gap-3">
                  {link.icon}
                  {link.name}
                </span>
                <ChevronRight className="h-5 w-5 text-[#A239CA]" />
              </button>
            ))}
          </nav>
        </div>
      )}

      <main className="pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-50">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1E2A78]/20 rounded-full blur-[100px] animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#A239CA]/20 rounded-full blur-[100px] animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1E2A78] to-[#A239CA]">
                  Aditya Nagar
                </h1>
                <div className="text-2xl md:text-3xl font-medium text-white h-12 mb-6">
                  <span className="inline-block">{typewriterText}</span>
                  <span className="inline-block w-1 h-6 bg-[#A239CA] ml-1 animate-blink"></span>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mb-8">
                  Computer Science Graduate | Passionate Coder | Full Stack Learner
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#1E2A78] to-[#A239CA] hover:opacity-90 text-white border-none shadow-lg shadow-[#A239CA]/20"
                    onClick={() => window.open("https://drive.google.com/file/d/1i7xVfOkr8hLkgpBIpzUWLBcIJt80JwH8/view?usp=sharing", "_blank")}
                  >
                    <FileText className="mr-2 h-5 w-5" /> View My CV
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#A239CA] text-[#A239CA] hover:bg-[#A239CA]/10 shadow-lg shadow-[#A239CA]/10"
                    onClick={() => scrollToSection(contactRef)}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A78] to-[#A239CA] rounded-full opacity-20 blur-xl animate-pulse"></div>
                  <div className="relative z-10 w-full h-full rounded-full bg-[#0F0F0F] border-4 border-[#A239CA] flex items-center justify-center">
                    <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E2A78] to-[#A239CA]">
                      AN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#A239CA]"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 relative">
          <div className="absolute inse pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block z-[999]">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 "></span>
              </h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate developer who transforms ideas into elegant code. I build fast, responsive websites
                    and love solving real-world problems using DSA and modern tools.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#A239CA]/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#A239CA]" />
                      </div>
                      <div>
                        <p className="text-gray-300">Indore, Madhya Pradesh – 452001</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#A239CA]/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[#A239CA]" />
                      </div>
                      <div>
                        <p className="text-gray-300">adityanagar979@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#A239CA]/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#A239CA]" />
                      </div>
                      <div>
                        <p className="text-gray-300">9111173675</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-[#1E2A78]/20 to-[#A239CA]/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                    <div className="relative z-10 text-center p-4">
                      <div className="w-32 h-32 rounded-full bg-[#0F0F0F] mx-auto mb-4 flex items-center justify-center text-4xl font-bold border-4 border-[#A239CA]">
                        AN
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://github.com/aditya-nagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#0F0F0F] border border-[#A239CA]/50 flex items-center justify-center hover:bg-[#A239CA]/10"
                    >
                      <Github className="h-6 w-6 text-[#A239CA]" />
                    </a>
                    <a
                      href="https://linkedin.com/in/aditya-nagar-88a880241"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#0F0F0F] border border-[#A239CA]/50 flex items-center justify-center hover:bg-[#A239CA]/10"
                    >
                      <Linkedin className="h-6 w-6 text-[#A239CA]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 bg-[#0A2342] relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0F0F0F] to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                Technical Skills
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
                    <Card className="bg-[#0F0F0F] border-[#A239CA]/20 hover:border-[#A239CA]/50 transition-all hover:shadow-[0_0_15px_rgba(162,57,202,0.3)] h-full">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="h-12 w-12 rounded-full bg-[#A239CA]/10 flex items-center justify-center">
                            {skill.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) => (
                              <Badge
                                key={i}
                                className="bg-[#A239CA]/10 hover:bg-[#A239CA]/20 text-[#A239CA] border-none px-3 py-1"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342] via-[#0F0F0F] to-[#0F0F0F] pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                Projects
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
                    <Card className="bg-[#0F0F0F] border-[#A239CA]/20 hover:border-[#A239CA]/50 transition-all hover:shadow-[0_0_15px_rgba(162,57,202,0.3)] h-full overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="h-48 bg-gradient-to-br from-[#1E2A78]/10 to-[#A239CA]/10 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                          {project.icon}
                          <div className="absolute inset-0 bg-[#0F0F0F]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-12 w-12 rounded-full bg-[#A239CA]/20 flex items-center justify-center hover:bg-[#A239CA]/40 transition-colors mx-2"
                            >
                              <Github className="h-6 w-6 text-white" />
                            </a>
                            <a
                              href="#"
                              className="h-12 w-12 rounded-full bg-[#A239CA]/20 flex items-center justify-center hover:bg-[#A239CA]/40 transition-colors mx-2"
                            >
                              <ExternalLink className="h-6 w-6 text-white" />
                            </a>
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-[#A239CA] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 line-clamp-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <Badge key={i} className="bg-[#A239CA]/10 text-[#A239CA] border-none px-2 py-0.5 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="pt-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-[#A239CA] hover:text-[#A239CA]/80 transition-colors flex items-center gap-1"
                            >
                              GitHub <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section ref={certificationsRef} className="py-20 bg-[#0A2342] relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0F0F0F] to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                Certifications
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <div className="mt-12 relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#A239CA]/30 transform md:translate-x-px"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className={`md:mx-8 ${index % 2 === 0 ? "md:ml-8 md:mr-0" : "md:mr-8 md:ml-0"}`}>
                          <Card className="bg-[#0F0F0F] border-[#A239CA]/20 hover:border-[#A239CA]/50 transition-all hover:shadow-[0_0_15px_rgba(162,57,202,0.3)]">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="text-3xl">{cert.icon}</div>
                                <div>
                                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                                  <p className="text-[#A239CA]">{cert.issuer}</p>
                                  <p className="text-sm text-gray-400 mt-1">{cert.date}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-[#A239CA] transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#0A2342]"></div>
                      </div>
                      <div className="md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={educationRef} className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342] via-[#0F0F0F] to-[#0F0F0F] pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                Education
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <div className="mt-12 space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="transform hover:translate-x-2 transition-transform duration-300">
                    <Card className="bg-[#0F0F0F] border-[#A239CA]/20 hover:border-[#A239CA]/50 transition-all hover:shadow-[0_0_15px_rgba(162,57,202,0.3)]">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                            <p className="text-[#A239CA]">{edu.degree}</p>
                          </div>
                          <div className="flex flex-col items-start md:items-end">
                            <span className="text-sm text-gray-400">{edu.period}</span>
                            <span className="text-sm font-medium text-white">{edu.grade}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section ref={trainingRef} className="py-20 bg-[#0A2342] relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0F0F0F] to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                Summer Training
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <div className="mt-12 space-y-8">
                {training.map((train, index) => (
                  <div key={index} className="transform hover:translate-x-2 transition-transform duration-300">
                    <Card className="bg-[#0F0F0F] border-[#A239CA]/20 hover:border-[#A239CA]/50 transition-all hover:shadow-[0_0_15px_rgba(162,57,202,0.3)]">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {train.organization} - {train.title}
                            </h3>
                            <p className="text-gray-300 mt-2">{train.description}</p>
                          </div>
                          <div>
                            <span className="text-sm text-[#A239CA]">{train.period}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section ref={cvRef} className="py-20 relative">
          <div className="absolute  pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                My Resume
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <div className="mt-12">
                <div className="bg-[#0F0F0F] border border-[#A239CA]/20 rounded-lg p-8 max-w-md mx-auto">
                  <div className="mb-6">
                    <FileText className="h-16 w-16 text-[#A239CA] mx-auto" />
                  </div>
                  <p className="text-white mb-8">
                    Download my resume to learn more about my education, skills, and experience.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#A239CA] to-[#9C27B0] opacity-90 text-white border-none shadow-lg shadow-[#A239CA]/20 w-full"
                    onClick={() => window.open("https://drive.google.com/file/d/1i7xVfOkr8hLkgpBIpzUWLBcIJt80JwH8/view?usp=sharing", "_blank")}
                  >
                    <FileText className="mr-2 h-5 w-5" /> Open CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section ref={blogRef} className="py-20 bg-[#0A2342] relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0F0F0F] to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                Blog
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
                    <Card className="bg-[#0F0F0F] border-[#A239CA]/20 hover:border-[#A239CA]/50 transition-all hover:shadow-[0_0_15px_rgba(162,57,202,0.3)] h-full overflow-hidden">
                      <CardContent className="p-0">
                        <div className="h-40 bg-gradient-to-br from-[#1E2A78]/10 to-[#A239CA]/10 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#A239CA]"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <line x1="10" y1="9" x2="8" y2="9" />
                          </svg>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white hover:text-[#A239CA] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
                          <a
                            href="#"
                            className="text-sm font-medium text-[#A239CA] hover:text-[#A239CA]/80 transition-colors flex items-center gap-1"
                          >
                            Read More <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-20 relative">
          <div className="absolute pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-white relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#1E2A78] to-[#A239CA]"></span>
              </h2>
              <p className="text-gray-300 mt-4 text-lg">Let's build something together or just say hello 👋</p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#A239CA]/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[#A239CA]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Email</p>
                        <p className="text-gray-300">adityanagar979@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#A239CA]/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#A239CA]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Phone</p>
                        <p className="text-gray-300">9111173675</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#A239CA]/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#A239CA]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Location</p>
                        <p className="text-gray-300">Indore, Madhya Pradesh – 452001</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://github.com/aditya-nagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#0F0F0F] border border-[#A239CA]/50 flex items-center justify-center hover:bg-[#A239CA]/10"
                    >
                      <Github className="h-6 w-6 text-[#A239CA]" />
                    </a>
                    <a
                      href="https://linkedin.com/in/aditya-nagar-88a880241"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#0F0F0F] border border-[#A239CA]/50 flex items-center justify-center hover:bg-[#A239CA]/10"
                    >
                      <Linkedin className="h-6 w-6 text-[#A239CA]" />
                    </a>
                  </div>
                </div>
                <div>
                  <Card className="bg-[#0F0F0F] border-[#A239CA]/20 hover:border-[#A239CA]/50 transition-all hover:shadow-[0_0_15px_rgba(162,57,202,0.3)]">
                    <CardContent className="p-6">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-white">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="bg-[#0A2342] border-[#A239CA]/20 focus:border-[#A239CA] text-white focus:ring-[#A239CA]/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-white">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="bg-[#0A2342] border-[#A239CA]/20 focus:border-[#A239CA] text-white focus:ring-[#A239CA]/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-white">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Your message"
                            className="min-h-[120px] bg-[#0A2342] border-[#A239CA]/20 focus:border-[#A239CA] text-white focus:ring-[#A239CA]/20"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#1E2A78] to-[#A239CA] hover:opacity-90 text-white shadow-lg shadow-[#A239CA]/20"
                        >
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-[#A239CA]/20 bg-[#0F0F0F]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2025 Aditya Nagar</p>
            <div className="flex gap-6">
              <a
                href="#"
                onClick={() => scrollToSection(heroRef)}
                className="text-gray-400 hover:text-[#A239CA] transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => scrollToSection(projectsRef)}
                className="text-gray-400 hover:text-[#A239CA] transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#"
                onClick={() => scrollToSection(cvRef)}
                className="text-gray-400 hover:text-[#A239CA] transition-colors text-sm"
              >
                Resume
              </a>
              <a
                href="#"
                onClick={() => scrollToSection(contactRef)}
                className="text-gray-400 hover:text-[#A239CA] transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
