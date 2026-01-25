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
        <section className="py-32 md:py-40 min-h-screen flex items-center border-y border-border bg-secondary/20 scroll-mt-24" id="tech">
            <div className="mx-auto max-w-7xl px-6 w-full">
                <div className="grid md:grid-cols-4 gap-10">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">TECH STACK</h2>
                        <p className="text-muted-foreground text-sm">
                            The tools and technologies I use to bring ideas to life. Always learning and exploring new things.
                        </p>
                    </div>

                    <div className="md:col-span-3 grid md:grid-cols-3 gap-8">
                        {stack.map((group, index) => (
                            <div key={index}>
                                <h3 className="font-semibold mb-6 text-lg">{group.category}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {group.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors group">
                                            <img src={item.icon} alt={item.name} className="size-6 grayscale group-hover:grayscale-0 transition-all" />
                                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
