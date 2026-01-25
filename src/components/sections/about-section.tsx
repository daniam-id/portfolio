import React from "react";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

export function AboutSection() {
    return (
        <section className="py-20 relative overflow-hidden scroll-mt-24" id="about">
            <div className="mx-auto max-w-7xl px-6 relative z-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-500">
                            <ImageWithSkeleton
                                src="/about-portrait.png"
                                alt="Creative Developer Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-primary/20 rounded-lg hidden md:block"></div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-[-2px] mb-6">
                                ABOUT ME
                            </h2>
                            <div className="h-1 w-20 bg-primary"></div>
                        </div>

                        <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-muted-foreground">
                            <p>
                                Hi, I'm a creative developer based in Indonesia. I bridge the gap between
                                <span className="text-foreground font-bold"> design</span> and
                                <span className="text-foreground font-bold"> technology</span>.
                            </p>
                            <p>
                                With a background in web development and a passion for AI, I help businesses
                                build modern digital experiences that are not only visually stunning but also
                                intelligent and efficient.
                            </p>
                            <p>
                                I believe that the future of web is interactive, personalized, and automated.
                                Whether it's a portfolio, a landing page, or an AI-powered chatbot, I'm here
                                to bring your vision to life.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div>
                                <h3 className="text-3xl font-bold">1+</h3>
                                <p className="text-sm tracking-widest uppercase mt-1">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">2+</h3>
                                <p className="text-sm tracking-widest uppercase mt-1">Projects Done</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xl font-bold mb-4">Testimonials</h3>
                            <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                                <p className="italic text-muted-foreground mb-4">
                                    "Working with [Name] was an absolute pleasure. They delivered high-quality work on time and exceeded our expectations."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                        JD
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">John Doe</p>
                                        <p className="text-xs text-muted-foreground">CEO, Tech Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                    maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)",
                }}
            />
        </section>
    );
}
