import React from "react";
import { Code2, Bot, ArrowRight } from "lucide-react";

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
        <section className="py-24 md:py-32 border-b border-black/10 scroll-mt-24" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <div className="flex items-baseline space-x-3 font-display text-xs md:text-sm font-medium tracking-widest text-gray-500 uppercase mb-8 md:mb-0">
                            <span className="text-black">02</span>
                            <span className="h-px w-8 bg-black/20 inline-block"></span>
                            <span>Services</span>
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <div className="mb-16 max-w-3xl">
                            <h2 className="font-display text-3xl md:text-5xl font-light leading-tight uppercase mb-6">
                                What I Build
                            </h2>
                            <p className="text-xl text-gray-800 font-light leading-relaxed">
                                User-first solutions with a focus on usability, automation, and real-world impact.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative border border-black/10 p-8 hover:border-black transition-colors duration-300"
                                >
                                    <div className="mb-6 inline-flex p-3 border border-black/10 rounded-none group-hover:bg-black group-hover:text-white transition-colors">
                                        <service.icon className="size-6" />
                                    </div>

                                    <h3 className="font-display text-2xl font-medium mb-4 uppercase">{service.title}</h3>
                                    <p className="text-gray-500 mb-8 leading-relaxed font-light">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm font-mono uppercase tracking-wide text-gray-500">
                                                <div className="size-1 bg-black" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center text-sm font-medium uppercase tracking-wide group-hover:text-gray-500 transition-colors cursor-pointer">
                                        Learn More
                                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
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
