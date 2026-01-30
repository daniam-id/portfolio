import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function HeroSection04() {
    return (
        <section className="relative min-h-screen pt-20 flex flex-col justify-between border-b border-black/10 bg-white">
            {/* Background Grid Lines (Visual Decoration) */}
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="h-full w-px bg-black/5 hidden md:block" />
                <div className="h-full w-px bg-black/5 hidden md:block" />
                <div className="h-full w-px bg-black/5 hidden md:block" />
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl"
                >
                    <div className="mb-6 flex items-center space-x-2">
                        <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                            System Online — {siteConfig.year}
                        </span>
                    </div>

                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-black mb-12 uppercase">
                        {siteConfig.hero.headline}
                        <br />
                        <span className="text-gray-400">{siteConfig.hero.subheadline}</span>
                    </h1>

                    <div className="max-w-xl text-lg md:text-xl font-light leading-relaxed text-gray-800 space-y-2">
                        {Array.isArray(siteConfig.hero.description) ? (
                            siteConfig.hero.description.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))
                        ) : (
                            <p>{siteConfig.hero.description}</p>
                        )}
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10 border-t border-black/10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
                        {[
                            { label: "Experience", value: "1+" },
                            { label: "Projects", value: "2+" },
                            { label: "Based In", value: "Indonesia" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className={`py-8 ${i === 0 ? "pl-0" : "pl-6"} ${i === 2 ? "pr-0" : "pr-6"
                                    }`}
                            >
                                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                                    {stat.label}
                                </p>
                                <p className="font-display text-3xl md:text-4xl font-medium">
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
