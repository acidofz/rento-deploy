const express = require('express');
const db = require('../database');
const verifyToken = require('../middleware/auth');
const router = express.Router();

// Get all listings with optional filtering
router.get('/', (req, res) => {
    let query = "SELECT * FROM listings WHERE 1=1";
    const params = [];

    if (req.query.location) {
        query += " AND location LIKE ?";
        params.push(`%${req.query.location}%`);
    }
    if (req.query.rooms) {
        query += " AND rooms = ?";
        params.push(req.query.rooms);
    }
    if (req.query.maxPrice) {
        query += " AND price <= ?";
        params.push(req.query.maxPrice);
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Get single listing
router.get('/:id', (req, res) => {
    db.get("SELECT * FROM listings WHERE id = ?", [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Listing not found" });
        res.json(row);
    });
});

// Create new listing (Protected)
router.post('/', verifyToken, (req, res) => {
    const { title, price, location, rooms, image, description } = req.body;

    if (!title || !price || !location) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const stmt = db.prepare("INSERT INTO listings (title, price, location, rooms, image, description, userId) VALUES (?, ?, ?, ?, ?, ?, ?)");
    stmt.run([title, price, location, rooms, image, description, req.userId], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, message: "Listing created" });
    });
    stmt.finalize();
});

module.exports = router;
