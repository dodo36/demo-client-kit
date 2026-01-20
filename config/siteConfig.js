import { Zap, Shield, TrendingUp, Globe } from 'lucide-react';

export const siteConfig = {
    brand: {
        name: "Agency.",
        description: "Premium Digital Solutions for Modern Businesses.",
        url: "https://demo-client-kit.vercel.app", // Placeholder
        ogImage: "/og.png",
    },
    hero: {
        title: "Elevate Your Presence",
        subtitle: "Premium Digital Solutions for Modern Businesses. We craft experiences that convert.",
        ctaPrimary: "Get Started",
        ctaSecondary: "View Services",
    },
    features: [
        {
            icon: <Globe className="feature-icon" />,
            title: "Global Reach",
            description: "Expand your market with our international SEO strategies."
        },
        {
            icon: <Zap className="feature-icon" />,
            title: "Lightning Fast",
            description: "Optimized performance ensuring sub-second load times."
        },
        {
            icon: <Shield className="feature-icon" />,
            title: "Secure by Design",
            description: "Enterprise-grade security standards built into every project."
        },
        {
            icon: <TrendingUp className="feature-icon" />,
            title: "Data Driven",
            description: "Analytics integration to track and improve your conversion rates."
        }
    ],
    contact: {
        title: "Let's Talk Business",
        subtitle: "Ready to transform your digital strategy? Send us a message.",
        form: {
            name: "Name",
            email: "Email",
            message: "Message",
            btn: "Send Message"
        }
    },
    footer: {
        copyright: "All rights reserved.",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "contact@agency.com", href: "mailto:contact@agency.com" },
        ]
    }
};
