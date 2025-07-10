import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Limpa todas as classes antes de adicionar a nova
    document.body.className = "";

    // Define a classe do body com base na rota
    switch (location.pathname) {
      case "/":
        document.body.classList.add("home-background");
        break;
      case "/destination":
        document.body.classList.add("destination-background");
        break;
      case "/crew":
        document.body.classList.add("crew-background");
        break;
      default:
        document.body.classList.add("technology-background");

      return () => {
        document.body.className = "";
      };
    }}, [location])

  return (
    <div className='container'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
