"use client";

import React from "react";
import { Code2 } from "lucide-react";

const stackTags = [
    "Supabase",
    "MERN Stack",
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Railway",
    "VS Code",
];

export const TechStackCard = () => {
    return (
        <div className="bento-card md:col-span-2 bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col gap-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-300">
                <Code2 size={20} /> Stack
            </h3>
            <div className="flex flex-wrap gap-2">
                {stackTags.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-medium border border-zinc-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};
