import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

const projects = [
    {
        title: "fraditart Commission",
        category: "Client Work",
        description: "Conversion-focused landing page for an independent character illustrator. Features commission pricing, queue status tracking, and terms of service. Built with modern React patterns and optimized for performance.",
        image: "/projects/fraditart.png",
        tags: ["React", "Vite", "Landing Page"],
        year: "2026",
        status: "Live"
    },
    {
        title: "Real Project 1",
        category: "Web Application",
        description: "Description of your first real project. Highlight the problem you solved and the technologies you used.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        tags: ["React", "Next.js", "Tailwind"],
        year: "2025",
        status: "Active"
    },
    {
        title: "Real Project 2",
        category: "Mobile App / Website",
        description: "Description of your second real project. Focus on the impact and key features implemented.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60",
        tags: ["TypeScript", "Supabase", "Framer Motion"],
        year: "2024",
        status: "Shipped"
    }
];

export function ProjectsSection() {
    return (
        <section className="border-b border-black/10 scroll-mt-24" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Sidebar */}
                    <div className="md:col-span-3 py-24 md:py-32 border-b md:border-b-0 md:border-r border-black/10 pr-8">
                        <div className="sticky top-32">
                            <div className="flex items-baseline space-x-3 font-display text-xs md:text-sm font-medium tracking-widest text-gray-500 uppercase mb-8">
                                <span className="text-black">03</span>
                                <span className="h-px w-8 bg-black/20 inline-block"></span>
                                <span>Portfolio</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-light leading-tight uppercase mb-6">
                                Selected<br />Works
                            </h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                A glimpse into my recent projects. Each piece is crafted with attention to detail and performance.
                            </p>
                            <a href="#" className="inline-flex items-center text-sm font-medium uppercase tracking-wide hover:text-gray-500 transition-colors">
                                View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-9">
                        <div className="divide-y divide-black/10">
                            {projects.map((project, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="group block p-8 md:p-12 hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 aspect-video overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500">
                                            <ImageWithSkeleton
                                                src={project.image}
                                                alt={project.title}
                                                width={800}
                                                height={450}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <span className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-2 block">
                                                        {project.category}
                                                    </span>
                                                    <h3 className="font-display text-2xl md:text-3xl font-medium uppercase">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                                <span className={`px-3 py-1 border border-current rounded-full font-mono text-xs uppercase tracking-widest ${project.status === 'Active' ? 'border-dashed' : 'border-solid'}`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <p className="text-gray-500 group-hover:text-gray-300 font-light leading-relaxed mb-6 max-w-xl">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, idx) => (
                                                    <span key={idx} className="font-mono text-xs uppercase tracking-wide text-gray-400 group-hover:text-gray-500">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
