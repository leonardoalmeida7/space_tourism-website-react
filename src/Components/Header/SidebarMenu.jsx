import React, { useState } from "react";
import "./SidebarMenu.css"; // Estilo separado
import { Link } from "react-router-dom"
import useFetchData from "../../Hooks/useFetchDestinations";

const SidebarMenu = ({ actualLink, setActualLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const { data, loading, error } = useFetchData();
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados.</p>;

  const linkNames = Object.keys(data);


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
          <li><Link to="/" onClick={() => { setActualLink(0); closeMenu(); }} className={actualLink === 0 ? "activeLink" : ""}><span className="num-home">00</span>HOME</Link></li>
          {linkNames && linkNames.map((link, index) => (
            <li key={index}><Link to={`/${link}`} onClick={() => { setActualLink(index + 1); closeMenu(); }} className={actualLink === index + 1 ? "activeLink" : ""}><span className="num">0{index + 1}</span>{link.toUpperCase()}</Link></li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SidebarMenu;
