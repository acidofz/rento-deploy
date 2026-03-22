const express = require('express');
const path = require('path');
const app = express();

// Импорт клиента Supabase (из отдельного файла)
const supabase = require('./lib/supabase');

// Парсинг JSON (если ещё не добавлен)
app.use(express.json());

// Твои API роуты (пример)
app.use('/api/auth', require('./routes/auth'));       // если файл существует
app.use('/api/contracts', require('./routes/contracts')); // если файл существует
app.use('/api/listings', require('./routes/listings'));   // если файл существует

// Раздача статических файлов фронтенда
const staticPath = path.join(__dirname, '../rento-web/dist');
app.use(express.static(staticPath));

// Тестовый маршрут для проверки Supabase
app.get('/api/test-db', async (req, res) => {
  console.log('→ Запрос /api/test-db');

  try {
    console.log('→ Проверка env vars:');
    console.log('  SUPABASE_URL:', process.env.SUPABASE_URL ? 'есть' : 'ОТСУТСТВУЕТ');
    console.log('  SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? `есть (${process.env.SUPABASE_ANON_KEY.length} символов)` : 'ОТСУТСТВУЕТ');

    console.log('→ Выполняем тестовый запрос к таблице listings');
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .limit(1);

    if (error) {
      console.error('→ Ошибка Supabase:', error.message, error.code, error.details);
      throw error;
    }

    console.log('→ Запрос успешен, получено записей:', data.length);

    res.json({
      success: true,
      data: data || [],
      message: 'Подключение к Supabase работает!'
    });
  } catch (err) {
    console.error('→ Полная ошибка в /api/test-db:', err.message);
    console.error(err.stack || err);
    res.status(500).json({
      success: false,
      error: err.message || 'Internal server error',
      hint: 'Проверь логи Vercel и переменные окружения'
    });
  }
});

// SPA fallback — catch-all для фронтенда (должен быть последним!)
app.get('/*path', (req, res) => {
  if (req.url.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Экспорт для Vercel
module.exports = app;