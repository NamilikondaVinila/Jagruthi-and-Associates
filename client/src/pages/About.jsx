import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users2, History, Target } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '15+' },
        { label: 'Client Satisfaction', value: '99%' },
        { label: 'Successful Filings', value: '10k+' },
        { label: 'Expert Team', value: '5+' },
    ];

    return (
        <div className="about-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container">
                <section style={{ marginBottom: '100px' }}>
                    <div className="section-header">
                        <h2>About <span style={{ color: 'var(--accent)' }}>Jagruthi & Associates</span></h2>
                        <p>A legacy of financial excellence and integrity.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <h3 style={{ fontSize: '2.1rem', marginBottom: '1.5rem', fontWeight: '800' }}>Our Mission</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                                At Jagruthi & Associates, we believe in empowering businesses and individuals with precise financial guidance. Our team, led by seasoned Chartered Accountants, is dedicated to simplifying complex financial regulations and helping you achieve sustainable growth.
                            </p>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Since our inception, we have served over 500+ businesses across auditing, taxation, and legal compliance sectors.
                            </p>
                        </motion.div>
                        <motion.div
                            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {stats.map((s, i) => (
                                <div key={i} className="glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '1rem' }}>
                                    <h4 style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '800' }}>{s.value}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="glass" style={{ padding: '4rem', borderRadius: '2rem' }}>
                    <div className="section-header" style={{ marginBottom: '3rem' }}>
                        <h2>Meet Our <span style={{ color: 'var(--accent)' }}>Leadership</span></h2>
                    </div>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <Users2 size={64} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Senior CA Team</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Our firm is guided by a team of highly qualified Chartered Accountants with extensive experience in Indian taxation, international auditing standards, and corporate law. We bring a wealth of knowledge to every project, ensuring your financial health is in the best hands.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
