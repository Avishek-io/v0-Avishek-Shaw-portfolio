import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Project = {
  title: string
  description: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a machine learning model to predict customer churn for a telecom company. Included data cleaning, feature engineering, and training various classification algorithms to identify customers at risk of leaving.",
    tech: ["Python 🐍", "Pandas 🐼", "Scikit-learn 🤖", "Matplotlib 📊"],
  },
  {
    title: "Housing Price Prediction",
    description:
      "Created a regression model to estimate house prices based on features like location, size, and number of bedrooms. Focused on EDA and model optimization using feature scaling and cross-validation.",
    tech: ["Python 🐍", "NumPy 🔢", "Pandas 🐼", "Scikit-learn 🤖", "Jupyter Notebook 📓"],
  },
  {
    title: "Sentiment Analysis of Movie Reviews",
    description:
      "Built a sentiment analysis tool to classify movie reviews as positive or negative using NLP techniques like tokenization, stop word removal, and vectorization, then trained a classification model.",
    tech: ["Python 🐍", "NLTK 🗣️", "Scikit-learn 🤖", "NLP 🧠"],
  },
]

// Derive a unique set of skills to show up top as a skills bar
const skills = Array.from(new Set(projects.flatMap((p) => p.tech)))

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          A selection of recent data science and machine learning projects. Tech stacks include Python, data tooling,
          and NLP—now with requested emojis for quick visual scanning.
        </p>

        {/* Skills Bar */}
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Skills and tools used">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </header>

      {/* Projects Grid */}
      <section aria-labelledby="projects-heading" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <h2 id="projects-heading" className="sr-only">
          Project cards
        </h2>

        {projects.map((project) => (
          <Card key={project.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-balance text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
