import React from "react";
import { Code2, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Web Development",
        description: "Frontend development with strong attention to UI, UX, and performance. Full-stack applications built for scalability and maintainability.",
        icon: Code2,
        features: ["Web Applications", "Dashboards", "Modern UI/UX", "Responsive Design"]
    },
    {
        title: "AI Integration",
        description: "AI-powered features integrated into web products. I focus on practical solutions that solve real problems, not just gimmicks.",
        icon: Bot,
        features: ["LLM Integration", "Prompt Engineering", "Workflow Automation", "AI-Powered Tools"]
    }
];

export function ServicesSection() {
    return (
        <section className="py-20 relative bg-secondary/30 scroll-mt-24" id="services">
            <div className="mx-auto max-w-7xl px-6 relative z-20">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-[-2px] mb-6">
                        WHAT I BUILD
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        User-first solutions with a focus on usability, automation, and real-world impact.
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
