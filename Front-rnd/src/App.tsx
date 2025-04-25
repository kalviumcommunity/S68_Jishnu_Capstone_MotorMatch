
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CarListingsPage from "./pages/CarListingsPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import WishlistPage from "./pages/WishlistPage";
import FeedbackPage from "./pages/FeedbackPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFound from "./pages/NotFound";
import SellCarPage from "./pages/SellCarPage";
import ListCarDetailsPage from "./pages/ListCarDetailsPage";

const queryClient = new QueryClient();

const App = () => {
  const [isSupabaseConnected, setIsSupabaseConnected] = useState(true);
  
  // Check if Supabase is connected
  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      setIsSupabaseConnected(false);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!isSupabaseConnected && (
          <div className="bg-amber-500 text-white p-2 text-center text-sm">
            <p>
              This app requires Supabase to function properly. Please connect your project to Supabase via the Lovable integration.
              <button onClick={() => window.location.reload()} className="ml-2 underline">
                Refresh page
              </button>
            </p>
          </div>
        )}
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/browse" element={<Layout><CarListingsPage /></Layout>} />
            <Route path="/car/:id" element={<Layout><CarDetailsPage /></Layout>} />
            <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
            <Route path="/feedback" element={<Layout><FeedbackPage /></Layout>} />
            <Route path="/sell" element={<Layout><SellCarPage /></Layout>} />
            <Route path="/sell/list" element={<Layout><ListCarDetailsPage /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
