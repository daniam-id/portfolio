import React from "react";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

export function AboutSection() {
    return (
        <section className="py-24 md:py-32 border-b border-black/10 scroll-mt-24" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <div className="flex items-baseline space-x-3 font-display text-xs md:text-sm font-medium tracking-widest text-gray-500 uppercase mb-8 md:mb-0">
                            <span className="text-black">01</span>
                            <span className="h-px w-8 bg-black/20 inline-block"></span>
                            <span>About</span>
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="relative">
                                <div className="aspect-[4/5] w-full overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                                    <ImageWithSkeleton
                                        src="/about-portrait.png"
                                        alt="Creative Developer Portrait"
                                        width={400}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h2 className="font-display text-3xl md:text-5xl font-light leading-tight uppercase">
                                    Web Developer &<br />
                                    <span className="font-medium">AI Enthusiast.</span>
                                </h2>

                                <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-800">
                                    <p>
                                        Hi, I'm a <strong>Web Developer</strong> and <strong>AI Enthusiast</strong> based in Indonesia.
                                    </p>
                                    <p>
                                        I build modern web experiences and explore how AI can be integrated into real,
                                        usable products. My work sits at the intersection of clean web development and
                                        practical AI adoption.
                                    </p>
                                    <p>
                                        I believe technology should solve actual problems, not just be a gimmick.
                                        Whether it's a web application, an internal dashboard, or an AI-powered tool,
                                        I focus on delivering real, measurable outcomes.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
                                    <div>
                                        <h3 className="font-display text-4xl font-medium">1+</h3>
                                        <p className="font-mono text-xs tracking-widest uppercase mt-2 text-gray-500">Years Experience</p>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-4xl font-medium">2+</h3>
                                        <p className="font-mono text-xs tracking-widest uppercase mt-2 text-gray-500">Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
