import React, { useEffect, useState } from 'react';

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/listings')
            .then(res => res.json())
            .then(data => {
                setListings(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching listings:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>Loading listings...</div>;

    return (
        <section id="market" style={{ padding: '80px 40px', background: '#0a0a0a' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '40px',
                    fontWeight: '800',
                    marginBottom: '40px',
                    textAlign: 'center'
                }}>
                    Market: <span style={{
                        background: 'var(--gradient-main)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Latest Listings</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {listings.map(listing => (
                        <div key={listing.id} style={{
                            background: '#1e293b',
                            border: '1px solid var(--border-color)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <img src={listing.image} alt={listing.title} style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover'
                            }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: 'white' }}>{listing.title}</h3>
                                <p style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '16px', marginBottom: '8px' }}>${listing.price}/month</p>
                                <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                                    <span>📍 {listing.location}</span>
                                    <span>🛏️ {listing.rooms} rooms</span>
                                </div>
                                <button
                                    onClick={() => window.location.href = `/contract/${listing.id}`}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        background: '#1e293b',
                                        border: '1px solid var(--color-primary)',
                                        color: 'var(--color-primary)',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Rent Now (Visual Contract)
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Listings;
