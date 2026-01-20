"use client";

import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const validateForm = () => {
        if (formData.name.trim().length < 2) return "Name must be at least 2 characters";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return "Please enter a valid email";
        if (formData.message.trim().length < 10) return "Message must be at least 10 characters";
        return null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (status.error) setStatus(prev => ({ ...prev, error: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setStatus(prev => ({ ...prev, error }));
            return;
        }

        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ loading: false, success: false, error: data.error || 'Something went wrong' });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: 'Failed to send message' });
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">{siteConfig.contact.title}</h2>
                    <p className="section-subtitle">{siteConfig.contact.subtitle}</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {status.success && (
                        <div style={{ padding: '1rem', background: '#22c55e', color: 'white', borderRadius: '4px', marginBottom: '1rem' }}>
                            Message sent successfully! We'll get back to you soon.
                        </div>
                    )}

                    {status.error && (
                        <div style={{ padding: '1rem', background: '#ef4444', color: 'white', borderRadius: '4px', marginBottom: '1rem' }}>
                            {status.error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="name">{siteConfig.contact.form.name}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            disabled={status.loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{siteConfig.contact.form.email}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                            disabled={status.loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{siteConfig.contact.form.message}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            required
                            disabled={status.loading}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        disabled={status.loading}
                        style={{ opacity: status.loading ? 0.7 : 1 }}
                    >
                        {status.loading ? 'Sending...' : siteConfig.contact.form.btn}
                    </button>
                </form>
            </div>
        </section>
    );
}
