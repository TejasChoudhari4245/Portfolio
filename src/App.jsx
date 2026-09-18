import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import Services from './pages/Services';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const { pathname } = useLocation();
  useScrollReveal([pathname]);

  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* Anyone landing on the old static URL keeps working. */}
        <Route path="/it-services.html" element={<Navigate to="/services" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
