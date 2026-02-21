import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Building, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="contact-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Contact <span style={{ color: 'var(--accent)' }}>Jagruthi & Associates</span></h2>
                    <p>We are ready to assist you. Reach out to us for any financial or legal consultation.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem' }}>Get In Touch</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '0.75rem', color: 'var(--accent)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Call Us Today</p>
                                    <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>7207401601, 8885801601</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '0.75rem', color: 'var(--accent)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Email Us</p>
                                    <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>jagruthiandassociates@gmail.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '0.75rem', color: 'var(--accent)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Head Office</p>
                                    <p style={{ fontWeight: '700', fontSize: '1.1rem', lineHeight: '1.5' }}>
                                        3-5-41, Shanthinagar, Near Varalakshmi Function Hall, <br />
                                        Sircilla, Dist: Rajanna Sircilla, T.S - 505301.
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '0.75rem', color: 'var(--accent)' }}>
                                    <Building size={24} />
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Our Branches</p>
                                    <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>KPHB, Nallakunta, LB Nagar</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass"
                        style={{ padding: '3rem', borderRadius: '2rem' }}
                    >
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <CheckCircle size={64} style={{ color: '#10b981', marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Thank You!</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Your message has been sent to Jagruthi & Associates. We will get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your Name"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--glass-border)',
                                            padding: '1rem',
                                            borderRadius: '0.75rem',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="email@example.com"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--glass-border)',
                                            padding: '1rem',
                                            borderRadius: '0.75rem',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                                    <textarea
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your requirements"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--glass-border)',
                                            padding: '1rem',
                                            borderRadius: '0.75rem',
                                            color: 'white',
                                            resize: 'none',
                                            outline: 'none'
                                        }}
                                    ></textarea>
                                </div>
                                <button
                                    disabled={status === 'loading'}
                                    className="btn btn-primary"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1.1rem', fontSize: '1.1rem', opacity: status === 'loading' ? 0.7 : 1 }}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={20} />
                                </button>
                                {status === 'error' && <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem' }}>Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
