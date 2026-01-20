"use client";

import { siteConfig } from '@/config/siteConfig';

export default function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">{siteConfig.hero.title}</h1>
                <p className="hero-subtitle">{siteConfig.hero.subtitle}</p>
                <div className="cta-group">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn btn-primary"
                    >
                        {siteConfig.hero.ctaPrimary}
                    </button>
                    <button
                        onClick={() => scrollToSection('features')}
                        className="btn btn-secondary"
                    >
                        {siteConfig.hero.ctaSecondary}
                    </button>
                </div>
            </div>
            <div className="hero-background-elements">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>
        </section>
    );
}
