import useFetchData from "../Hooks/useFetchDestinations";
import { useState } from "react";
import styles from "./Destination.module.css"

const Destination = () => {
  const { data, loading, error } = useFetchData();
    const [linkIndex, setLinkIndex] = useState(0);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar os dados.</p>;

    const { destinations, crew, technology } = data;
    const currentDestination = destinations[linkIndex] || {};

    return (
      <div className={styles.main}>
          <p className={styles.pageActual}>
              <span className={styles.num}>01</span>
              PICK YOUR DESTINATION
          </p>
          <div className="containData d-xl-flex align-items-start py-xl-5 justify-content-center">
            <img className={styles.img}
            src={currentDestination.images?.png || ''} 
            alt={currentDestination.name || 'Imagem'} 
            />
            <div className={styles.containText + ' text-xl-start'}>
                <ul className="d-flex justify-content-around px-5 justify-content-md-center justify-content-xl-start px-xl-0">
                {destinations.map((dest, index) => (
                    <li onClick={() => setLinkIndex(index)} key={index} className={linkIndex == index ? styles.active : styles.link}>
                    {dest.name}
                    </li>
                ))}
                </ul>
                <h1 className={styles.title}>{currentDestination.name}</h1>
                <p className={styles.description}>{currentDestination.description}</p>
                <hr className="d-none d-md-block"/>
                <div className="d-md-flex justify-content-around justify-content-xl-start">
                    <div className="distance mb-2 ms-xl-4 me-xl-5">
                        <span>AVG. DISTANCE</span>
                        <br />
                        <span className={styles.info}>{currentDestination.distance}</span>
                    </div>
                    <div className="travel-time ms-xl-5">
                        <span>EST. TRAVEL TIME</span>
                        <br />
                        <span className={styles.info}>{currentDestination.travel}</span>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
}

export default Destination