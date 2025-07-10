import React, { useState } from "react";
import "./SidebarMenu.css"; // Estilo separado
import { Link } from "react-router-dom"

const SidebarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Botão hamburguer */}
      <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu lateral */}
      <nav className={`side-menu ${menuOpen ? "active" : ""}`}>
        <ul className="d-flex flex-column flex-md-row">
          <li><Link to="/" onClick={closeMenu}><span>00</span>HOME</Link></li>
          <li><Link to="/destination"  onClick={closeMenu}><span>01</span> DESTINATION</Link></li>
          <li><Link to="/crew"  onClick={closeMenu}><span>02</span> CREW</Link></li>
          <li ><Link to="/technology" onClick={closeMenu}></Link><span>03</span> TECHNOLOGY</li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarMenu;
