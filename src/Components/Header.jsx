import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useAuthContext } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa"; // Icono logout

export default function Header() {
  const { auth, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/images/logoWinery.png" alt="Winery Logo" />
        </Link>

        {/* Menú central */}
        <nav className="navbar-menu">
          <Link to="/">Winery</Link>
          <Link to="/productos">Nuestros Vinos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        {/* Usuario / Login + Carrito */}
        <div className="navbar-icons">
          {auth?.nombre ? (
            <div className="user-info">
              <span className="nav-link">Hola, {auth.nombre}</span>
              <FaSignOutAlt
                onClick={handleLogout}
                title="Cerrar sesión"
                className="logout-icon"
              />
            </div>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
          <Link to="/cart" className="cart-icon">🛒</Link>
        </div>
      </div>
    </header>
  );
}