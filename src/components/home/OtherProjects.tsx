"use client";

import React from "react";
import { ArrowUpRight, GraduationCap, ShieldCheck } from "lucide-react";

export const OtherProjects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bento-card bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
                <div className="flex justify-between items-center mb-6">
                    <div className="p-2 bg-zinc-800 rounded-lg text-zinc-300">
                        <GraduationCap size={24} />
                    </div>
                    <a
                        href="#"
                        className="p-2 bg-zinc-800 rounded-full text-zinc-300 hover:bg-white hover:text-black transition-colors"
                    >
                        <ArrowUpRight size={20} />
                    </a>
                </div>
                <h3 className="text-xl font-bold">Ishwar International School</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                    Complete digital overhaul including promotional video and website
                    dashboard.
                </p>
                <div className="flex gap-2 mt-6">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs border border-zinc-700">
                        Next.js
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs border border-zinc-700">
                        Framer
                    </span>
                </div>
            </div>

            <div className="bento-card bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
                <div className="flex justify-between items-center mb-6">
                    <div className="p-2 bg-zinc-800 rounded-lg text-zinc-300">
                        <ShieldCheck size={24} />
                    </div>
                    <a
                        href="#"
                        className="p-2 bg-zinc-800 rounded-full text-zinc-300 hover:bg-white hover:text-black transition-colors"
                    >
                        <ArrowUpRight size={20} />
                    </a>
                </div>
                <h3 className="text-xl font-bold">Secure Node Architecture</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                    High-performance hackathon submission utilizing pnRPC and pNode.
                </p>
                <div className="flex gap-2 mt-6">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs border border-zinc-700">
                        pnRPC
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs border border-zinc-700">
                        TypeScript
                    </span>
                </div>
            </div>
        </div>
    );
};
