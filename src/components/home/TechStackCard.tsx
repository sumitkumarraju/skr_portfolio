"use client";

import React from "react";
import { Code2, Layers, Server } from "lucide-react";

const frontendTech = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "React Native",
];

const backendTech = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Railway",
];

const languages = [
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
];

export const TechStackCard = () => {
    return (
        <div className="bento-card md:col-span-2 bg-zinc-900 border border-zinc-800 p-4 sm:p-6 rounded-3xl flex flex-col gap-3 sm:gap-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-zinc-300">
                <Code2 size={18} className="sm:hidden" />
                <Code2 size={20} className="hidden sm:block" />
                Tech Stack
            </h3>

            {/* Frontend Section */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Layers size={14} className="text-brandRed" />
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {frontendTech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-[10px] sm:text-xs font-medium border border-zinc-700 hover:border-brandRed/50 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Backend Section */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Server size={14} className="text-brandRed" />
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {backendTech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-[10px] sm:text-xs font-medium border border-zinc-700 hover:border-brandRed/50 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-brandRed" />
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {languages.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-[10px] sm:text-xs font-medium border border-zinc-700 hover:border-brandRed/50 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
