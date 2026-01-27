import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CatalogoPage from './pages/Catalogo';
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <FloatingWhatsApp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
      </Routes>
      {/* El Footer está en las páginas individuales o aquí si quieres que sea global */}
    </>
  );
}

export default App;