import React from "react";
import { Code2, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies like React, Next.js, and Astro. Fast, responsive, and SEO-friendly.",
        icon: Code2,
        features: ["Landing Pages", "Company Profiles", "E-commerce", "Web Applications"]
    },
    {
        title: "AI Solutions",
        description: "Leverage the power of Artificial Intelligence to automate your business processes. From custom chatbots to workflow automation.",
        icon: Bot,
        features: ["Custom Chatbots", "Process Automation", "AI Integration", "Data Analysis"]
    }
];

export function ServicesSection() {
    return (
        <section className="py-20 relative bg-secondary/30">
            <div className="mx-auto max-w-7xl px-6 relative z-20">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-[-2px] mb-6">
                        WHAT I DO
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Combining technical expertise with creative problem solving to deliver high-quality digital solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors duration-300"
                        >
                            <div className="mb-6 inline-flex p-4 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                                <service.icon className="size-8 text-primary" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                                        <div className="size-1.5 rounded-full bg-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground w-full justify-between">
                                Learn More
                                <ArrowRight className="size-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
