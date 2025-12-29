"use client";

import React from "react";
import Image from "next/image";
import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Twitter,
    FileText,
} from "lucide-react";

export const ProfileCard = () => {
    return (
        <div className="bento-card md:col-span-2 bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col justify-center gap-4">
            <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                        Sumit Kumar
                    </span>
                </h1>
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700 overflow-hidden relative">
                    <Image
                        src="/IMG_4199.jpg"
                        alt="Profile"
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <p className="text-zinc-400 text-lg md:text-xl max-w-lg">
                Full Stack Engineer building digital products with{" "}
                <span className="text-brandRed">Next.js</span> and{" "}
                <span className="text-brandRed">AI</span>. Turning complex problems
                into elegant code.
            </p>
            <div className="flex gap-4 pt-2">
                <a
                    href="https://github.com/sumitkumarraju"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
                    rel="noopener noreferrer"
                >
                    <Github size={24} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors"
                    rel="noopener noreferrer"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="https://www.instagram.com/mr.skr_007/?next=%2F"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-[#E1306C] hover:text-white transition-colors"
                    rel="noopener noreferrer"
                >
                    <Instagram size={24} />
                </a>
                <a
                    href="https://x.com/skr_exe"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-black hover:text-white transition-colors"
                    rel="noopener noreferrer"
                >
                    <Twitter size={24} />
                </a>
                <a
                    href="mailto:SUMITTS317@gmail.com"
                    className="px-4 py-2 bg-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2"
                >
                    <Mail size={16} />
                    <span>Email Me</span>
                </a>
                <a
                    href="/RESUME_SUMIT KUMAR RAJU.pdf"
                    target="_blank"
                    className="px-4 py-2 bg-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2"
                    rel="noopener noreferrer"
                >
                    <FileText size={16} />
                    <span>Resume</span>
                </a>
            </div>
        </div>
    );
};
