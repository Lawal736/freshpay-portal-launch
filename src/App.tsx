import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import ContactSales from "./pages/ContactSales";
import NigeriaInterest from "./pages/NigeriaInterest";
import GhanaInterest from "./pages/GhanaInterest";
import SenegalInterest from "./pages/SenegalInterest";
import CameroonInterest from "./pages/CameroonInterest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/create-account" element={<Navigate to="/" state={{ openEmailDialog: true }} />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/nigeria-interest" element={<NigeriaInterest />} />
          <Route path="/ghana-interest" element={<GhanaInterest />} />
          <Route path="/senegal-interest" element={<SenegalInterest />} />
          <Route path="/cameroon-interest" element={<CameroonInterest />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;