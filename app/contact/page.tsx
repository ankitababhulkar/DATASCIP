"use client";

import { GridWrapper } from "@/app/components/GridWrapper";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
            title: "Email",
            description: "Send me an email anytime",
            value: "tej.chakilam@gmail.com",
            action: "mailto:tej.chakilam@gmail.com"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            title: "LinkedIn",
            description: "Connect with me professionally",
            value: "linkedin.com/in/tejachakilam",
            action: "https://linkedin.com/in/tejachakilam"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),


            title: "Phone",
            description: "Call me for urgent matters",
            value: "+1 9139636569	",
            action: "tel:+1 9139636569	"
        }
    ];



    return (
        <div className="relative mt-14">
            <title>Contact | Teja Chakilam</title>

            <div className="relative space-y-10 md:space-y-16">
                {/* Header */}
                <GridWrapper>
                    <div className="text-center space-y-4">
                        <div className="text-sm font-medium text-indigo-600">
                            <span>Get In Touch</span>
                        </div>
                        <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
                            Let's Build Something Amazing Together
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
                            Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Let's discuss how we can leverage data and AI to solve real-world problems.
                        </p>
                    </div>
                </GridWrapper>

                {/* Contact Methods */}
                <GridWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {contactMethods.map((method) => (
                            <a
                                key={method.title}
                                href={method.action}
                                className="group rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white transition-all duration-300 hover:shadow-lg text-center"
                            >
                                <div className="flex justify-center mb-3">{method.icon}</div>
                                <h3 className="text-lg font-semibold text-text-primary group-hover:text-indigo-600 transition-colors mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-sm text-text-secondary mb-3">
                                    {method.description}
                                </p>
                                <p className="text-sm font-medium text-indigo-600">
                                    {method.value}
                                </p>
                            </a>
                        ))}
                    </div>
                </GridWrapper>



                {/* Contact Form */}
                <GridWrapper>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Form */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-medium text-text-primary mb-4">
                                        Send me a message
                                    </h2>
                                    <p className="text-text-secondary">
                                        Fill out the form below and I'll get back to you as soon as possible.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                                placeholder="Your first name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                                            placeholder="Tell me about your project, goals, and how I can help..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>

                                    {submitStatus === "success" && (
                                        <div className="p-4 bg-green-100 border border-green-200 rounded-lg">
                                            <p className="text-green-800 text-sm">
                                                ✅ Message sent successfully! I'll get back to you soon.
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* Info */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-medium text-text-primary mb-4">
                                        Let's collaborate
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        I’m a Data Scientist and AI/ML Engineer with 5+ years of experience delivering impactful AI solutions across finance, healthcare, insurance, and retail. For me, this isn’t just a job  it’s a responsibility to create real business value through data.
                                    </p>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        My journey began by exploring diverse domains like marketing and accounting, where I discovered one truth everything connects through data. That curiosity led me to data science, where I now build systems that don’t just work, but truly move the needle for businesses.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-text-primary mb-1">Proven Expertise</h4>
                                            <p className="text-sm text-text-secondary">
                                                5+ years delivering AI/ML solutions with real business impact across diverse domains.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-text-primary mb-1">Data-Driven Impact</h4>
                                            <p className="text-sm text-text-secondary">Building AI systems that boost ROI, efficiency, and data-driven decisions.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-text-primary mb-1">Strategic Problem-Solving</h4>
                                            <p className="text-sm text-text-secondary">Combining technical skill with business insight to solve complex challenges.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-text-primary mb-1">Full Lifecycle Ownership</h4>
                                            <p className="text-sm text-text-secondary">Owning every stage of the ML lifecycle from data to deployment.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </GridWrapper>

                {/* Summary Section */}
                <GridWrapper>
                    <div className="max-w-2xl mx-auto">
                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                            <h4 className="font-medium text-indigo-900 mb-3 text-center">Summary</h4>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    <span className="text-sm text-indigo-700">+1 9139636569</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    <span className="text-sm text-indigo-700">tej.chakilam@gmail.com</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="text-sm text-indigo-700">linkedin.com/in/teja-chakilam-45b50726b/</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </GridWrapper>

                {/* Newsletter */}
                <NewsletterSignUp />
            </div>
        </div>
    );
}