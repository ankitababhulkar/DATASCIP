"use client";

import { BentoCard } from "./BentoCard";

interface ContactBentoProps {
    linkTo?: string;
}

export function ContactBento({ linkTo = "/contact" }: ContactBentoProps) {
    return (
        <BentoCard linkTo={linkTo} height="h-[276px]" className="group">
            {/* Decorative elements */}
            <div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-blue-100 opacity-60"></div>
            <div className="absolute right-4 top-16 h-8 w-8 rounded-full bg-blue-200 opacity-40"></div>
            <div className="absolute left-8 top-12 h-12 w-12 rounded-full bg-indigo-100 opacity-50"></div>

            {/* Contact icon floating */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:scale-110">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white to-transparent"></div>

            {/* Content at bottom */}
            <div className="z-10 grid h-full grid-cols-2 grid-rows-2 items-end gap-8">
                <div className="col-1 row-start-2">
                    <h2 className="mb-2 font-medium">Contact</h2>
                    <p className="text-text-secondary">
                        Let&apos;s connect and discuss
                    </p>
                </div>
            </div>
        </BentoCard>
    );
}