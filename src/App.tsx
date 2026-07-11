import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import KnowledgeHub from "./pages/KnowledgeHub";
import Achievements from "./pages/Achievements";
import Alumni from "./pages/Alumni";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FloatingGlow from "@/components/FloatingGlow";

const queryClient = new QueryClient();

const ScrollToTopOnNav = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ type: "spring", stiffness: 200, damping: 25 }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about-us" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/what-we-do" element={<PageWrapper><WhatWeDo /></PageWrapper>} />
        <Route path="/knowledge-hub" element={<PageWrapper><KnowledgeHub /></PageWrapper>} />
        <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
        <Route path="/alumni" element={<PageWrapper><Alumni /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/contact-us" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTopOnNav />
        <FloatingGlow />
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
          <Navbar />
        </div>
        <main className="relative z-10 min-h-screen">
          <AppRoutes />
        </main>
        <Footer />
        <ScrollToTop />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
