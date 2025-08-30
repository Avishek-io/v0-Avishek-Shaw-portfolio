"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowUpRight, ArrowUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Color system (5 total):
// - Primary: blue-600
// - Neutrals: white, slate-900 (bg in dark), slate-200 (borders)
// - Accent: amber-500

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

const skills = ["Python 🐍", "C ⚙️", "Data Structures 🧩", "R 📊", "Machine Learning 🤖"]

type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a machine learning model to predict customer churn for a telecom company. The project involved data cleaning, feature engineering, and training various classification algorithms to identify customers at risk of leaving.",
    tech: ["Python 🐍", "Pandas 🐼", "Scikit-learn 🤖", "Matplotlib 📊"],
  },
  {
    title: "Housing Price Prediction",
    description:
      "Created a regression model to estimate house prices based on features like location, size, and number of bedrooms. The project focused on EDA and model optimization using techniques like feature scaling and cross-validation.",
    tech: ["Python 🐍", "NumPy 🔢", "Pandas 🐼", "Scikit-learn 🤖", "Jupyter Notebook 📓"],
  },
  {
    title: "Sentiment Analysis of Movie Reviews",
    description:
      "Built a sentiment analysis tool to classify movie reviews as positive or negative. Utilized NLP techniques, including tokenization, stop word removal, and vectorization, to train a classification model.",
    tech: ["Python 🐍", "NLTK 🗣️", "Scikit-learn 🤖", "NLP 🧠"],
  },
]

const achievements = [
  "IBM SkillsBuild — Data Science (Certificate)",
  "Oracle University — Generative AI (Certificate)",
  "Placed in top 10% in XYZ Coding Challenge",
  "Completed ML specialization coursework with distinction",
  "Presented a data visualization project at campus tech fest",
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${scrolled ? "bg-background/80 backdrop-blur border-b border-border" : "bg-background/60"} `}
      role="banner"
    >
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between" aria-label="Main">
        <Link href="#" className="font-semibold text-lg">
          <span className="text-blue-600">Avishek</span> Shaw
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Avishek-io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/avishek--shaw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <a
            href="mailto:avishekshaw002@gmail.com"
            className="hidden md:inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">
            Hi, I’m <span className="text-blue-600">Avishek Kumar Shaw</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            3rd-year B.Tech student in Computer Science & Engineering (Data Science specialization) at MCKV Institute of
            Engineering.
          </p>
          <p className="text-base leading-relaxed">
            I’m passionate about data science because it lets me apply programming and logical thinking to real-world
            challenges. I enjoy writing efficient code, building algorithms, and transforming raw datasets into
            actionable insights. For me, solving problems through data isn’t just technical work— it’s a creative
            process that drives innovation and impact.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#projects">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View Projects
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a
              href="mailto:avishekshaw002@gmail.com"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
        <Card aria-hidden className="md:col-span-1 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm">Quick Info</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Institution</span>
              <span className="font-medium text-right">MCKV Institute of Engineering</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Email</span>
              <a href="mailto:avishekshaw002@gmail.com" className="font-medium text-blue-600 hover:underline">
                avishekshaw002@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Location</span>
              <span className="font-medium text-right">India</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div id={id} className="mx-auto max-w-5xl px-4 pt-10 md:pt-14">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-sm text-muted-foreground mt-1">{subtitle}</p> : null}
    </div>
  )
}

function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="mx-auto max-w-5xl px-4 pb-8 md:pb-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {skills.map((skill) => (
          <Card key={skill} className="border-slate-200 dark:border-slate-800">
            <CardContent className="p-4 text-center font-medium">{skill}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="mx-auto max-w-5xl px-4 pb-8 md:pb-12">
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {projects.map((p) => (
          <Card key={p.title} className="border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full px-2 py-1 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link ? (
                <Link href={p.link} className="inline-flex items-center text-sm text-blue-600 hover:underline">
                  View more
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="mx-auto max-w-5xl px-4 pb-8 md:pb-12">
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="text-lg">Data/ML Experience</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-3 text-sm leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Built end-to-end ML workflows across multiple projects: customer churn classification, housing price
              regression, and sentiment analysis of movie reviews.
            </li>
            <li>
              Performed EDA, data cleaning, and feature engineering; applied feature scaling, cross-validation, and
              iterative model selection using Scikit-learn.
            </li>
            <li>
              Implemented NLP pipelines with tokenization, stop-word removal, and vectorization for text classification
              using NLTK and Scikit-learn.
            </li>
            <li>
              Created reproducible Jupyter notebooks and visualizations with Matplotlib to clearly communicate insights
              and model performance.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Python 🐍",
              "Pandas 🐼",
              "NumPy 🔢",
              "Scikit-learn 🤖",
              "NLTK 🗣️",
              "Matplotlib 📊",
              "Jupyter Notebook 📓",
            ].map((t) => (
              <span
                key={t}
                className="text-xs rounded-full px-2 py-1 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900"
              >
                {t}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function Achievements() {
  return (
    <section aria-labelledby="achievements-heading" className="mx-auto max-w-5xl px-4 pb-8 md:pb-12">
      <ul className="mt-4 space-y-3">
        {achievements.map((a, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600 mt-2" aria-hidden />
            <p className="text-sm leading-relaxed">{a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields." })
      return
    }

    setLoading(true)
    try {
      // Simulate submission
      await new Promise((res) => setTimeout(res, 800))
      form.reset()
      toast({ title: "Message sent!", description: "Thanks for reaching out." })
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section aria-labelledby="contact-heading" className="mx-auto max-w-5xl px-4 pb-16">
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="text-lg">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="How can I help?" required rows={5} />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
          <div className="flex items-center gap-3 mt-6">
            <Link
              href="https://github.com/Avishek-io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-blue-600 transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/avishek--shaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Avishek Kumar Shaw. All rights reserved.
      </div>
    </footer>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />

      <SectionHeading id="about" title="About Me" />
      <section className="mx-auto max-w-5xl px-4 pb-8 md:pb-12">
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-6 text-sm leading-relaxed">
            I am a 3rd-year B.Tech CSE student specializing in Data Science at MCKV Institute of Engineering. My
            interests lie in building efficient code, designing algorithms, and turning data into insights that create
            real-world impact.
          </CardContent>
        </Card>
      </section>

      <SectionHeading id="skills" title="Skills" subtitle="Core technical strengths" />
      <Skills />

      <SectionHeading id="projects" title="Projects" subtitle="Selected work" />
      <Projects />

      <SectionHeading id="experience" title="Experience" />
      <Experience />

      <SectionHeading id="achievements" title="Achievements" />
      <Achievements />

      <SectionHeading id="contact" title="Contact" subtitle="Let’s work together" />
      <Contact />

      <Footer />
      <BackToTop />
    </main>
  )
}
