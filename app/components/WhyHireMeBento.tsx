"use client"
import { useState } from "react";

interface WhyHireMeBentoProps {
    videoPath?: string;
}

export function WhyHireMeBento({ videoPath = "/video.mp4" }: WhyHireMeBentoProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 p-6 transition-all duration-300 hover:shadow-lg dark:from-purple-900/20 dark:to-indigo-900/20">
            <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/50">
                        <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <svg className="h-5 w-5 text-gray-400 transition-colors group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    Why Hire Me?
                </h3>

                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    Watch my introduction video to see how I can bring value to your team with my unique blend of data science expertise and AI innovation.
                </p>

                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    {!isPlaying ? (
                        <button
                            onClick={handleVideoClick}
                            className="flex h-full w-full items-center justify-center transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                                <svg className="ml-1 h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>
                    ) : (
                        <video
                            src={videoPath}
                            controls
                            autoPlay
                            className="h-full w-full object-cover"
                            onError={() => setIsPlaying(false)}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Data Science
                    </span>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                        AI/ML Engineering
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        Innovation
                    </span>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-200 to-indigo-200 opacity-20 dark:from-purple-600 dark:to-indigo-600" />
        </div>
    );
}