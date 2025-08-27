"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TypingAnimation } from "@/components/typing-animation"
import { AnimatedBackground } from "@/components/animated-background"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  Menu,
  X,
  Heart,
  Calendar,
  Briefcase,
  GraduationCap,
  Send,
  Loader,
  Code,
  Lightbulb,
  Target,
  Zap,
  Brain,
  ArrowRight,
  Sparkles,
  Cloud,
  Cpu,
  BarChart3,
  Search,
  Monitor,
} from "lucide-react"

function RevealSection({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "education",
        "skills",
        "projects",
        "experience",
        "volunteering",
        "publications",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `)

      // Open default email client
      window.location.href = `mailto:khannamridul20@gmail.com?subject=${subject}&body=${body}`

      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" })
        alert("Email client opened! Please send the email to complete your message.")
      }, 1000)
    } catch (error) {
      alert("Failed to open email client. Please try again or email me directly at khannamridul20@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResumeDownload = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement("a")
    link.href = "/Mridul_Khanna_Resume.pdf"
    link.download = "Mridul_Khanna_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "volunteering", label: "Impact" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ]

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Python",
        "SQL",
        "R",
        "Java",
        "Spring Boot",
        "REST APIs",
        "Git",
        "JUnit",
        "Postman",
        "OpenAPI/Swagger",
        "JSON",
        "XML",
        "OpenCV",
      ],
      gradient: "from-blue-500 to-cyan-500",
      description: "Core programming languages and development frameworks",
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        "Statistics",
        "Data Wrangling",
        "Machine Learning",
        "pandas",
        "NumPy",
        "scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Power BI",
        "Tableau",
        "Excel",
        "Google Analytics",
      ],
      gradient: "from-purple-500 to-pink-500",
      description: "Statistics, data wrangling, and machine learning with modern analytics tools",
    },
    {
      title: "Cloud & Systems",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["BigQuery", "AWS", "MySQL", "Oracle", "Jenkins", "Bitbucket Pipelines", "MuleSoft"],
      gradient: "from-emerald-500 to-teal-500",
      description: "Databases, cloud platforms, and system automation",
    },
  ]

  const projects = [
    {
      title: "AWS Image Annotation App",
      description:
        "Built a scalable, serverless web app on AWS (EC2, Lambda, RDS, S3) with Gemini AI for auto-captions and real-time thumbnail generation",
      tech: ["AWS", "Lambda", "S3", "RDS", "Gemini AI", "Flask"],
      gradient: "from-orange-500 to-red-500",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: "Credit Risk Modeling",
      description:
        "Ensemble XGBoost, Decision Trees, and Random Forest model achieved 97.7% accuracy, 0.998 AUC-ROC, and 94.7% F1-score",
      tech: ["Python", "XGBoost", "scikit-learn", "Pandas"],
      gradient: "from-blue-500 to-cyan-500",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "AdSnap – LLM-Powered Ad Banner Generator",
      description:
        "Modular AI pipeline using GPT-3.5 and OpenCV to generate ad slogans, dynamic font placement, and CTA integration",
      tech: ["Python", "GPT-3.5", "OpenCV"],
      gradient: "from-purple-500 to-pink-500",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Premature Mortality Risk Analysis",
      description:
        "EDA and regression modeling on 3,000+ US counties to identify socioeconomic and healthcare predictors of premature mortality",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      gradient: "from-emerald-500 to-teal-500",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Real-Time Malware Detection",
      description:
        "Implemented and compared multiple ML classifiers to detect malicious executables; deployed highest-accuracy model in real-time",
      tech: ["Python", "scikit-learn"],
      gradient: "from-violet-500 to-purple-500",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "Autonomous Driving Car Simulation",
      description:
        "Built and trained a self-driving car simulation using Deep Learning, Computer Vision, and CNNs to navigate virtual tracks",
      tech: ["Python", "OpenCV", "TensorFlow", "CNN"],
      gradient: "from-indigo-500 to-blue-500",
      icon: <Cpu className="w-6 h-6" />,
    },
  ]

  const experiences = [
    {
      title: "Software Engineer",
      company: "Bank of America",
      location: "Gujarat, India",
      period: "Jun '22–Jun '24",
      description:
        "At Bank of America, I worked across the full development pipeline to build secure Net Banking features such as e-signatures, document exchange, and backend services used by over 39 million daily users. I developed scalable REST APIs with Spring Boot, optimized SQL pipelines, and improved platform reliability by raising unit test coverage by ~40% with JUnit. I also collaborated on debugging and integration with MuleSoft, ensuring data accuracy and smoother deployments that accelerated release cycles by ~30%. My contributions were recognized with five Bronze Awards for technical excellence and cross-team collaboration.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      achievements: ["39M+ Users", "30% Faster Deployments", "40% Fewer Defects"],
    },
    {
      title: "Business Analyst Intern",
      company: "Vah Vah Institute Pvt. Ltd.",
      location: "Bengaluru, India",
      period: "Nov '21–May '22",
      description:
        "As a Business Analyst Intern, I collaborated with sales and marketing teams to transform raw data into actionable insights. I designed and deployed interactive dashboards in Google Data Studio that gave leadership real-time visibility and improved decision-making. To streamline reporting, I built Python and BigQuery ETL pipelines that automated data workflows, cutting manual effort by 50%. These initiatives accelerated data-driven decisions and contributed to a 30% uplift in lead-to-sale conversions, strengthening alignment between sales and marketing.",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      achievements: ["30% Conversion Uplift", "50% Less Manual Reporting", "ETL Automation"],
    },
    {
      title: "Data Science & ML Teaching Assistant",
      company: "Coding Ninjas",
      location: "Remote (India)",
      period: "Feb '21–Apr '21",
      description:
        "As a Teaching Assistant, I mentored students on real-world machine learning projects and provided personalized guidance on Python and scikit-learn. I resolved over 700 queries, created hands-on tutorials, and consistently maintained a 4.9/5 satisfaction rating, helping students build confidence in applying ML to practical problems.",
      icon: <Users className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      achievements: ["700+ Queries Resolved", "4.9/5 Satisfaction", "Hands-on Tutorials"],
    },
    {
      title: "Customer Service Representative",
      company: "OTR",
      location: "Sydney, Australia",
      period: "Nov '24–Present",
      description:
        "Oversaw daily POS operations in a high-volume setting, processing 50+ transactions per hour. Improved efficiency through workflow optimization, delivered staff training, and upheld 95%+ satisfaction, showcasing skills in operations, process improvement, and customer engagement.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      achievements: ["50+ Transactions/Hour", "20% Faster Checkout", "95%+ Satisfaction"],
      isActive: true,
    },
  ]

  const volunteeringActivities = [
    {
      title: "Volunteer",
      organization: "Australian Red Cross",
      period: "Jul '25–Present",
      description:
        "Support isolated seniors through ongoing engagement and digital assistance, helping strengthen community connection and inclusion.",
      icon: <Heart className="w-8 h-8" />,
      color: "text-red-400",
      isActive: true,
    },
    {
      title: "Senior Buddy",
      organization: "Women in Engineering, University of Sydney",
      period: "Jul '25–Present",
      description: "Mentoring new students and promoting diversity in tech",
      icon: <Users className="w-8 h-8" />,
      color: "text-blue-400",
      isActive: true,
    },
    {
      title: "ESG Volunteer Champion",
      organization: "Bank of America",
      period: "2023",
      description:
        "Contributed to CSR initiatives supporting education for underprivileged children and was recognized as a top contributor with a $2000 grant donation to further these efforts.",
      icon: <Award className="w-8 h-8" />,
      color: "text-emerald-400",
      isActive: false,
    },
    {
      title: "Education Volunteer",
      organization: "Karuna NMO",
      period: "2021",
      description:
        "Mentored children by supporting their education, building good study practices, and fostering values that promote confidence and personal growth.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "text-purple-400",
      isActive: false,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden text-base">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MK
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group ${
                    activeSection === item.id ? "text-blue-400" : "text-slate-300"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                  )}
                </button>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-400" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="text-xl sm:text-2xl text-blue-400 mb-4 font-medium">
                {isLoaded && <TypingAnimation text="Hi, I'm Mridul — a developer-turned-data scientist." speed={50} />}
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                I transform business challenges into{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  data-driven, scalable solutions
                </span>{" "}
                through analytics, machine learning, and engineering.
              </h1>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/25 text-sm"
                  onClick={() => scrollToSection("projects")}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/20 hover:ring-emerald-400/40 text-sm"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 bg-transparent hover:bg-slate-800 transform hover:scale-105 transition-all duration-200 text-sm"
                    onClick={() => window.open("https://github.com/mridulkhanna2", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 bg-transparent hover:bg-slate-800 transform hover:scale-105 transition-all duration-200 text-sm"
                    onClick={() => window.open("https://www.linkedin.com/in/mridul-khanna29/", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-slate-900 p-2">
                    <img
                      src="/profile.jpg"
                      alt="Mridul Khanna"
                      className="w-full h-full rounded-full object-cover object-center"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-bounce shadow-lg shadow-emerald-400/50"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 relative overflow-hidden">
        {/* Subtle Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-slate-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle Floating Data Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-slate-400 rounded-full opacity-20 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-blue-300 to-slate-200 bg-clip-text text-transparent flex items-center justify-center gap-4">
                <Users className="w-10 h-10 text-blue-400" />
                Who I Am 🚀✨
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-slate-600 mx-auto"></div>
            </div>
          </RevealSection>

          <div className="space-y-16">
            {/* My Journey Section */}
            <RevealSection delay={200}>
              <div className="relative">
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-slate-600/10 to-blue-500/10 opacity-30 animate-gradient group-hover:opacity-40 transition-opacity duration-500"></div>

                  <CardContent className="relative z-10 p-6">
                    <div className="flex items-start gap-6">
                      {/* Enhanced Animated Icon Column */}
                      <div className="flex flex-col items-center space-y-4 flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                            <Code className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center animate-bounce">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                        </div>

                        <div className="relative w-1 h-20">
                          <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                          <div
                            className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 animate-bounce"
                            style={{ animationDuration: "2s" }}
                          ></div>
                        </div>

                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-float group-hover:rotate-12 transition-transform duration-300">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>

                        <div className="relative w-1 h-20">
                          <div className="w-full h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full animate-pulse delay-500"></div>
                        </div>

                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse-glow delay-1000 group-hover:scale-110 transition-transform duration-300">
                            <Brain className="w-8 h-8 text-white animate-pulse" />
                          </div>
                          <div className="absolute -top-2 -left-2 w-3 h-3 bg-cyan-300 rounded-full animate-ping"></div>
                          <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-200 rounded-full animate-ping delay-500"></div>
                        </div>
                      </div>

                      {/* Enhanced Content Column */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            My Journey
                          </h3>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-slate-400">Engineering → Data Science</span>
                          </div>
                        </div>

                        <div className="space-y-4 text-base text-slate-300 leading-relaxed">
                          <p className="group/text hover:text-white transition-colors duration-300">
                            I began my career as a backend engineer at Bank of America, architecting APIs that
                            seamlessly served over 39 million daily users. While optimizing performance and reliability,
                            I discovered my true passion: leveraging data to drive strategic decisions.
                          </p>

                          <p className="group/text hover:text-white transition-colors duration-300">
                            That realization led me to the University of Sydney's Computer Science post-graduate program
                            specialising in Data Science, where I now blend robust engineering practices with advanced
                            analytics to build high-impact solutions that accelerate business growth.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6">
                          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group/stat">
                            <span className="text-blue-400 font-semibold">39M+ Users</span>
                            <div className="w-0 h-0.5 bg-blue-400 group-hover/stat:w-full transition-all duration-300 mt-1"></div>
                          </div>
                          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group/stat">
                            <span className="text-purple-400 font-semibold">Backend → Data Science</span>
                            <div className="w-0 h-0.5 bg-purple-400 group-hover/stat:w-full transition-all duration-300 mt-1"></div>
                          </div>
                          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-2 rounded-full border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group/stat">
                            <span className="text-emerald-400 font-semibold">University of Sydney</span>
                            <div className="w-0 h-0.5 bg-emerald-400 group-hover/stat:w-full transition-all duration-300 mt-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealSection>

            {/* What Drives Me Section - Reduced Colors */}
            <RevealSection delay={400}>
              <div className="relative">
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden group">
                  {/* Much more subtle background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700/5 via-slate-600/5 to-slate-700/5 opacity-50 animate-gradient group-hover:opacity-60 transition-opacity duration-500"></div>

                  <CardContent className="relative z-10 p-6">
                    <div className="flex items-start gap-6">
                      {/* Simplified Icon Column - Less Colors */}
                      <div className="flex flex-col items-center space-y-4 flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                            <Heart className="w-8 h-8 text-white animate-pulse" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-bounce">
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                        </div>

                        <div className="relative w-1 h-16">
                          <div className="w-full h-full bg-gradient-to-b from-blue-500 to-slate-500 rounded-full animate-pulse"></div>
                        </div>

                        <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full flex items-center justify-center animate-float group-hover:rotate-45 transition-transform duration-300">
                          <Target className="w-6 h-6 text-white" />
                        </div>

                        <div className="relative w-1 h-16">
                          <div className="w-full h-full bg-gradient-to-b from-slate-500 to-cyan-500 rounded-full animate-pulse delay-500"></div>
                        </div>

                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse-glow delay-1000 group-hover:scale-110 transition-transform duration-300">
                            <Lightbulb className="w-8 h-8 text-white animate-bounce" />
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Content Column */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            What Drives Me
                          </h3>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <div className="text-lg animate-bounce">🤔</div>
                            <span className="text-xs text-slate-400">Curiosity Driven</span>
                          </div>
                        </div>

                        <div className="space-y-4 text-base text-slate-300 leading-relaxed">
                          <p className="group/text hover:text-white transition-colors duration-300">
                            I'm fueled by the challenge of turning{" "}
                            <span className="text-blue-400 font-semibold underline decoration-blue-400/30 hover:decoration-blue-400 transition-all duration-300">
                              complex datasets into clear, actionable intelligence
                            </span>
                            —whether refining a{" "}
                            <span className="text-cyan-400 font-semibold underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-all duration-300">
                              credit-risk model to industry-leading accuracy
                            </span>{" "}
                            or designing{" "}
                            <span className="text-slate-300 font-semibold underline decoration-slate-400/30 hover:decoration-slate-400 transition-all duration-300">
                              executive dashboards that unlock new revenue opportunities
                            </span>
                            .
                          </p>

                          <p className="group/text hover:text-white transition-colors duration-300">
                            At my core, a{" "}
                            <span className="text-blue-400 font-semibold underline decoration-blue-400/30 hover:decoration-blue-400 transition-all duration-300">
                              relentless curiosity guides me
                            </span>
                            : I constantly ask{" "}
                            <span className="text-cyan-400 font-semibold underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-all duration-300">
                              "Why?" and "What if?"
                            </span>{" "}
                            to uncover hidden insights and translate them into{" "}
                            <span className="text-slate-300 font-semibold underline decoration-slate-400/30 hover:decoration-slate-400 transition-all duration-300">
                              meaningful outcomes for stakeholders
                            </span>
                            .
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6">
                          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group/stat">
                            <span className="text-blue-400 font-semibold">Industry-Leading Accuracy</span>
                            <div className="w-0 h-0.5 bg-blue-400 group-hover/stat:w-full transition-all duration-300 mt-1"></div>
                          </div>
                          <div className="bg-gradient-to-r from-cyan-500/20 to-slate-500/20 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group/stat">
                            <span className="text-cyan-400 font-semibold">Revenue Optimization</span>
                            <div className="w-0 h-0.5 bg-cyan-400 group-hover/stat:w-full transition-all duration-300 mt-1"></div>
                          </div>
                          <div className="bg-gradient-to-r from-slate-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-slate-500/30 hover:border-slate-400/50 transition-all duration-300 hover:scale-105 group/stat">
                            <span className="text-slate-300 font-semibold">Curiosity-Driven</span>
                            <div className="w-0 h-0.5 bg-slate-400 group-hover/stat:w-full transition-all duration-300 mt-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealSection>
          </div>

          {/* Enhanced bottom inspirational quote - Updated */}
          <RevealSection delay={600}>
            <div className="mt-20 text-center relative">
              <div className="absolute -top-8 left-1/4 text-6xl text-slate-600/10 animate-float">"</div>
              <div className="absolute -bottom-8 right-1/4 text-6xl text-slate-600/10 animate-float rotate-180">"</div>

              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-700/20 to-slate-800/20 rounded-2xl blur-xl animate-pulse"></div>
                <div className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] group">
                  <blockquote className="text-xl font-light text-slate-300 italic leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                    "I transform complex data patterns into strategic business value."
                  </blockquote>
                  <div className="flex justify-center">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse group-hover:w-24 transition-all duration-500"></div>
                  </div>

                  {/* Subtle moving elements */}
                  <div className="absolute top-4 right-4 w-1 h-1 bg-slate-500 rounded-full animate-ping opacity-30"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-slate-500 rounded-full animate-ping opacity-30 delay-1000"></div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Academic Foundation</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Building expertise through rigorous academic training and continuous learning
              </p>
            </div>
          </RevealSection>

          <div className="space-y-8">
            <RevealSection delay={200}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 group overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors duration-300">
                          Master's in Computer Science (Data Science & AI)
                        </CardTitle>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full animate-pulse">
                          <Loader className="w-4 h-4 animate-spin" />
                          <span className="text-sm font-semibold text-white">In Progress</span>
                        </div>
                      </div>
                      <CardDescription className="text-base font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        University of Sydney
                      </CardDescription>
                      <div className="flex items-center gap-1 text-sm text-slate-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        June 2024 – June 2026
                      </div>
                      <p className="text-slate-300 text-sm">Sydney, Australia</p>

                      {/* Progress indicator */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 bg-slate-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-1/3 animate-pulse"></div>
                        </div>
                        <span className="text-xs text-slate-400">Year 1 of 2</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </RevealSection>

            <RevealSection delay={400}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10 group overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-white group-hover:text-emerald-300 transition-colors duration-300">
                        B.Tech in Computer Science & Engineering
                      </CardTitle>
                      <CardDescription className="text-base font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        Vellore Institute of Technology
                      </CardDescription>
                      <div className="flex items-center gap-1 text-sm text-slate-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        July 2018 – July 2022
                      </div>
                      <p className="text-slate-300 text-sm">Vellore, India</p>
                      <div className="mt-2 flex items-center gap-4">
                        <Badge
                          variant="secondary"
                          className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 group-hover:bg-emerald-500/30 transition-colors duration-300"
                        >
                          CGPA: 8.83/10
                        </Badge>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-slate-400">Graduated with Distinction</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technical Expertise</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Full-stack development skills combined with advanced data science and machine learning capabilities
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <RevealSection key={category.title} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group overflow-hidden h-full">
                  <div className={`h-1 bg-gradient-to-r ${category.gradient}`}></div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`bg-gradient-to-r ${category.gradient} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {category.icon}
                      </div>
                      <CardTitle className="text-base text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-200 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200 cursor-default transform hover:scale-105 text-xs"
                          style={{
                            animationDelay: `${skillIndex * 50}ms`,
                            transitionDelay: `${skillIndex * 25}ms`,
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Real-world applications demonstrating technical expertise and business impact
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <RevealSection key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div
                        className={`bg-gradient-to-r ${project.gradient} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {project.icon}
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors duration-200 flex-1">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-slate-300 mb-4 group-hover:text-white transition-colors duration-300 flex-1 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-300 transition-all duration-200"
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Professional Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Delivering measurable impact across diverse industries and technologies
              </p>
            </div>
          </RevealSection>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <RevealSection key={index} delay={index * 200}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 group overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${exp.color}`}></div>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`bg-gradient-to-r ${exp.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors duration-300">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-base font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm text-slate-400 mb-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <p className="text-sm text-slate-400">{exp.location}</p>
                          </div>
                        </div>

                        {/* Achievement badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <Badge
                              key={achievement}
                              variant="secondary"
                              className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-xs group-hover:bg-blue-500/20 transition-all duration-300"
                              style={{ transitionDelay: `${achIndex * 100}ms` }}
                            >
                              {achievement}
                            </Badge>
                          ))}
                          {exp.isActive && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full border border-green-500/30">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-green-300 font-semibold">Active</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Social Impact & Leadership</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                I love giving back to society in whatever way I can - through mentorship, community service, and social
                initiatives
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteeringActivities.map((activity, index) => (
              <RevealSection key={index} delay={index * 150}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 text-center h-full group">
                  <CardContent className="pt-6">
                    <div
                      className={`flex justify-center mb-3 ${activity.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {activity.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {activity.organization}
                    </p>
                    <p className="text-xs text-slate-400 mb-2">{activity.period}</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                      {activity.description}
                    </p>

                    {/* Impact indicator */}
                    {activity.isActive && (
                      <div className="mt-3 inline-flex items-center gap-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-2 py-1 rounded-full border border-green-500/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-300 font-semibold">Active</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Publications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Research contributions exploring emerging technologies and data analytics applications
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 group">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        📘 Exploring the IoT Data Analytics Landscape
                      </h3>
                      <p className="text-slate-300 mb-4 group-hover:text-white transition-colors duration-300 text-sm">
                        Published in International Journal for Research in Applied Science and Engineering Technology
                        (IJRASET), 2023
                      </p>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="outline"
                          className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 transform hover:scale-105 transition-all duration-200 text-sm"
                          onClick={() => window.open("https://doi.org/10.22214/ijraset.2023.55912", "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read DOI
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Collaborate?</h2>
              <p className="text-xl text-slate-300 mb-4 font-semibold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Got a data challenge? Let's turn your numbers into insights.
                </span>
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
            </div>
          </RevealSection>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <RevealSection delay={200}>
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 mx-auto mb-8 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-slate-900 p-1">
                    <img
                      src="/profile.jpg"
                      alt="Mridul Khanna"
                      className="w-full h-full rounded-full object-cover object-center"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-8">Get in Touch</h3>
                <div className="space-y-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105 group">
                    <Mail className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="text-sm">khannamridul20@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105 group">
                    <Github className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="text-sm">github.com/mridulkhanna2</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105 group">
                    <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="text-sm">linkedin.com/in/mridul-khanna29</span>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={400}>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Discuss Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                        <Input
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                      <Textarea
                        required
                        placeholder="I'd love to hear about opportunities, projects, or ideas and explore how I can contribute."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 text-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium py-3 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/25 text-sm"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Opening Email..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">© 2025 Mridul Khanna — Transforming data into actionable insights.</p>
        </div>
      </footer>
    </div>
  )
}
