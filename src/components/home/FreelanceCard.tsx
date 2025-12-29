"use client";

import React from "react";
import Image from "next/image";
import { Cpu } from "lucide-react";

export const FreelanceCard = () => {
    return (
        <div className="bento-card bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/freelancer.png"
                    alt=""
                    fill
                    className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandRed/10 rounded-full blur-3xl -mr-16 -mt-16 z-10"></div>
            <div className="flex justify-between items-start relative z-10">
                <div className="p-3 bg-zinc-800 rounded-full text-zinc-100">
                    <Cpu size={24} />
                </div>
                <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Available
                </div>
            </div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mt-4">Freelance</h3>
                <p className="text-zinc-400 text-sm mt-1">
                    Open to new projects and consultancies for 2025.
                </p>
            </div>
        </div>
    );
};
