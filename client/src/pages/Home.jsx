import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, FileText, Globe, Building2, UserSquare2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const highlights = [
        { icon: <BarChart3 className="accent-color" />, title: 'Statutory Audits', desc: 'Expert auditing services ensuring compliance and business transparency.' },
        { icon: <ShieldCheck className="accent-color" />, title: 'Tax & TDS', desc: 'Comprehensive income tax and TDS return filings for firms and individuals.' },
        { icon: <Building2 className="accent-color" />, title: 'Registrations', desc: 'Hassle-free GST, MSME, Company, and Trademark registrations.' },
        { icon: <UserSquare2 className="accent-color" />, title: 'Consultancy', desc: 'Professional financial guidance and Networth certifications for global needs.' },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" style={{
                paddingTop: '160px',
                paddingBottom: '100px',
                background: 'radial-gradient(circle at top right, rgba(202, 138, 4, 0.1), transparent 40%)'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '4.5rem', fontWeight: '950', marginBottom: '1.5rem', lineHeight: '1.1', letterSpacing: '-0.05em' }}
                    >
                        Jagruthi & <span style={{ color: 'var(--accent)' }}>Associates</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: '1.6' }}
                    >
                        Your trusted Chartered Accountant partners for auditing, taxation, and legal compliance. Dedicated to excellence in every financial activity.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
                    >
                        <Link to="/services" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem' }}>
                            View Our Services <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Schedule Consultation</Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Highlights Strip */}
            <section style={{ padding: '60px 0', background: 'rgba(30, 41, 59, 0.3)', borderY: '1px solid var(--glass-border)' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '800' }}>15+</h4>
                        <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Years of Expertise</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '800' }}>10k+</h4>
                        <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Tax Filings Done</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '800' }}>500+</h4>
                        <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Active Businesses</p>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Why Partner With <span style={{ color: 'var(--accent)' }}>Us?</span></h2>
                        <p>We combine decades of technical expertise with a commitment to integrity and client success.</p>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="glass"
                                style={{ padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}
                            >
                                <div style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>{h.icon}</div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{h.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{h.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '100px 0', background: 'var(--secondary)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '800' }}>Ready to Secure Your Growth?</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Our team of Chartered Accountants is just a call away. Get reliable, professional, and timely financial services.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Contact Our CA Team Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
