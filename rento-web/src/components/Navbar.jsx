import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [lang, setLang] = useState('uz');
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(12px)',
            background: 'rgba(15, 23, 42, 0.85)',
            borderBottom: '1px solid var(--border-color)'
        }}>
            <div style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', color: 'var(--color-text)' }}>
                RENTO
            </div>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <a href="#features" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>Features</a>
                <a href="#comparison" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>Comparison</a>
                <a href="#market" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>Market</a>

                <div style={{ display: 'flex', gap: '4px', background: 'rgba(30, 41, 59, 0.5)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    {['uz', 'ru', 'en'].map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            style={{
                                padding: '4px 10px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                background: lang === l ? 'var(--gradient-main)' : 'transparent',
                                color: lang === l ? 'white' : 'var(--color-text-muted)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {l}
                        </button>
                    ))}
                </div>

                {user ? (
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <span style={{ color: 'white', fontSize: '14px' }}>Hi, {user.username}</span>
                        <Link to="/create-listing" style={{
                            background: 'var(--gradient-main)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '13px'
                        }}>
                            + Post Ad
                        </Link>
                        <button onClick={logout} style={{
                            background: 'transparent',
                            color: '#94a3b8',
                            border: '1px solid #334155',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '13px',
                            transition: 'all 0.3s ease'
                        }}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/auth" style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}>
                        Sign In / Register
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
