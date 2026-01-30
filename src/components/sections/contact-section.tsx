import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-32 md:py-48 relative overflow-hidden scroll-mt-24" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12 uppercase">
                    Let's Work<br />
                    Together.
                </h2>

                <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto mb-16">
                    Have a project in mind? Let's discuss how we can help your business grow.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Button size="lg" className="h-16 px-10 text-lg uppercase tracking-wide rounded-none" asChild>
                        <a href="https://wa.me/6285156057360" target="_blank" rel="noopener noreferrer">
                            Chat on WhatsApp <MessageCircle className="ml-3 size-5" />
                        </a>
                    </Button>

                    <Button variant="outline" size="lg" className="h-16 px-10 text-lg uppercase tracking-wide rounded-none" asChild>
                        <a href="mailto:adam.daniamm@gmail.com">
                            Send Email <Mail className="ml-3 size-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
