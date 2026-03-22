const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'rento.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    // Create Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'user'
  )`);

    // Create Listings table
    db.run(`CREATE TABLE IF NOT EXISTS listings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    price INTEGER,
    location TEXT,
    rooms INTEGER,
    image TEXT,
    description TEXT,
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id)
  )`);

    // Seed data if empty
    db.get("SELECT count(*) as count FROM listings", (err, row) => {
        if (row.count === 0) {
            console.log("Seeding database...");
            const stmt = db.prepare("INSERT INTO listings (title, price, location, rooms, image, description) VALUES (?, ?, ?, ?, ?, ?)");

            const seedData = [
                ["Modern Apartment in City Center", 450, "Tashkent, Chilanzar", 2, "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", "Beautiful 2-room apartment near metro."],
                ["Cozy Studio", 300, "Tashkent, Yunusabad", 1, "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", "Perfect for students."],
                ["Luxury Penthouse", 1200, "Tashkent, Mirobad", 4, "https://images.unsplash.com/photo-1512918760383-eda2723ad6e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", "Premium living with city view."],
                ["Spacious Family Home", 600, "Tashkent, Mirzo Ulugbek", 3, "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", "Great for families, near park."]
            ];

            seedData.forEach(item => stmt.run(item));
            stmt.finalize();
            console.log("Database seeded!");
        }
    });
});

module.exports = db;
