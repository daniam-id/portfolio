import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-40 md:py-52 min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-24" id="contact">
            <div className="mx-auto max-w-7xl px-6 relative z-20 text-center w-full">
                <h2 className="text-5xl md:text-8xl font-bold tracking-[-4px] md:tracking-[-8px] mb-8">
                    LET'S WORK <br className="hidden md:block" /> TOGETHER
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Have a project in mind? Let's discuss how we can help your business grow.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
                        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 size-5" />
                            Chat on WhatsApp
                        </a>
                    </Button>

                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
                        <a href="mailto:hello@example.com">
                            <Mail className="mr-2 size-5" />
                            Send Email
                        </a>
                    </Button>
                </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
}
