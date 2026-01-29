/**
 * Site configuration
 * Centralized configuration for portfolio site content
 */

export interface NavLink {
    name: string;
    href: string;
}

export interface SocialLink {
    name: string;
    href: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    tagline: string;
    location: string;
    year: number;
    navLinks: NavLink[];
    socialLinks: SocialLink[];
    services: string[];
    hero: {
        headline: string;
        subheadline: string;
        yearBadge: string;
        description: string | string[];
        ctaText: string;
    };
}

export const siteConfig: SiteConfig = {
    name: "ALI IMAM",
    title: "CREATIVE DESIGNER",
    tagline: "AI ENTHUSIAST",
    location: "BASED IN INDONESIA",
    year: 1996,
    navLinks: [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Tech", href: "#tech" },
        { name: "Contact", href: "#contact" },
    ],
    socialLinks: [
        { name: "GitHub", href: "https://github.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Twitter", href: "https://twitter.com" },
        { name: "Instagram", href: "https://instagram.com" },
    ],
    services: [
        "/ ART DIRECTION",
        "/ WEB DESIGN (UX/UI)",
        "/ WEB DEVELOPMENT",
    ],
    hero: {
        headline: "WEB DEVELOPER",
        subheadline: "AI ENTHUSIAST",
        yearBadge: "1,996",
        description: [
            "I'M EXPERIENCED WEB AND UX/UI DESIGNER,",
            "WHO DESIGN MEMORABLE WEB EXPERIENCES FOR",
            "BRANDS OF ALL SIZES",
        ],
        ctaText: "Book a call",
    },
};
