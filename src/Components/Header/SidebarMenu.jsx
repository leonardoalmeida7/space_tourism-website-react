import React, { useState } from "react";
import "./SidebarMenu.css"; // Estilo separado

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
        <ul className="d-flex flex-column">
          <li><a href="#inicio" onClick={closeMenu}><span>00</span> HOME</a></li>
          <li><a href="#sobre" onClick={closeMenu}><span>01</span> DESTINATION</a></li>
          <li><a href="#servicos" onClick={closeMenu}><span>02</span> CREW</a></li>
          <li><a href="#contato" onClick={closeMenu}><span>03</span> TECHNOLOGY</a></li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarMenu;
