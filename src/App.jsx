// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Blog from './pages/Blog';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blog" element={<Blog />} />
          
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
