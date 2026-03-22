import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateListing = () => {
    const { token, user } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '', price: '', location: '', rooms: '', image: '', description: ''
    });

    // Redirect if not logged in
    if (!user) {
        navigate('/auth');
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/listings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                navigate('/');
            } else {
                alert('Failed to create listing');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '100px 20px',
            background: '#0a0a0a',
            color: 'white',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px' }}>Post a New Listing</h1>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input
                        type="text"
                        placeholder="Title (e.g., Modern Apartment)"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        style={{ padding: '14px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', color: 'white' }}
                        required
                    />
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <input
                            type="number"
                            placeholder="Price ($/month)"
                            value={formData.price}
                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                            style={{ flex: 1, padding: '14px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', color: 'white' }}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Rooms"
                            value={formData.rooms}
                            onChange={e => setFormData({ ...formData, rooms: e.target.value })}
                            style={{ flex: 1, padding: '14px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', color: 'white' }}
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Location"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        style={{ padding: '14px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', color: 'white' }}
                        required
                    />
                    <input
                        type="url"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                        style={{ padding: '14px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', color: 'white' }}
                    />
                    <textarea
                        placeholder="Description"
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        rows="5"
                        style={{ padding: '14px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', color: 'white' }}
                    ></textarea>

                    <button type="submit" style={{
                        padding: '16px',
                        borderRadius: '8px',
                        background: 'var(--gradient-main)',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        marginTop: '10px'
                    }}>
                        Publish Listing
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateListing;
