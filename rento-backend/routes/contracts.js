const express = require('express');
const db = require('../database');
const verifyToken = require('../middleware/auth');
const router = express.Router();

router.get('/:listingId', verifyToken, (req, res) => {
    const listingId = req.params.listingId;
    const userId = req.userId;

    db.get("SELECT * FROM users WHERE id = ?", [userId], (err, user) => {
        if (err || !user) return res.status(404).json({ error: 'User not found' });

        db.get("SELECT * FROM listings WHERE id = ?", [listingId], (err, listing) => {
            if (err || !listing) return res.status(404).json({ error: 'Listing not found' });

            // In a real app, you might generate a PDF here.
            // For now, we return the data needed to render the contract on the frontend.
            const contractData = {
                contractId: `CN-${Date.now()}-${listing.id}`,
                date: new Date().toLocaleDateString(),
                tenant: {
                    name: user.username,
                    id: user.id
                },
                landlord: {
                    id: listing.userId // In a real app, we'd fetch landlord details
                },
                property: {
                    address: listing.location,
                    price: listing.price,
                    description: listing.title
                }
            };

            res.json(contractData);
        });
    });
});

module.exports = router;
