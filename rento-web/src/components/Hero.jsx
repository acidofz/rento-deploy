import React from 'react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '120px 20px 60px',
            background: 'radial-gradient(circle at top center, #1e293b 0%, #0a0a0a 70%)'
        }}>
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{
                    fontSize: '80px',
                    fontWeight: '900',
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '24px',
                    letterSpacing: '-2px',
                    lineHeight: '1.1'
                }}>
                    Rento
                </h1>
                <p style={{
                    fontSize: '22px',
                    color: 'var(--color-text-muted)',
                    maxWidth: '750px',
                    margin: '0 auto 48px',
                    lineHeight: '1.6'
                }}>
                    O'zbekistonning birinchi maklersiz ko'chmas mulk ijara platformasi
                </p>
            </div>

            {/* Mock Search Bar */}
            <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(12px)',
                padding: '12px',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '12px',
                maxWidth: '900px',
                width: '100%',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <input type="text" placeholder="Manzil (Tuman yoki Metro)" style={{
                        width: '100%',
                        height: '54px',
                        background: '#0f172a',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        padding: '0 20px',
                        color: 'white',
                        fontSize: '15px'
                    }} />
                </div>
                <div style={{ width: '180px' }}>
                    <select style={{
                        width: '100%',
                        height: '54px',
                        background: '#0f172a',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        padding: '0 20px',
                        color: 'white',
                        fontSize: '15px',
                        appearance: 'none' // simplified for now
                    }}>
                        <option>Xonalar soni</option>
                        <option>1 xona</option>
                        <option>2 xona</option>
                        <option>3 xona</option>
                        <option>4+ xona</option>
                    </select>
                </div>
                <div style={{ width: '200px' }}>
                    <input type="text" placeholder="Narx (dan)" style={{
                        width: '100%',
                        height: '54px',
                        background: '#0f172a',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        padding: '0 20px',
                        color: 'white',
                        fontSize: '15px'
                    }} />
                </div>
                <button style={{
                    background: 'var(--gradient-main)',
                    color: 'white',
                    padding: '0 40px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '700',
                    transition: 'transform 0.2s'
                }}>
                    Qidirish
                </button>
            </div>

            <p style={{
                marginTop: '30px',
                fontSize: '13px',
                color: '#475569',
                letterSpacing: '2px',
                textTransform: 'uppercase'
            }}>
                INVESTOR TAQDIMOTI &nbsp;·&nbsp; 2026
            </p>
        </section>
    );
};

export default Hero;
