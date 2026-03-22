const express = require('express');
const cors = require('cors');
const db = require('./database');
const authRoutes = require('./routes/auth');
const listingRoutes = require('./routes/listings');
const path = require('path');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/contracts', require('./routes/contracts'));



app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*path', (req, res) => {                               
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Welcome to Rento API');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
