import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';

        try {
            const res = await fetch(`http://localhost:3000${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Authentication failed');

            if (data.token) {
                login(data.token);
                navigate('/');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            color: 'white'
        }}>
            <div style={{
                background: '#1e293b',
                padding: '40px',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '400px',
                border: '1px solid var(--border-color)'
            }}>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
                    {isLogin ? 'Sign In' : 'Create Account'}
                </h2>

                {error && <div style={{ color: '#f87171', marginBottom: '16px', textAlign: 'center' }}>{error}</div>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            background: '#0f172a',
                            border: '1px solid var(--border-color)',
                            color: 'white'
                        }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            background: '#0f172a',
                            border: '1px solid var(--border-color)',
                            color: 'white'
                        }}
                        required
                    />
                    <button type="submit" style={{
                        padding: '12px',
                        borderRadius: '8px',
                        background: 'var(--gradient-main)',
                        color: 'white',
                        fontWeight: 'bold',
                        marginTop: '8px'
                    }}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <p style={{ marginTop: '20px', textAlign: 'center', color: '#94a3b8' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ color: 'var(--color-primary)', background: 'none', textDecoration: 'underline' }}
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;
