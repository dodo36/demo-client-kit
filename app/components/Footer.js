import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>{siteConfig.brand.name}</h3>
                    <p>&copy; {new Date().getFullYear()} {siteConfig.footer.copyright}</p>
                </div>
                <div className="footer-links">
                    {siteConfig.footer.links.map((link, index) => (
                        <a key={index} href={link.href}>{link.label}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
