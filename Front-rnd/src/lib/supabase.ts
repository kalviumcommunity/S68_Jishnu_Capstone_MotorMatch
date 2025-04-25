
import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically injected by Lovable when
// you connect your project to Supabase via the integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are not available
// This allows the app to load without errors during development
let supabaseClient;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing. Please connect your project to Supabase via the Lovable integration.');
  // Create a mock client that doesn't throw errors but doesn't connect to anything
  supabaseClient = {
    auth: {
      signIn: () => Promise.resolve({ user: null, session: null, error: new Error('Not connected to Supabase') }),
      signUp: () => Promise.resolve({ user: null, session: null, error: new Error('Not connected to Supabase') }),
      signOut: () => Promise.resolve(),
      onAuthStateChange: () => ({ data: null, unsubscribe: () => {} }),
    },
    from: () => ({
      select: () => ({ data: [], error: new Error('Not connected to Supabase') }),
      insert: () => ({ data: null, error: new Error('Not connected to Supabase') }),
      update: () => ({ data: null, error: new Error('Not connected to Supabase') }),
      delete: () => ({ data: null, error: new Error('Not connected to Supabase') }),
    }),
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: null, error: new Error('Not connected to Supabase') }),
        download: () => Promise.resolve({ data: null, error: new Error('Not connected to Supabase') }),
      }),
    },
  };
} else {
  // Create the actual Supabase client if environment variables are available
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseClient;
