import { siteConfig } from '@/config/siteConfig';

export default function Features() {
    return (
        <section className="features-section" id="features">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
                {siteConfig.features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="icon-wrapper">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-text">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
