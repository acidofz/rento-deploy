// lib/supabase.js
require('dotenv').config(); // если не подключаешь в index.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xwaqtnhwvvoxofhrteju.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3YXF0bmh3dnZveG9maHJ0ZWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxODMxODAsImV4cCI6MjA4OTc1OTE4MH0.JW8SLteEUVRgVdfWLMtObyo_u3CGS9V1aNc5Yz03O7U'; // или SUPABASE_SERVICE_ROLE_KEY для полного доступа

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Отсутствуют переменные SUPABASE_URL или SUPABASE_KEY');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Опционально: для realtime или auth
// supabase.auth.onAuthStateChange((event, session) => { ... });

module.exports = supabase;