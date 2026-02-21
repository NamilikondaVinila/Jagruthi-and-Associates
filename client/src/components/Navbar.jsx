import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Landmark, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="glass" style={{ position: 'fixed', width: '100%', zIndex: 1000, top: 0 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.5rem', color: 'var(--accent)' }}>
                    <Landmark size={32} />
                    <span>Jagruthi & Associates</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    style={{
                                        fontWeight: '500',
                                        color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-main)',
                                        position: 'relative'
                                    }}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <div style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--accent)' }}></div>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary">Get Consultation</Link>
                </div>

                {/* Mobile Toggle (Simplified for now) */}
                <div style={{ display: 'none' }}>
                    {/* Add mobile menu logic here if needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
