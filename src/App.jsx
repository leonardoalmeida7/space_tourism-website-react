import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  const location = useLocation();
  const [actualLink, setActualLink] = useState(0);

  useEffect(() => {
    // Limpa todas as classes antes de adicionar a nova
    document.body.className = "";

    // Define a classe do body com base na rota
    switch (location.pathname) {
      case "/":
        document.body.classList.add("home-background");
        setActualLink(0);
        break;
      case "/destinations":
        document.body.classList.add("destination-background");
        setActualLink(1);
        break;
      case "/crew":
        document.body.classList.add("crew-background");
        setActualLink(2);
        break;
      case "/technology":
        document.body.classList.add("technology-background");
        setActualLink(3);
    }
    // Limpa a classe ao desmontar o componente
    return () => {
      document.body.className = "";
    };
  }, [location])

  return (
    <div>
      <Header actualLink={actualLink} setActualLink={setActualLink} />
      <div className='p-0 px-xl-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
