import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sustentabilidad from './pages/Sustentable';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Frescos from './pages/Frescos';
import Certificaciones from './pages/Certificaciones';
import Contacto from './pages/Contacto';

import Footer from './components/Footer';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="bg-black">
      <TopBar />
      <Routes>
        <Route path="/sustentabilidad" element={<Sustentabilidad />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/frescos" element={<Frescos />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
