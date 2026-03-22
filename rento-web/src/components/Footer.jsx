import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#0a0a0a',
            borderTop: '1px solid var(--border-color)',
            padding: '40px 40px',
            color: 'var(--color-text-muted)',
            textAlign: 'center',
            fontSize: '14px'
        }}>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>RENTO</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>About</a>
                <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Terms</a>
                <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Privacy</a>
                <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Contact</a>
            </div>
            <p>&copy; 2026 Rento Platform. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
