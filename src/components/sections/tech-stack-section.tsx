import React from "react";

const stack = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Python", "Supabase", "PostgreSQL", "Firebase"]
    },
    {
        category: "AI & Tools",
        items: ["OpenAI API", "LangChain", "Figma", "Git", "Vercel", "Docker"]
    }
];

export function TechStackSection() {
    return (
        <section className="py-32 md:py-40 min-h-screen flex items-center border-y border-border bg-secondary/20" id="tech">
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
                                <ul className="space-y-3">
                                    {group.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                                            <div className="size-1.5 bg-primary rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
