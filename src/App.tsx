import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

import { ServicesPage } from './pages/ServicesPage';
import { RatesPage } from './pages/RatesPage';
import { ContactPage } from './pages/ContactPage';
import { Works } from './pages/Works';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}