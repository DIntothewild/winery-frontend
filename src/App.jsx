import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/layout/Layout';
import Home from './Views/Home';
import Blog from './Views/Blog';
import Contacto from './Views/Contacto';
import Cart from './Views/Cart';
import Productos from './Views/Productos';
import LoginPage from './Views/LoginPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="productos" element={<Productos />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
