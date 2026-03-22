import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Contract = () => {
    const { listingId } = useParams();
    const { token, user } = useAuth();
    const navigate = useNavigate();
    const [contract, setContract] = useState(null);

    useEffect(() => {
        if (!user) {
            navigate('/auth');
            return;
        }

        fetch(`http://localhost:3000/api/contracts/${listingId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setContract(data))
            .catch(err => console.error(err));
    }, [listingId, user, token, navigate]);

    if (!contract) return <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Loading contract...</div>;

    return (
        <div style={{
            minHeight: '100vh',
            padding: '40px',
            background: '#f8fafc', // Light background for contract legibility
            color: '#0f172a',
            fontFamily: 'serif'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'white',
                padding: '60px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '24px', textTransform: 'uppercase' }}>Residential Lease Agreement</h1>

                <p style={{ textAlign: 'right', marginBottom: '20px' }}><strong>Contract ID:</strong> {contract.contractId}</p>
                <p style={{ textAlign: 'right', marginBottom: '40px' }}><strong>Date:</strong> {contract.date}</p>

                <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                    This Lease Agreement is made between the Landlord (ID: {contract.landlord.id}) and the Tenant <strong>{contract.tenant.name}</strong> (ID: {contract.tenant.id}).
                </p>

                <h3>1. Property</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                    The Landlord agrees to rent to the Tenant the property located at <strong>{contract.property.address}</strong>.
                    <br />Description: {contract.property.description}
                </p>

                <h3>2. Rent</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                    The Tenant agrees to pay specific rent of <strong>${contract.property.price}</strong> per month. Payment is due on the 1st of every month.
                </p>

                <h3>3. Term</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '40px' }}>
                    This agreement shall begin on {contract.date} and continue on a month-to-month basis until terminated by either party with 30 days notice.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '80px' }}>
                    <div style={{ borderTop: '1px solid black', width: '200px', padding: '10px' }}>Landlord Signature</div>
                    <div style={{ borderTop: '1px solid black', width: '200px', padding: '10px' }}>Tenant Signature</div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button onClick={() => window.print()} style={{
                    padding: '12px 24px',
                    background: '#3b82f6',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Print / Save as PDF
                </button>
            </div>
        </div>
    );
};

export default Contract;
