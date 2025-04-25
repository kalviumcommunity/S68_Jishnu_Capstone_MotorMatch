
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import the supabase client to ensure it initializes properly
import './lib/supabase';

createRoot(document.getElementById("root")!).render(<App />);
