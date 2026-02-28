import { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { applyPageSEO } from "./utils/seo";
import { usePrefetch } from "./hooks/usePrefetch";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const StatsPage = lazy(() => import("./pages/StatsPage"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AppContent(): JSX.Element {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  usePrefetch();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    applyPageSEO(location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white overflow-x-hidden select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <Toaster
        position="top-right"
        toastOptions={{
          className: "bg-gray-800 text-white border border-cyan-500/20",
          duration: 4000,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route
                  path="/certifications"
                  element={<CertificationsPage />}
                />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </motion.div>
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
