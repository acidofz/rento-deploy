import React from 'react';

const Comparison = () => {
    return (
        <section id="comparison" style={{ padding: '80px 40px', background: '#0f172a' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '40px',
                    fontWeight: '800',
                    marginBottom: '40px',
                    textAlign: 'center'
                }}>
                    Muammo: <span style={{
                        background: 'var(--gradient-main)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Dalollik Tuzog'i</span>
                </h2>

                <div style={{
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap'
                }}>
                    {/* BAD SIDE */}
                    <div style={{
                        flex: 1,
                        minWidth: '350px',
                        background: 'linear-gradient(135deg, #2d1515, #1a0a0a)',
                        border: '1px solid #7f1d1d',
                        borderRadius: '16px',
                        padding: '32px'
                    }}>
                        <h4 style={{ color: '#fca5a5', fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>❌ Hozirgi holat</h4>
                        <ul style={{ listStyle: 'none' }}>
                            {[
                                'Dalolga 50-100% oylik ijara to\'lanadi',
                                'Toshkentda 1-xonali: ~7.3M UZS → dalolga 3.6-7.3M UZS',
                                'Bu o\'rtacha oylik maoshning 50-100% ga teng',
                                'Soxta e\'lonlar, aldash hollari ko\'p',
                                'Uy topish 2-4 hafta, 10-20 ta ko\'rish'
                            ].map((item, i) => (
                                <li key={i} style={{
                                    padding: '8px 0',
                                    paddingLeft: '24px',
                                    position: 'relative',
                                    color: '#94a3b8',
                                    fontSize: '15px'
                                }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#f87171' }}>✗</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GOOD SIDE */}
                    <div style={{
                        flex: 1,
                        minWidth: '350px',
                        background: 'linear-gradient(135deg, #0d2818, #0a1a10)',
                        border: '1px solid #166534',
                        borderRadius: '16px',
                        padding: '32px'
                    }}>
                        <h4 style={{ color: '#86efac', fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>✅ Rento bilan</h4>
                        <ul style={{ listStyle: 'none' }}>
                            {[
                                'Dalol butunlay yo\'q — 0 UZS komissiya',
                                'To\'g\'ridan-to\'g\'ri uy egasi bilan aloqa',
                                'Har safar uy almashtirganida $300-570 tejaydi',
                                'Tasdiqlangan e\'lonlar, ID tekshiruv',
                                'Smart filtrlar: 2-3 kunda topadi'
                            ].map((item, i) => (
                                <li key={i} style={{
                                    padding: '8px 0',
                                    paddingLeft: '24px',
                                    position: 'relative',
                                    color: '#e2e8f0',
                                    fontSize: '15px'
                                }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#4ade80' }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{
                    marginTop: '30px',
                    background: 'linear-gradient(135deg, #1e3a5f, #0f172a)',
                    borderLeft: '4px solid #3b82f6',
                    padding: '24px',
                    borderRadius: '0 12px 12px 0'
                }}>
                    <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '16px' }}>
                        💡 <strong>Har yili O'zbekistonda ~340,000 ijara tranzaksiyasi</strong> amalga oshadi.
                        Har biridan o'rtacha $285 dalolga ketadi. Bu <strong>$97M/yil</strong> lik bozor.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
