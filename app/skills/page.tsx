import { GridWrapper } from "@/app/components/GridWrapper";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills | Teja Chakilam",
    description: "Technical expertise spanning data science, machine learning, AI development, generative AI, NLP, and cloud technologies."
};

export default function SkillsPage() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "💻",
            skills: ["Python", "SQL"]
        },
        {
            title: "Development Tools",
            icon: "🛠️",
            skills: ["Jupyter Notebook", "JupyterLab", "Amazon SageMaker", "Google Colab", "VS Code", "PyCharm", "Excel"]
        },
        {
            title: "Data Analysis and DS Libraries",
            icon: "📊",
            skills: ["NumPy", "Pandas", "Matplotlib", "PyTorch", "TensorFlow", "Scikit-learn", "SciPy"]
        },
        {
            title: "Deep Learning Frameworks",
            icon: "🧠",
            skills: ["Familiarity with deep learning architectures", "CNNs", "RNNs", "Transformers"]
        },
        {
            title: "Natural Language Processing",
            icon: "🗣️",
            skills: ["NLTK", "spaCy", "Gensim", "Transformers", "BERT", "GPT", "Sequence-to-Sequence", "Named Entity Recognition (NER)", "Sentiment Analysis", "Word Embeddings", "Word2Vec", "GloVe", "FastText", "ELMo", "OpenAI-Embeddings"]
        },
        {
            title: "Advanced NLP Concepts",
            icon: "⚡",
            skills: ["Attention Mechanisms", "Transformers", "Self-Attention"]
        },
        {
            title: "NLP Applications",
            icon: "🔧",
            skills: ["Chatbots", "Sentiment Analysis", "Information Extraction"]
        },
        {
            title: "Generative AI Skills",
            icon: "🤖",
            skills: ["OpenAI LLMs", "Open-source Hugging Face LLMs", "Transformers and other LLMs", "GANs (Generative Adversarial Networks)", "VAEs (Variational Autoencoders)", "Transformer models", "OpenAI LLM Models", "Hugging Face Models", "AI Agents", "Autogen", "LangChain", "LangGraph", "RAG", "Graph RAG", "POC on MCP", "Crew AI", "n8n"]
        },
        {
            title: "Vector Databases",
            icon: "🗄️",
            skills: ["Chroma", "Milvus", "Pinecone"]
        },
        {
            title: "Prompt Engineering",
            icon: "🎯",
            skills: ["Chain Of Thought (CoT)", "Advanced Prompting - N-gram", "Few-shot Prompting"]
        },
        {
            title: "Data Visualization Tools",
            icon: "📈",
            skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"]
        },
        {
            title: "Database Systems",
            icon: "💾",
            skills: ["SQL", "MongoDB", "NoSQL"]
        },
        {
            title: "Cloud Platforms",
            icon: "☁️",
            skills: ["AWS", "Azure", "Google Cloud Platform"]
        },
        {
            title: "Version Control Systems",
            icon: "🔄",
            skills: ["Git", "Bitbucket", "TFS"]
        }
    ];

    return (
        <div className="relative mt-14">
            <div className="relative space-y-10 md:space-y-16">
                {/* Header */}
                <GridWrapper>
                    <div className="text-center space-y-4">
                        <div className="text-sm font-medium text-indigo-600">
                            <span>Skills & Expertise</span>
                        </div>
                        <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
                            My Technical Arsenal
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
                            A comprehensive overview of my technical expertise spanning data science, machine learning, AI development, generative AI, NLP, and cloud technologies.
                        </p>
                    </div>
                </GridWrapper>

                {/* Skills Grid */}
                <GridWrapper>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {skillCategories.map((category, index) => (
                            <div
                                key={category.title}
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                {/* Background gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                                            <span className="text-2xl">{category.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-900 transition-colors duration-300">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-block px-3 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium rounded-full hover:from-indigo-200 hover:to-purple-200 transition-all duration-200 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        ))}
                    </div>
                </GridWrapper>

                {/* Newsletter */}
                <NewsletterSignUp />
            </div>
        </div>
    );
}