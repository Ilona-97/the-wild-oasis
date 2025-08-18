import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ywmyevfhawolkxakfnrr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bXlldmZoYXdvbGt4YWtmbnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MDA5OTMsImV4cCI6MjA2OTI3Njk5M30.VHu6mkddiaAu1K57m4xEIa0jqG6WQr-_ST0PFjRxLEs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;