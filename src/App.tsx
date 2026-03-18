import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import CookiesPage from "./pages/CookiesPage.tsx";
import RegulaminPage from "./pages/RegulaminPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cennik" element={<PricingPage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPage />} />
          <Route path="/polityka-cookies" element={<CookiesPage />} />
          <Route path="/regulamin" element={<RegulaminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
