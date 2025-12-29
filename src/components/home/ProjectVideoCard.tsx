"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ProjectVideoCardProps {
    title: string;
    videoSrc: string;
    projectUrl: string;
}

export const ProjectVideoCard = ({
    title,
    videoSrc,
    projectUrl,
}: ProjectVideoCardProps) => {
    return (
        <CardContainer className="inter-var md:col-span-2">
            <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-zinc-800 w-full h-auto rounded-3xl p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <CardItem
                            translateZ="50"
                            className="text-3xl font-bold text-white mb-2"
                        >
                            {title}
                        </CardItem>
                    </div>
                    <a
                        href={projectUrl}
                        target="_blank"
                        className="p-3 bg-white text-black rounded-full group-hover/card:rotate-45 transition-transform"
                    >
                        <ArrowUpRight size={24} />
                    </a>
                </div>

                <CardItem translateZ="100" className="w-full mt-4">
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

                <div className="flex justify-between items-center mt-8">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={projectUrl}
                        target="_blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-zinc-400 hover:text-white transition-colors"
                    >
                        VIEW
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};
