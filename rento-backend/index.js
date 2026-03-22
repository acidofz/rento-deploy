const express = require('express');
const path = require('path');
const app = express();

// Твои API роуты (пример)
app.use('/api', require('./routes/yourRoutes')); // если есть

// Раздача билда фронта (после npm run build)
const staticPath = path.join(__dirname, '../rento-web/dist'); // или ../rento-web/build для CRA
app.use(express.static(staticPath));

// SPA fallback — любой не-API запрос → index.html
app.get('*', (req, res) => {
  if (req.url.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Для Vercel serverless — экспорт
module.exports = app;