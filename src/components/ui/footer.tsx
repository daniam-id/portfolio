import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-8 uppercase">
                            ADAM DANIAM.
                        </h2>
                        <p className="text-gray-400 text-xl font-light max-w-md">
                            Always exploring new technologies and open to interesting conversations.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-mono text-xs uppercase text-gray-500 mb-6 tracking-widest">
                                    Menu
                                </h4>
                                <ul className="space-y-4 font-display text-xl">
                                    {siteConfig.navLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="hover:text-gray-400 transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-mono text-xs uppercase text-gray-500 mb-6 tracking-widest">
                                    Connect
                                </h4>
                                <ul className="space-y-4 font-display text-xl">
                                    {siteConfig.socialLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-gray-400 transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 md:mt-0 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 font-mono uppercase tracking-wide">
                            <span>© {currentYear} All rights reserved. Built with Astro & React.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
