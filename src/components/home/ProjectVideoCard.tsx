"use client";

import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ProjectVideoCardProps {
    title: string;
    videoSrc: string;
    projectUrl: string;
    category?: string;
    githubUrl?: string;
}

export const ProjectVideoCard = ({
    title,
    videoSrc,
    projectUrl,
    category = "DESIGN",
    githubUrl,
}: ProjectVideoCardProps) => {
    return (
        <CardContainer className="inter-var md:col-span-2">
            <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-zinc-800 w-full h-auto rounded-3xl p-4 sm:p-6">
                {/* Design Category Label - Top Right Corner */}
                <div className="absolute top-0 right-0 flex items-center z-10">
                    <div className="bg-gradient-to-r from-brandRed via-orange-500 to-yellow-500 rounded-tr-3xl rounded-bl-2xl shadow-lg shadow-brandRed/50 group-hover/card:shadow-brandRed/80 transition-shadow duration-300 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2">
                        <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">
                            {category}
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-start mb-3 sm:mb-4 mt-8 sm:mt-10">
                    <div className="flex-1 pr-2">
                        <CardItem
                            translateZ="50"
                            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 break-words"
                        >
                            {title}
                        </CardItem>
                    </div>
                    <a
                        href={projectUrl}
                        target="_blank"
                        className="p-2 sm:p-3 bg-white text-black rounded-full group-hover/card:rotate-45 transition-transform flex-shrink-0 mt-8 sm:mt-10"
                    >
                        <ArrowUpRight size={20} className="sm:hidden" />
                        <ArrowUpRight size={24} className="hidden sm:block" />
                    </a>
                </div>

                <CardItem translateZ="100" className="w-full mt-2 sm:mt-4">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </CardItem>

                <div className="flex justify-between items-center mt-4 sm:mt-8">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={projectUrl}
                        target="_blank"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-normal dark:text-white text-zinc-400 hover:text-white transition-colors"
                    >
                        VIEW PROJECT
                    </CardItem>
                    {githubUrl && (
                        <CardItem
                            translateZ={20}
                            as="a"
                            href={githubUrl}
                            target="_blank"
                            className="p-2 sm:p-2.5 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors text-zinc-300"
                            title="View GitHub Repository"
                        >
                            <Github size={16} className="sm:hidden" />
                            <Github size={18} className="hidden sm:block" />
                        </CardItem>
                    )}
                </div>
            </CardBody>
        </CardContainer>
    );
};
