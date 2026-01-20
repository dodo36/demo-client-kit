import { siteConfig } from '@/config/siteConfig';

export default function ContactForm() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">{siteConfig.contact.title}</h2>
                    <p className="section-subtitle">{siteConfig.contact.subtitle}</p>
                </div>

                <form className="contact-form" action="/api/contact" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">{siteConfig.contact.form.name}</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{siteConfig.contact.form.email}</label>
                        <input type="email" id="email" name="email" placeholder="john@company.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{siteConfig.contact.form.message}</label>
                        <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">{siteConfig.contact.form.btn}</button>
                </form>
            </div>
        </section>
    );
}
