import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "GitHub", href: "https://github.com", icon: Github },
        { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
        { name: "Twitter", href: "https://twitter.com", icon: Twitter },
        { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    ];

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
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
