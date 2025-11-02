import { GridWrapper } from "@/app/components/GridWrapper";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    description: string;
    skills: string[];
    logo: string;
    verifyUrl: string;
    status: "Active" | "Expired" | "In Progress";
}

const certifications: Certification[] = [
    {
        title: "Microsoft Certified: Azure AI Engineer Associate",
        issuer: "Microsoft",
        date: "2024",
        credentialId: "AZ-AI-102",
        description: "Validates skills in designing and implementing AI solutions using Azure Cognitive Services and Machine Learning.",
        skills: ["Azure AI", "Cognitive Services", "Machine Learning", "AI Solutions"],
        logo: "/certifications/microsoft-logo.png",
        verifyUrl: "#",
        status: "Active"
    },
    {
        title: "NVIDIA-Certified Associate: Generative AI LLMs",
        issuer: "NVIDIA",
        date: "2024",
        credentialId: "NVIDIA-GEN-AI",
        description: "Demonstrates expertise in generative AI and large language models using NVIDIA technologies.",
        skills: ["Generative AI", "LLMs", "NVIDIA GPU", "Deep Learning"],
        logo: "/certifications/nvidia-logo.png",
        verifyUrl: "#",
        status: "Active"
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        date: "2025",
        credentialId: "OCI-GEN-AI-2025",
        description: "Validates advanced skills in implementing generative AI solutions on Oracle Cloud Infrastructure.",
        skills: ["Oracle Cloud", "Generative AI", "Cloud Architecture", "AI Services"],
        logo: "/certifications/oracle-logo.png",
        verifyUrl: "#",
        status: "Active"
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle",
        date: "2025",
        credentialId: "OCI-DS-2025",
        description: "Demonstrates expertise in data science methodologies and implementation on Oracle Cloud Infrastructure.",
        skills: ["Data Science", "Oracle Cloud", "Machine Learning", "Analytics"],
        logo: "/certifications/oracle-logo.png",
        verifyUrl: "#",
        status: "Active"
    }
];



function CertificationCard({ cert }: { cert: Certification }) {
    const statusColors = {
        "Active": "bg-green-100 text-green-800",
        "Expired": "bg-red-100 text-red-800",
        "In Progress": "bg-yellow-100 text-yellow-800"
    };

    // Function to get company logo based on issuer
    const getCompanyLogo = (issuer: string) => {
        switch (issuer.toLowerCase()) {
            case 'microsoft':
                return (
                    <svg className="w-8 h-8" viewBox="0 0 23 23" fill="none">
                        <path d="M0 0h11v11H0V0z" fill="#f25022" />
                        <path d="M12 0h11v11H12V0z" fill="#7fba00" />
                        <path d="M0 12h11v11H0V12z" fill="#00a4ef" />
                        <path d="M12 12h11v11H12V12z" fill="#ffb900" />
                    </svg>
                );
            case 'nvidia':
                return (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#76b900">
                        <path d="M7.73 2.5c-1.33 0-2.41 1.08-2.41 2.41v14.18c0 1.33 1.08 2.41 2.41 2.41h8.54c1.33 0 2.41-1.08 2.41-2.41V4.91c0-1.33-1.08-2.41-2.41-2.41H7.73zm4.27 2.5c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" />
                    </svg>
                );
            case 'oracle':
                return (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#f80000">
                        <path d="M18.75 12c0-3.73-3.02-6.75-6.75-6.75S5.25 8.27 5.25 12s3.02 6.75 6.75 6.75 6.75-3.02 6.75-6.75zM12 17.25c-2.9 0-5.25-2.35-5.25-5.25S9.1 6.75 12 6.75s5.25 2.35 5.25 5.25-2.35 5.25-5.25 5.25z" />
                        <path d="M12 8.25c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75-1.68-3.75-3.75-3.75z" />
                    </svg>
                );
            default:
                return <span className="text-2xl">🏆</span>;
        }
    };

    return (
        <div className="group rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[cert.status]}`}>
                                {cert.status}
                            </span>
                            <span className="text-xs text-text-secondary">
                                {cert.date}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary group-hover:text-indigo-600 transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-indigo-600 font-medium mt-1">
                            {cert.issuer}
                        </p>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        {getCompanyLogo(cert.issuer)}
                    </div>
                </div>

                <p className="text-text-secondary leading-relaxed">
                    {cert.description}
                </p>

                <div className="space-y-3">


                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-text-secondary">
                            ID: {cert.credentialId}
                        </span>
                        <a
                            href={cert.verifyUrl}
                            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                            Verify
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

export default function CertificationsPage() {
    return (
        <div className="relative mt-14">
            <title>Certifications | Teja Chakilam</title>

            <div className="relative space-y-10 md:space-y-16">
                {/* Header */}
                <GridWrapper>
                    <div className="text-center space-y-4">
                        <div className="text-sm font-medium text-indigo-600">
                            <span>Professional Credentials</span>
                        </div>
                        <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
                            Certifications & Achievements
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
                            My professional certifications in AI, data science, and cloud technologies.
                        </p>
                    </div>
                </GridWrapper>

                {/* Stats */}
                <GridWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 rounded-2xl border border-border-primary bg-bg-primary hover:bg-white transition-colors duration-300">
                            <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-indigo-600 mb-2">4</div>
                            <div className="text-sm text-text-secondary">Active Certifications</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-border-primary bg-bg-primary hover:bg-white transition-colors duration-300">
                            <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
                            <div className="text-sm text-text-secondary">Cloud Platforms</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-border-primary bg-bg-primary hover:bg-white transition-colors duration-300">
                            <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-indigo-600 mb-2">2</div>
                            <div className="text-sm text-text-secondary">AI Specializations</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-border-primary bg-bg-primary hover:bg-white transition-colors duration-300">
                            <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-indigo-600 mb-2">2025</div>
                            <div className="text-sm text-text-secondary">Latest Certification</div>
                        </div>
                    </div>
                </GridWrapper>

                {/* Current Certifications */}
                <GridWrapper>
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-medium text-text-primary">
                                Current Certifications
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Professional certifications validating my expertise in AI, data science, and cloud technologies.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert) => (
                                <CertificationCard key={cert.credentialId} cert={cert} />
                            ))}
                        </div>
                    </div>
                </GridWrapper>





                {/* Newsletter */}
                <NewsletterSignUp />
            </div>
        </div>
    );
}