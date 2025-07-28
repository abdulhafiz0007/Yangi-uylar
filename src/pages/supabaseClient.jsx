import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uoxsnsrxbhsnuvgmmzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVveHNuc3J4YmhzbnV2Z21temdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDU1OTIsImV4cCI6MjA2OTEyMTU5Mn0.qkGAObwz4_arO-PLHIVJWKJsYhCGHmVf-SeQPtvu3Jw';
export const supabase = createClient(supabaseUrl, supabaseKey);
