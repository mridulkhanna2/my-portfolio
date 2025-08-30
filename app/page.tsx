"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TypingAnimation } from "@/components/typing-animation"
import { EnhancedBackground } from "@/components/enhanced-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { MotionWrapper } from "@/components/motion-wrapper"
import { AnimatedBadge } from "@/components/animated-badge"
import { GlowingIcon } from "@/components/glowing-icon"
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
  Loader,
  Code,
  Sparkles,
  Cloud,
  BarChart3,
  Search,
  Lightbulb,
  Rocket,
  Copy,
  Check,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [copied, setCopied] = useState(false)

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

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/Mridul_Khanna_Resume.pdf"
    link.download = "Mridul_Khanna_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("khannamridul20@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
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
      title: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      coreLanguages: ["Python", "R", "Java", "SQL"],
      tools: ["Git", "JUnit", "Postman"],
      frameworks: ["Spring Boot", "OpenCV", "REST APIs"],
      description: "Core languages, tools, and frameworks for full-stack development",
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      analytics: ["Statistics", "Data Wrangling", "Machine Learning"],
      libraries: ["pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
      visualization: ["Power BI", "Tableau", "Excel"],
      description: "End-to-end data science pipeline from analysis to visualization",
    },
    {
      title: "Cloud & Systems",
      icon: <Cloud className="w-6 h-6" />,
      cloud: ["AWS", "GCP BigQuery"],
      databases: ["MySQL", "Oracle"],
      automation: ["Jenkins", "Bitbucket Pipelines", "MuleSoft"],
      description: "Scalable cloud infrastructure and system automation",
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
      achievements: [
        { label: "39M+ Users", highlight: true },
        { label: "30% Faster Deployments", highlight: true },
        { label: "40% Fewer Defects", highlight: true },
      ],
    },
    {
      title: "Business Analyst Intern",
      company: "Vah Vah Institute Pvt. Ltd.",
      location: "Bengaluru, India",
      period: "Nov '21–May '22",
      description:
        "As a Business Analyst Intern, I collaborated with sales and marketing teams to transform raw data into actionable insights. I designed and deployed interactive dashboards in Google Data Studio that gave leadership real-time visibility and improved decision-making. To streamline reporting, I built Python and BigQuery ETL pipelines that automated data workflows, cutting manual effort by 50%. These initiatives accelerated data-driven decisions and contributed to a 30% uplift in lead-to-sale conversions, strengthening alignment between sales and marketing.",
      icon: <Award className="w-6 h-6" />,
      achievements: [
        { label: "30% Conversion Uplift", highlight: true },
        { label: "50% Less Manual Reporting", highlight: true },
        { label: "ETL Automation", highlight: false },
      ],
    },
    {
      title: "Data Science & ML Teaching Assistant",
      company: "Coding Ninjas",
      location: "Remote (India)",
      period: "Feb '21–Apr '21",
      description:
        "As a Teaching Assistant, I mentored students on real-world machine learning projects and provided personalized guidance on Python and scikit-learn. I resolved over 700 queries, created hands-on tutorials, and consistently maintained a 4.9/5 satisfaction rating, helping students build confidence in applying ML to practical problems.",
      icon: <Users className="w-6 h-6" />,
      achievements: [
        { label: "700+ Queries Resolved", highlight: true },
        { label: "4.9/5 Satisfaction", highlight: true },
        { label: "Hands-on Tutorials", highlight: false },
      ],
    },
    {
      title: "Customer Service Representative",
      company: "OTR",
      location: "Sydney, Australia",
      period: "Nov '24–Present",
      description:
        "Oversaw daily POS operations in a high-volume setting, processing 50+ transactions per hour. Improved efficiency through workflow optimization, delivered staff training, and upheld 95%+ satisfaction, showcasing skills in operations, process improvement, and customer engagement.",
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        { label: "50+ Transactions/Hour", highlight: true },
        { label: "20% Faster Checkout", highlight: true },
        { label: "95%+ Satisfaction", highlight: true },
      ],
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

  const allProjects = [
    {
      title: "Credit Risk Modeling",
      problem: "Predicting borrower default risk for large-scale credit portfolios",
      solution: "Built ensemble models (XGBoost, Decision Trees, Random Forest) to evaluate creditworthiness at scale",
      impact:
        "Achieved 97.7% accuracy with XGBoost, improving recall for at-risk borrowers by 15% and reducing misclassification of potential defaults",
      tech: ["Python", "XGBoost", "scikit-learn", "Pandas"],
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AdSnap – AI Ad Banner Generator",
      problem: "Ad banner creation is slow, manual, and expensive for small businesses",
      solution:
        "Designed modular AI pipeline with GPT-3.5 for slogans, OpenCV for layout, and automated color/contrast rendering for production-ready banners",
      impact: "Cut banner creation time by 90%, enabling scalable, low-cost digital marketing",
      tech: ["Python", "GPT-3.5", "OpenCV"],
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Premature Mortality Prediction (US Counties)",
      problem: "Premature mortality varies across 3,000+ US counties, but its drivers are poorly understood",
      solution:
        "Built regression models (Linear, Decision Tree) on health, socioeconomic, and behavioral datasets to identify mortality predictors",
      impact:
        "Revealed top 5 factors (smoking, obesity, inactivity, income, healthcare access), providing evidence for health policy interventions",
      tech: ["R", "EDA", "Regression", "Decision Trees", "Data Visualization"],
      icon: <Search className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "AWS Scalable Image Captioning App",
      problem: "Scaling AI captioning systems to handle heavy traffic while ensuring reliability and low latency",
      solution:
        "Deployed a serverless app using AWS (EC2, Lambda, S3, RDS) with Gemini AI for real-time auto-captioning, supported by secure architecture (IAM, subnets, Bastion)",
      impact: "Reduced annotation time by 50%, validated through high-load stress testing",
      tech: ["AWS", "Lambda", "S3", "RDS", "EC2", "Flask", "Gemini AI"],
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Real-Time Malware Detection",
      problem: "Malicious executables must be detected instantly with minimal false positives to secure user systems",
      solution:
        "Implemented multiple ML classifiers (Random Forest, XGBoost, Logistic Regression) and optimized features for real-time prediction",
      impact:
        "Achieved 94% detection accuracy with 20% fewer false positives, enabling safer real-time threat response",
      tech: ["Python", "scikit-learn", "Pandas"],
      icon: <Award className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Autonomous Driving Car Simulation",
      problem: "Training self-driving algorithms in real-world conditions is expensive and unsafe",
      solution:
        "Built a CNN-based car simulation with deep learning and computer vision, training models to navigate virtual driving environments",
      impact:
        "Successfully simulated lane detection and navigation in complex tracks, reducing reliance on costly real-world testing",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-blue-500 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-x-hidden text-base transition-colors duration-300">
      <EnhancedBackground />

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300"
        style={{
          transform: isLoaded ? "translateY(0)" : "translateY(-100px)",
          opacity: isLoaded ? 1 : 0,
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="flex items-center gap-4"
              style={{
                transform: isLoaded ? "scale(1)" : "scale(0)",
                transition: "all 0.5s ease-out 0.2s",
              }}
            >
              <div className="font-bold text-xl bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
                MK
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-teal-600 dark:hover:text-teal-400 relative group ${
                    activeSection === item.id
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
                    opacity: isLoaded ? 1 : 0,
                    transition: `all 0.4s ease-out ${0.1 * index + 0.3}s`,
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-violet-600 transition-all duration-300 group-hover:w-full"></span>
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600 to-violet-600 animate-pulse"></span>
                  )}
                </button>
              ))}
              <div
                style={{
                  transform: isLoaded ? "scale(1)" : "scale(0)",
                  transition: "all 0.4s ease-out 0.8s",
                }}
              >
                <ThemeToggle />
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button className="text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div
              className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
              style={{
                height: isMenuOpen ? "auto" : "0",
                opacity: isMenuOpen ? 1 : 0,
                transition: "all 0.3s ease-out",
              }}
            >
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                    activeSection === item.id
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                  style={{
                    transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease-out ${0.1 * index}s`,
                  }}
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div
                className="text-xl sm:text-2xl text-teal-600 dark:text-teal-400 mb-4 font-medium"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out 0.2s",
                }}
              >
                {isLoaded && <TypingAnimation text="Hi, I'm Mridul" speed={80} />}
              </div>

              <h1
                className="text-3xl sm:text-5xl font-bold leading-tight"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s ease-out 0.4s",
                }}
              >
                I turn business challenges into{" "}
                <span className="bg-gradient-to-r from-teal-600 via-violet-600 to-blue-600 dark:from-teal-400 dark:via-violet-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  data-driven, scalable solutions
                </span>{" "}
                that create measurable business impact.
              </h1>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease-out 0.8s",
                }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 text-base transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  onClick={() => scrollToSection("projects")}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Projects
                </Button>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 dark:border-slate-600 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    onClick={() => window.open("https://github.com/mridulkhanna2", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 dark:border-slate-600 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    onClick={() => window.open("https://www.linkedin.com/in/mridul-khanna29/", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Profile Photo */}
            <div
              className="flex justify-center lg:justify-end"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateX(0) scale(1)" : "translateX(50px) scale(0.8)",
                transition: "all 0.8s ease-out 0.6s",
              }}
            >
              <div className="relative group animate-float">
                <div className="w-96 h-96 rounded-full bg-gradient-to-r from-teal-500 via-violet-500 to-blue-500 p-1 animate-pulse-glow group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 p-2 transition-colors duration-300">
                    <img
                      src="/profile.jpg"
                      alt="Mridul Khanna"
                      className="w-full h-full rounded-full object-cover object-center"
                      style={{ objectPosition: "center 30%" }}
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
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-teal-600 to-slate-800 dark:from-slate-200 dark:via-teal-300 dark:to-slate-200 bg-clip-text text-transparent flex items-center justify-center gap-4">
                <Users className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                Who I Am
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto animate-shimmer"></div>
            </div>
          </MotionWrapper>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* My Journey Section */}
            <MotionWrapper delay={0.2}>
              <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 overflow-hidden group h-full backdrop-blur-sm">
                <div className="h-1 bg-gradient-to-r from-teal-600 to-violet-600 animate-shimmer"></div>

                <CardContent className="relative z-10 p-8">
                  <div className="flex items-start gap-6">
                    <GlowingIcon glowColor="teal">
                      <Code className="w-8 h-8" />
                    </GlowingIcon>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300 relative">
                        My Journey
                        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-violet-600 group-hover:w-full transition-all duration-500"></div>
                      </h3>

                      <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                        <p>
                          I started my career as a Backend Engineer at Bank of America, building APIs powering{" "}
                          <AnimatedBadge delay={0.6} glow>
                            39M+ daily users
                          </AnimatedBadge>
                          . While scaling platforms for performance and reliability, I discovered my passion for
                          data-driven decision making.
                        </p>
                        <p>
                          Today, as a Master's in Computer Science (Data Science & AI) student at{" "}
                          <AnimatedBadge delay={0.8} glow>
                            University of Sydney
                          </AnimatedBadge>
                          , I combine engineering and analytics to design solutions that accelerate measurable business
                          growth.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        <AnimatedBadge
                          delay={1.0}
                          className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-700 dark:text-teal-300 border-teal-300/50 dark:border-teal-500/50 shadow-lg shadow-teal-500/20"
                        >
                          39M+ Daily Users
                        </AnimatedBadge>
                        <AnimatedBadge
                          delay={1.1}
                          className="bg-gradient-to-r from-blue-500/20 to-violet-500/20 text-blue-700 dark:text-blue-300 border-blue-300/50 dark:border-blue-500/50 shadow-lg shadow-blue-500/20"
                        >
                          University of Sydney
                        </AnimatedBadge>
                        <AnimatedBadge
                          delay={1.2}
                          className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-700 dark:text-violet-300 border-violet-300/50 dark:border-violet-500/50 shadow-lg shadow-violet-500/20"
                        >
                          Backend → Data Science
                        </AnimatedBadge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>

            {/* What Drives Me Section */}
            <MotionWrapper delay={0.4}>
              <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 overflow-hidden group h-full backdrop-blur-sm">
                <div className="h-1 bg-gradient-to-r from-teal-600 to-violet-600 animate-shimmer"></div>

                <CardContent className="relative z-10 p-8">
                  <div className="flex items-start gap-6">
                    <GlowingIcon glowColor="violet">
                      <Lightbulb className="w-8 h-8" />
                    </GlowingIcon>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300 relative">
                        What Drives Me
                        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-violet-600 group-hover:w-full transition-all duration-500"></div>
                      </h3>

                      <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                        <p>
                          I thrive on transforming complex datasets into actionable intelligence — whether refining a
                          credit-risk model to industry-leading accuracy, or designing executive dashboards that unlock{" "}
                          <AnimatedBadge delay={0.8} glow>
                            revenue opportunities
                          </AnimatedBadge>
                          .
                        </p>
                        <p>
                          My work is guided by relentless curiosity: I constantly ask "Why?" and "What if?" to uncover
                          hidden patterns and translate them into{" "}
                          <AnimatedBadge delay={1.0} glow>
                            meaningful outcomes
                          </AnimatedBadge>
                          .
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        <AnimatedBadge
                          delay={1.2}
                          className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-700 dark:text-teal-300 border-teal-300/50 dark:border-teal-500/50"
                        >
                          Smarter Decisions
                        </AnimatedBadge>
                        <AnimatedBadge
                          delay={1.3}
                          className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-700 dark:text-purple-300 border-purple-300/50 dark:border-purple-500/50"
                        >
                          Revenue Optimization
                        </AnimatedBadge>
                        <AnimatedBadge
                          delay={1.4}
                          className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-teal-700 dark:text-teal-300 border-teal-300/50 dark:border-teal-500/50"
                        >
                          Curiosity-Driven
                        </AnimatedBadge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                <GraduationCap className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto animate-shimmer"></div>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Building expertise in computer science, data science, and AI through rigorous academic training and
                continuous learning
              </p>
            </div>
          </MotionWrapper>

          <div className="space-y-8">
            <MotionWrapper delay={0.2}>
              <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 group overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-violet-600 to-purple-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start gap-4">
                    <GlowingIcon glowColor="violet">
                      <GraduationCap className="w-6 h-6" />
                    </GlowingIcon>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300">
                          Master's in Computer Science (Data Science & AI)
                        </CardTitle>
                        <AnimatedBadge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          <Loader className="w-3 h-3 animate-spin mr-1" />
                          In Progress
                        </AnimatedBadge>
                      </div>
                      <CardDescription className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                        University of Sydney
                      </CardDescription>
                      <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        June 2024 – June 2026
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Sydney, Australia</p>

                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full w-2/3 animate-pulse"></div>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Year 2 of 2</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 group overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-teal-600 to-emerald-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start gap-4">
                    <GlowingIcon glowColor="teal">
                      <GraduationCap className="w-6 h-6" />
                    </GlowingIcon>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                        B.Tech in Computer Science & Engineering
                      </CardTitle>
                      <CardDescription className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                        Vellore Institute of Technology
                      </CardDescription>
                      <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        July 2018 – July 2022
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Vellore, India</p>
                      <div className="mt-2">
                        <AnimatedBadge
                          delay={0.5}
                          className="bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-500/30"
                        >
                          CGPA: 8.83/10 with Distinction
                        </AnimatedBadge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto animate-shimmer"></div>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Full-stack engineering combined with advanced data science and machine learning expertise
              </p>
            </div>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <MotionWrapper key={category.title} delay={index * 0.1}>
                <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2 group overflow-hidden h-full">
                  <div className="h-1 bg-gradient-to-r from-teal-600 to-violet-600"></div>
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <GlowingIcon glowColor="teal">{category.icon}</GlowingIcon>
                      <CardTitle className="text-base text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="space-y-4">
                      {category.coreLanguages && (
                        <div>
                          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
                            Core Languages
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.coreLanguages.map((skill, skillIndex) => (
                              <AnimatedBadge
                                key={skill}
                                delay={skillIndex * 0.05}
                                className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-teal-300 text-xs border-0"
                              >
                                {skill}
                              </AnimatedBadge>
                            ))}
                          </div>
                        </div>
                      )}
                      {category.analytics && (
                        <div>
                          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
                            Analytics
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.analytics.map((skill, skillIndex) => (
                              <AnimatedBadge
                                key={skill}
                                delay={skillIndex * 0.05}
                                className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-teal-300 text-xs border-0"
                              >
                                {skill}
                              </AnimatedBadge>
                            ))}
                          </div>
                        </div>
                      )}
                      {category.cloud && (
                        <div>
                          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
                            Cloud
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.cloud.map((skill, skillIndex) => (
                              <AnimatedBadge
                                key={skill}
                                delay={skillIndex * 0.05}
                                className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-teal-300 text-xs border-0"
                              >
                                {skill}
                              </AnimatedBadge>
                            ))}
                          </div>
                        </div>
                      )}
                      {(category.tools || category.libraries || category.databases) && (
                        <div>
                          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
                            {category.tools ? "Tools" : category.libraries ? "Libraries" : "Databases"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(category.tools || category.libraries || category.databases || []).map(
                              (skill, skillIndex) => (
                                <AnimatedBadge
                                  key={skill}
                                  delay={skillIndex * 0.05}
                                  className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:text-teal-700 dark:hover:text-teal-300 text-xs border-0"
                                >
                                  {skill}
                                </AnimatedBadge>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto animate-shimmer"></div>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Real-world applications demonstrating technical expertise and measurable business impact.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 hover:-translate-y-4 group overflow-hidden h-full">
                  <div className="h-2 bg-gradient-to-r from-teal-600 to-violet-600 animate-shimmer"></div>
                  <CardHeader className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg`}
                      >
                        {project.icon}
                      </div>
                      <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 flex-1 leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col px-6 pb-6">
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-xs font-semibold text-red-500 dark:text-red-400 uppercase tracking-wide block mb-1">
                          PROBLEM
                        </span>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wide block mb-1">
                          SOLUTION
                        </span>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-wide block mb-1">
                          IMPACT
                        </span>
                        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300 leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <AnimatedBadge
                          key={tech}
                          delay={techIndex * 0.05}
                          variant="outline"
                          className="text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400"
                        >
                          {tech}
                        </AnimatedBadge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Professional Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto animate-shimmer"></div>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Delivering measurable impact across diverse industries and technologies
              </p>
            </div>
          </MotionWrapper>

          <div className="relative">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <MotionWrapper key={index} delay={index * 0.2}>
                  <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 group overflow-hidden relative">
                    <div className="h-1 bg-gradient-to-r from-teal-600 to-violet-600"></div>
                    <CardHeader className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <GlowingIcon
                            glowColor={
                              index % 4 === 0
                                ? "teal"
                                : index % 4 === 1
                                  ? "violet"
                                  : index % 4 === 2
                                    ? "blue"
                                    : "emerald"
                            }
                          >
                            {exp.icon}
                          </GlowingIcon>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                                {exp.title}
                              </CardTitle>
                              <CardDescription className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                                {exp.company}
                              </CardDescription>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mb-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{exp.location}</p>
                            </div>
                          </div>

                          {/* Achievement badges */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.achievements.map((achievement, achIndex) => (
                              <AnimatedBadge
                                key={achievement.label}
                                delay={achIndex * 0.1}
                                className={`text-xs ${
                                  achievement.highlight
                                    ? "bg-gradient-to-r from-teal-500/20 to-violet-500/20 text-teal-700 dark:text-teal-300 border-teal-300/50 dark:border-teal-500/50 shadow-lg shadow-teal-500/20"
                                    : "bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600/50"
                                } group-hover:bg-teal-100 dark:group-hover:bg-teal-500/20 group-hover:text-teal-700 dark:group-hover:text-teal-300 group-hover:border-teal-200 dark:group-hover:border-teal-500/30 transition-all duration-300`}
                              >
                                {achievement.highlight ? (
                                  <span className="font-semibold">{achievement.label}</span>
                                ) : (
                                  achievement.label
                                )}
                              </AnimatedBadge>
                            ))}
                            {exp.isActive && (
                              <AnimatedBadge
                                delay={0.5}
                                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-300 border-green-500/30"
                              >
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                                Active
                              </AnimatedBadge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 text-sm">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Impact Beyond Work</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto animate-shimmer"></div>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                I love giving back to society in whatever way I can - through mentorship, community service, and social
                initiatives
              </p>
            </div>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteeringActivities.map((activity, index) => (
              <MotionWrapper key={index} delay={index * 0.15}>
                <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2 text-center h-full group">
                  <CardContent className="pt-6 p-6">
                    <div
                      className={`flex justify-center mb-3 ${activity.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {activity.icon}
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {activity.organization}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{activity.period}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                      {activity.description}
                    </p>

                    {activity.isActive && (
                      <div className="mt-3">
                        <AnimatedBadge
                          delay={0.3}
                          className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-300 border-green-500/30"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                          Active
                        </AnimatedBadge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section
        id="publications"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Publications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto animate-shimmer"></div>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                Research contributions exploring emerging technologies and data analytics applications
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 group">
                <CardContent className="pt-8 p-8">
                  <div className="flex items-start gap-6">
                    <GlowingIcon glowColor="blue">
                      <BookOpen className="w-8 h-8" />
                    </GlowingIcon>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                        📘 Exploring the IoT Data Analytics Landscape
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 text-sm">
                        Published in International Journal for Research in Applied Science and Engineering Technology
                        (IJRASET), 2023
                      </p>
                      <Button
                        variant="outline"
                        className="bg-transparent border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-200 text-sm hover:scale-105"
                        onClick={() => window.open("https://doi.org/10.22214/ijraset.2023.55912", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read DOI
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white flex items-center justify-center gap-4">
                Let's Connect
                <div className="animate-bounce">
                  <Rocket className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                </div>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto mb-8 animate-shimmer"></div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Open to{" "}
                <span className="text-teal-600 dark:text-teal-400 font-semibold">internships, part-time roles</span>,
                and data-driven project collaborations.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="text-center">
              {/* Enhanced Profile Image */}
              <div className="relative inline-block mb-8">
                <div
                  className="w-48 h-48 rounded-full bg-gradient-to-r from-teal-500 via-violet-500 to-blue-500 p-1 mx-auto group cursor-pointer hover:scale-110 transition-all duration-500 shadow-2xl shadow-teal-500/40"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(20, 184, 166, 0.3))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 40px rgba(20, 184, 166, 0.5))"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 30px rgba(20, 184, 166, 0.3))"
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 p-2 transition-colors duration-300">
                    <img
                      src="/profile.jpg"
                      alt="Mridul Khanna"
                      className="w-full h-full rounded-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: "center 30%" }}
                    />
                  </div>
                </div>
                {/* Floating elements around profile */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-bounce shadow-lg shadow-emerald-400/50"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                <div className="absolute top-4 -left-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
              </div>

              {/* Email Display with Copy Functionality */}
              <MotionWrapper delay={0.4}>
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-4 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 group max-w-lg mx-auto border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-300/50 dark:hover:border-teal-500/50 backdrop-blur-sm shadow-lg hover:shadow-xl">
                    <Mail className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-center flex-1">
                      <span className="font-semibold text-xl block">khannamridul20@gmail.com</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-500/20 transition-all duration-300 group/copy"
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover/copy:text-teal-600 dark:group-hover/copy:text-teal-400 transition-colors duration-300" />
                      )}
                    </button>
                  </div>
                </div>
              </MotionWrapper>

              {/* Enhanced CTA Buttons with Custom Colors */}
              <MotionWrapper delay={0.6}>
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
                  <a
                    href="https://www.linkedin.com/in/mridul-khanna29/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center text-white font-bold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 text-lg overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #0077B5, #00C6FF)",
                      boxShadow: "0 4px 15px rgba(0, 119, 181, 0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #00C6FF, #0077B5)"
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0, 119, 181, 0.6), 0 0 20px rgba(0, 198, 255, 0.3)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #0077B5, #00C6FF)"
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 119, 181, 0.4)"
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <Linkedin className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Connect on LinkedIn</span>
                  </a>

                  <a
                    href="mailto:khannamridul20@gmail.com?subject=Internship%20Opportunity&body=Hi%20Mridul,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20potential%20opportunities.%0D%0A%0D%0ABest%20regards"
                    className="group relative inline-flex items-center text-white font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 text-lg overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
                      boxShadow: "0 4px 15px rgba(20, 184, 166, 0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #06b6d4, #14b8a6)"
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(20, 184, 166, 0.6), 0 0 20px rgba(6, 182, 212, 0.3)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #14b8a6, #06b6d4)"
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(20, 184, 166, 0.4)"
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <Mail className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Email Me</span>
                  </a>
                </div>
              </MotionWrapper>

              {/* Quick Contact Stats */}
              <MotionWrapper delay={0.8}>
                <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 dark:border-slate-700/30 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    style={{
                      background: "rgba(20, 184, 166, 0.1)",
                      boxShadow: "0 2px 10px rgba(20, 184, 166, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(20, 184, 166, 0.15)"
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(20, 184, 166, 0.2)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(20, 184, 166, 0.1)"
                      e.currentTarget.style.boxShadow = "0 2px 10px rgba(20, 184, 166, 0.1)"
                    }}
                  >
                    <div className="text-lg font-semibold text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      24h
                    </div>
                    <div className="text-sm text-teal-700 dark:text-teal-300 font-medium">Response Time</div>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 dark:border-slate-700/30 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    style={{
                      background: "rgba(161, 140, 209, 0.1)",
                      boxShadow: "0 2px 10px rgba(161, 140, 209, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(161, 140, 209, 0.15)"
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(161, 140, 209, 0.2)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(161, 140, 209, 0.1)"
                      e.currentTarget.style.boxShadow = "0 2px 10px rgba(161, 140, 209, 0.1)"
                    }}
                  >
                    <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      Open
                    </div>
                    <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">To Opportunities</div>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 dark:border-slate-700/30 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    style={{
                      background: "rgba(108, 172, 228, 0.1)",
                      boxShadow: "0 2px 10px rgba(108, 172, 228, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(108, 172, 228, 0.15)"
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(108, 172, 228, 0.2)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(108, 172, 228, 0.1)"
                      e.currentTarget.style.boxShadow = "0 2px 10px rgba(108, 172, 228, 0.1)"
                    }}
                  >
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      Sydney
                    </div>
                    <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Based in</div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "all 0.6s ease-out 2s",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 Mridul Khanna — Transforming data into actionable insights.
          </p>
        </div>
      </footer>
    </div>
  )
}
