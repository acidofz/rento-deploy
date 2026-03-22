const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xwaqtnhwvvoxofhrteju.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3YXF0bmh3dnZveG9maHJ0ZWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxODMxODAsImV4cCI6MjA4OTc1OTE4MH0.JW8SLteEUVRgVdfWLMtObyo_u3CGS9V1aNc5Yz03O7U';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase env vars missing!');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
});

module.exports = supabase;