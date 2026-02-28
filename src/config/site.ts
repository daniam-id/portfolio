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
    name: "ADAM DANIAM",
    title: "CREATIVE DESIGNER",
    tagline: "AI ENTHUSIAST",
    location: "BASED IN INDONESIA",
    year: 2004,
    navLinks: [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "/#projects" },
        { name: "Tech", href: "/#tech" },
        { name: "Blog", href: "/blog/" },
    ],
    socialLinks: [
        { name: "GitHub", href: "https://github.com/daniam-id/" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/adam-dani-apta-m-099408323/" },
        { name: "Instagram", href: "https://www.instagram.com/daniam.dnm/" },
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
