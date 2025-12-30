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
        <div className="bento-card md:col-span-2 bg-zinc-900 border border-zinc-800 p-4 sm:p-6 rounded-3xl flex flex-col justify-center gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight flex-1">
                    <span className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent font-bangers tracking-wide">
                        Sumit Kumar
                    </span>
                </h1>
                <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700 overflow-hidden relative flex-shrink-0">
                    <Image
                        src="/IMG_4199.jpg"
                        alt="Profile"
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-lg">
                Full Stack Engineer building digital products with{" "}
                <span className="text-brandRed">Next.js</span> and{" "}
                <span className="text-brandRed">AI</span>. Turning complex problems
                into elegant code.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4 pt-2">
                <a
                    href="https://github.com/sumitkumarraju"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
                    rel="noopener noreferrer"
                >
                    <Github size={18} className="sm:hidden" />
                    <Github size={24} className="hidden sm:block" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors"
                    rel="noopener noreferrer"
                >
                    <Linkedin size={18} className="sm:hidden" />
                    <Linkedin size={24} className="hidden sm:block" />
                </a>
                <a
                    href="https://www.instagram.com/mr.skr_007/?next=%2F"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-[#E1306C] hover:text-white transition-colors"
                    rel="noopener noreferrer"
                >
                    <Instagram size={18} className="sm:hidden" />
                    <Instagram size={24} className="hidden sm:block" />
                </a>
                <a
                    href="https://x.com/skr_exe"
                    target="_blank"
                    className="p-2 bg-zinc-800 rounded-full hover:bg-black hover:text-white transition-colors"
                    rel="noopener noreferrer"
                >
                    <Twitter size={18} className="sm:hidden" />
                    <Twitter size={24} className="hidden sm:block" />
                </a>
                <a
                    href="mailto:SUMITTS317@gmail.com"
                    className="px-2.5 sm:px-3 md:px-4 py-2 bg-zinc-800 rounded-full text-[10px] sm:text-xs md:text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center gap-1.5"
                >
                    <Mail size={14} className="sm:hidden" />
                    <Mail size={16} className="hidden sm:block" />
                    <span>Email Me</span>
                </a>
                <a
                    href="/RESUME_SUMIT KUMAR RAJU.pdf"
                    target="_blank"
                    className="px-2.5 sm:px-3 md:px-4 py-2 bg-zinc-800 rounded-full text-[10px] sm:text-xs md:text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center gap-1.5"
                    rel="noopener noreferrer"
                >
                    <FileText size={14} className="sm:hidden" />
                    <FileText size={16} className="hidden sm:block" />
                    <span>Resume</span>
                </a>
            </div>
        </div>
    );
};
