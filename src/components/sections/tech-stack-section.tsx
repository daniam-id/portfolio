import React from "react";

const stack = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
        ]
    },
    {
        category: "AI & Tools",
        items: [
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
        ]
    }
];

export function TechStackSection() {
    return (
        <section className="py-24 md:py-32 border-b border-black/10 scroll-mt-24" id="tech">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <div className="flex items-baseline space-x-3 font-display text-xs md:text-sm font-medium tracking-widest text-gray-500 uppercase mb-8 md:mb-0">
                            <span className="text-black">04</span>
                            <span className="h-px w-8 bg-black/20 inline-block"></span>
                            <span>Tech</span>
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <div className="mb-16 max-w-3xl">
                            <h2 className="font-display text-3xl md:text-5xl font-light leading-tight uppercase mb-6">
                                Tech Stack
                            </h2>
                            <p className="text-xl text-gray-800 font-light leading-relaxed">
                                The tools and technologies I use to bring ideas to life. Always learning and exploring new things.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {stack.map((group, index) => (
                                <div key={index}>
                                    <h3 className="font-mono text-xs uppercase text-gray-500 mb-6 tracking-widest border-b border-black/10 pb-2">
                                        {group.category}
                                    </h3>
                                    <div className="space-y-4">
                                        {group.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 group cursor-default">
                                                <img src={item.icon} alt={item.name} className="size-5 grayscale group-hover:grayscale-0 transition-all" />
                                                <span className="font-display text-lg font-light text-gray-800 group-hover:text-black transition-colors">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
