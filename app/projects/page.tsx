import { GridWrapper } from "@/app/components/GridWrapper";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  category: string;
  status: "Completed" | "In Progress" | "Planned";
}

const projects: Project[] = [
  {
    title: "AI-Powered Customer Segmentation Platform",
    description:
      "Built an intelligent customer segmentation system using machine learning algorithms to identify high-value customer groups and predict churn. Implemented using Python, scikit-learn, and deployed on AWS.",
    image: "/projects/ai_segmentation.jpg",
    url: "#",
    technologies: ["Python", "Scikit-learn", "AWS", "PostgreSQL", "Docker"],
    category: "Machine Learning",
    status: "Completed"
  },
  {
    title: "Real-time Fraud Detection System",
    description:
      "Developed a real-time fraud detection system processing millions of transactions daily. Used ensemble methods and deep learning to achieve 99.2% accuracy with minimal false positives.",
    image: "/projects/fraud_detection.jpg",
    url: "#",
    technologies: ["TensorFlow", "Kafka", "Redis", "Python", "Kubernetes"],
    category: "Deep Learning",
    status: "Completed"
  },
  {
    title: "Generative AI Content Assistant",
    description:
      "Created an AI-powered content generation tool using GPT models and custom fine-tuning. Helps businesses create personalized marketing content at scale.",
    image: "/projects/ai_content.jpg",
    url: "#",
    technologies: ["OpenAI GPT", "LangChain", "FastAPI", "React", "MongoDB"],
    category: "Generative AI",
    status: "In Progress"
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "Built an interactive dashboard for predictive analytics using time series forecasting and statistical modeling. Provides actionable insights for business decision-making.",
    image: "/projects/analytics_dashboard.jpg",
    url: "#",
    technologies: ["R", "Shiny", "Prophet", "Plotly", "PostgreSQL"],
    category: "Analytics",
    status: "Completed"
  },
  {
    title: "MLOps Pipeline Automation",
    description:
      "Designed and implemented end-to-end MLOps pipeline for model training, validation, and deployment. Includes automated testing, monitoring, and rollback capabilities.",
    image: "/projects/mlops_pipeline.jpg",
    url: "#",
    technologies: ["MLflow", "Airflow", "Docker", "Kubernetes", "GitHub Actions"],
    category: "MLOps",
    status: "Completed"
  },
  {
    title: "Computer Vision Quality Control",
    description:
      "Developed a computer vision system for automated quality control in manufacturing. Uses CNN models to detect defects with 98% accuracy, reducing manual inspection time by 80%.",
    image: "/projects/computer_vision.jpg",
    url: "#",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "NVIDIA TensorRT"],
    category: "Computer Vision",
    status: "Completed"
  }
];

const categories = ["All", "Machine Learning", "Deep Learning", "Generative AI", "Analytics", "MLOps", "Computer Vision"];

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    "Completed": "bg-green-100 text-green-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    "Planned": "bg-blue-100 text-blue-800"
  };

  return (
    <div className="group rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white transition-all duration-300 hover:shadow-lg">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                {project.status}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-text-primary group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <a
              href={project.url}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              View Project
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <div className="relative mt-14">
      <title>Projects | Teja Chakilam</title>

      <div className="relative space-y-10 md:space-y-16">
        {/* Header */}
        <GridWrapper>
          <div className="text-center space-y-4">
            <div className="text-sm font-medium text-indigo-600">
              <span>Portfolio</span>
            </div>
            <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
              Data Science Projects & Solutions
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
              A showcase of my work in machine learning, AI, and data engineering. Each project demonstrates real-world problem-solving with cutting-edge technology.
            </p>
          </div>
        </GridWrapper>

        {/* Stats */}
        <GridWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{projects.length}</div>
              <div className="text-sm text-text-secondary">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {projects.filter(p => p.status === "Completed").length}
              </div>
              <div className="text-sm text-text-secondary">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-sm text-text-secondary">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-sm text-text-secondary">Avg Accuracy</div>
            </div>
          </div>
        </GridWrapper>

        {/* Projects Grid */}
        <GridWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </GridWrapper>


        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
