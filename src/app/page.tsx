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
        // Split Shutter Animation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Spotlight Effect Script
        const cards = document.querySelectorAll('.bento-card');

        const handleMouseMove = (e: MouseEvent, card: Element) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
            (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        };

        cards.forEach(card => {
            const listener = (e: Event) => handleMouseMove(e as MouseEvent, card);
            card.addEventListener('mousemove', listener);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', () => { });
            });
        };
    }, [loading]);

    return (
        <>
            {/* Split Shutter Preloader */}
            <div className={cn(
                "fixed inset-0 z-50 pointer-events-none",
                loading && "pointer-events-auto"
            )}>
                {/* Left Panel */}
                <div
                    className={cn(
                        "fixed top-0 left-0 w-1/2 h-full bg-black flex items-center justify-end pr-8 transition-transform duration-1000 ease-in-out",
                        !loading && "-translate-x-full"
                    )}
                >
                    <div className="text-right">
                        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter font-lilex">
                            SKR
                        </h1>
                    </div>
                </div>

                {/* Right Panel */}
                <div
                    className={cn(
                        "fixed top-0 right-0 w-1/2 h-full bg-black flex items-center justify-start pl-8 transition-transform duration-1000 ease-in-out",
                        !loading && "translate-x-full"
                    )}
                >
                    <div className="text-left">
                        <p className="text-white/90 text-xs sm:text-sm md:text-lg font-medium tracking-[0.2em] uppercase">
                            Digital Design Studio
                        </p>
                    </div>
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
