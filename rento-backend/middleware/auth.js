const jwt = require('jsonwebtoken');
const SECRET_KEY = 'super_secret_key_rento'; // Matches auth.js

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    // Remove "Bearer " prefix if present
    const tokenString = token.startsWith('Bearer ') ? token.slice(7) : token;

    jwt.verify(tokenString, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate token' });
        }

        // Save user id for use in other routes
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;
