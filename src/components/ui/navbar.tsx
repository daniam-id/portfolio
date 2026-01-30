import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 bg-white/90 backdrop-blur-md",
                    isScrolled ? "py-0" : "py-0"
                )}
            >
                <div className="w-full flex justify-between items-stretch h-16 md:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-black/10">
                    {/* Logo Section */}
                    <div className="flex items-center pr-6 md:pr-8 border-r border-black/10">
                        <a href="/" className="font-display font-bold text-2xl tracking-tighter uppercase flex items-center gap-1">
                            {siteConfig.name}<span className="text-black">.</span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-stretch ml-auto">
                        {siteConfig.navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center px-8 border-l border-black/10 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-200 group relative overflow-hidden"
                            >
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="flex items-center px-8 border-l border-black/10 bg-black text-white text-sm font-medium uppercase tracking-wide hover:bg-factory-gray hover:text-black transition-colors duration-300"
                        >
                            Let's Talk <ArrowUpRight className="ml-2 w-4 h-4" />
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center justify-center px-6 border-l border-black/10 ml-auto"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-black/10">
                            <span className="font-display font-bold text-2xl uppercase">Menu</span>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                        <div className="flex flex-col p-6 space-y-6">
                            {siteConfig.navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-display text-4xl md:text-6xl font-light uppercase hover:text-gray-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 inline-flex items-center justify-between w-full py-4 border-t border-b border-black font-display text-xl uppercase font-bold"
                            >
                                Let's Talk <ArrowUpRight className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
