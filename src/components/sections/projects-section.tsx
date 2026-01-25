import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

const projects = [
    {
        title: "E-Commerce Dashboard",
        category: "Web Development",
        description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"]
    },
    {
        title: "AI Chat Assistant",
        category: "AI Solution",
        description: "Intelligent customer support chatbot capable of handling complex queries and automating ticket creation for support teams.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60",
        tags: ["Python", "OpenAI API", "React", "FastAPI"]
    }
];

export function ProjectsSection() {
    return (
        <section className="py-20 relative scroll-mt-24" id="projects">
            <div className="mx-auto max-w-7xl px-6 relative z-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-[-2px] mb-6">
                            SELECTED WORKS
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            A glimpse into my recent projects. Each piece is crafted with attention to detail and performance.
                        </p>
                    </div>
                    <Button variant="outline" size="lg" className="hidden md:flex">
                        View All Projects
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary mb-6 border border-border">
                                <ImageWithSkeleton
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-background/90 backdrop-blur-sm p-4 rounded-full">
                                        <ArrowUpRight className="size-6 text-foreground" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-primary mb-1">{project.category}</p>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" size="lg">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
