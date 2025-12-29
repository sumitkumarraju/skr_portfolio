"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ProfileCard } from "@/components/home/ProfileCard";
import { FreelanceCard } from "@/components/home/FreelanceCard";
import { TechStackCard } from "@/components/home/TechStackCard";
import { ProjectVideoCard } from "@/components/home/ProjectVideoCard";
import { OtherProjects } from "@/components/home/OtherProjects";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mimic the window.onload + timeout behavior
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-brandRed flex flex-col items-center justify-center transition-transform duration-800 cubic-bezier(0.76, 0, 0.24, 1) ease-in-out",
                    !loading && "-translate-y-full"
                )}
                style={{ transitionDuration: "800ms" }}
            >
                <div className="text-center animate-fade-in-up">
                    <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-2 font-lilex">
                        SKR
                    </h1>
                    <p className="text-white/90 text-xs sm:text-sm md:text-lg font-medium tracking-[0.2em] uppercase">
                        Digital Design Studio
                    </p>
                </div>
            </div>

            <main
                className={cn(
                    "min-h-screen p-3 sm:p-4 md:p-8 font-sans selection:bg-brandRed selection:text-white transition-opacity duration-1000 delay-500",
                    loading ? "opacity-0" : "opacity-100"
                )}
            >
                <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                        <ProfileCard />
                        <FreelanceCard />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
                        <TechStackCard />
                        <ProjectVideoCard
                            title="ZORO"
                            videoSrc="/zoro-demo.mp4"
                            projectUrl="https://zoro.skrdev.me"
                            category="DESIGN"
                        />
                        <ProjectVideoCard
                            title="STICKER VERSE"
                            videoSrc="/Video Project 7.mp4"
                            projectUrl="https://sticker-verse.skrdev.me/"
                            category="DESIGN"
                            githubUrl="https://github.com/sumitkumarraju/Sticker-Verse"
                        />
                    </div>

                    {/* Row 3 */}
                    <OtherProjects />
                </div>
            </main>
        </>
    );
}
