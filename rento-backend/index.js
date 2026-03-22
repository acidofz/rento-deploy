const express = require('express');
const path = require('path');
const app = express();

// Твои API роуты (пример) — монтируем на /api, чтобы не конфликтовали с фронтом
app.use('/api/auth', require('./routes/auth'));       // если файл routes/auth.js существует
app.use('/api/contracts', require('./routes/contracts')); // если routes/contracts.js
app.use('/api/listings', require('./routes/listings'));   // если routes/listings.js

// Если у тебя несколько роутов на /api — лучше монтировать их отдельно, а не все на один /api
// Пример: app.use('/api', require('./routes')); — если есть routes/index.js

// Раздача статических файлов фронта (после npm run build в rento-web)
const staticPath = path.join(__dirname, '../rento-web/dist'); // dist для Vite, build для CRA
app.use(express.static(staticPath));

// SPA fallback — catch-all для всех НЕ-API запросов
// В Express 5 используем /*path (именованный wildcard)
app.get('/*path', (req, res) => {
  // Защита: если запрос начинается с /api/ — 404 JSON (чтобы не отдавать index.html на API)
  if (req.url.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found' });
  }

  // Отдаём index.html для React Router (SPA)
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Экспорт для Vercel serverless (без app.listen!)
module.exports = app;