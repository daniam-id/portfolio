import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Twitter: Twitter,
    Instagram: Instagram,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-xl font-bold tracking-tighter mb-2">
                            PORTFOLIO<span className="text-primary">.</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} All rights reserved. Built with Astro & React.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {siteConfig.socialLinks.map((social) => {
                            const Icon = iconMap[social.name];
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {Icon && <Icon size={20} />}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
