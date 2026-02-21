import React from 'react';
import { motion } from 'framer-motion';
import {
    Calculator,
    Percent,
    BadgeCheck,
    Building2,
    Briefcase,
    UserSquare2,
    FileCheck,
    Store,
    ShieldCheck,
    FileSignature,
    Gem,
    CreditCard,
    ClipboardCheck,
    Globe2,
    Users
} from 'lucide-react';

const Services = () => {
    const allServices = [
        { icon: <Calculator size={40} />, name: 'Income Tax Returns', desc: 'Expert filing for individuals, firms, and companies with optimization.' },
        { icon: <Percent size={40} />, name: 'TDS Returns', desc: 'Timely and accurate TDS return filings and reconciliation.' },
        { icon: <BadgeCheck size={40} />, name: 'GST Registrations & Filings', desc: 'Complete GST solutions from registration to monthly/annual returns.' },
        { icon: <Building2 size={40} />, name: 'Company & Firm Registrations', desc: 'End-to-end support for PVT LTD, LLP, Partnership, and Firm setups.' },
        { icon: <Briefcase size={40} />, name: 'MCA Filings', desc: 'Corporate compliance, annual returns, and secretarial services.' },
        { icon: <UserSquare2 size={40} />, name: 'Accounting and HR Services', desc: 'Professional bookkeeping and streamlined human resource management.' },
        { icon: <FileCheck size={40} />, name: 'Labour Licence', desc: 'Registration and renewal for statutory labour compliance.' },
        { icon: <Store size={40} />, name: 'Trade Licence', desc: 'Procuring local authority trade licenses and ensuring continuity.' },
        { icon: <ShieldCheck size={40} />, name: 'MSME Licence (Udyam)', desc: 'MSME/Udyam registration to unlock government benefits and schemes.' },
        { icon: <FileSignature size={40} />, name: 'Trademark Registrations', desc: 'Protecting your brand identity through expert trademark filings.' },
        { icon: <Gem size={40} />, name: 'Networth Certificate', desc: 'Certified Networth certificates for US, UK, and Canada visa/financial needs.' },
        { icon: <CreditCard size={40} />, name: 'Loan Processing', desc: 'Documentation, CMA reports, and guidance for all types of loans.' },
        { icon: <ClipboardCheck size={40} />, name: 'Internal Audits', desc: 'In-depth internal auditing to ensure operational efficiency and control.' },
        { icon: <Globe2 size={40} />, name: 'Import Export License', desc: 'IEC registration for businesses looking to expand globally.' },
        { icon: <Users size={40} />, name: 'PT, PF & ESI', desc: 'Comprehensive compliance and return filings for PT, PF, and ESI.' },
    ];

    return (
        <div className="services-page" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Our Professional <span style={{ color: 'var(--accent)' }}>Services</span></h2>
                    <p>Expert financial and legal solutions designed to accelerate your business growth.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {allServices.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.02, backgroundColor: 'var(--secondary)' }}
                            className="glass"
                            style={{ padding: '2.5rem', borderRadius: '1.5rem', cursor: 'default' }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>{service.icon}</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.35rem', fontWeight: '700' }}>{service.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
