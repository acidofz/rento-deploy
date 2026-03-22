import React from 'react';

const Features = () => {
    const features = [
        { icon: '🔎', title: 'Smart Qidiruv', desc: 'Hudud, narx, xona soni, metro, qavat bo\'yicha filtrlar + xarita' },
        { icon: '✅', title: 'Tasdiqlangan E\'lonlar', desc: 'Uy egasi ID bilan tasdiqlanadi. Rasmlar moderatsiyadan o\'tadi' },
        { icon: '💬', title: 'Ichki Chat', desc: 'Uy egasi va ijarachi bevosita muloqot qiladi — o\'rtada hech kim yo\'q' },
        { icon: '📊', title: 'Narx Analitikasi', desc: 'Hududdagi o\'rtacha narxlar, trend va taqqoslash' },
        { icon: '⭐', title: 'Reyting Tizimi', desc: 'Uy egasi va ijarachi bir-birini baholaydi — ishonch ekosistemasi' },
        { icon: '🏢', title: 'Ofis Ijara', desc: 'Tijorat mulk: ofis, do\'kon, ombor — biznes segmenti' }
    ];

    return (
        <section id="features" style={{ padding: '80px 40px', background: '#0a0a0a' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '40px',
                    fontWeight: '800',
                    marginBottom: '16px',
                    textAlign: 'center'
                }}>
                    Yechim: <span style={{
                        background: 'var(--gradient-main)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Rento Platformasi</span>
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: 'var(--color-text-muted)',
                    marginBottom: '60px',
                    fontSize: '18px'
                }}>
                    Uy egasi va ijarachini to'g'ridan-to'g'ri bog'lovchi mobil ilova — dalolsiz, shaffof, tez
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            background: 'var(--bg-card-gradient)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '16px',
                            padding: '30px',
                            transition: 'transform 0.3s, border-color 0.3s'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                            }}
                        >
                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
                            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{feature.title}</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '15px' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
