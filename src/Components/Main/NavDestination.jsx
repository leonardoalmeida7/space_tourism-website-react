import useFetchData from "../../Hooks/useFetchDestinations";
import { useState } from "react";
import styles from "./NavDestination.module.css"

const NavDestination = () => {

    const { data, loading, error } = useFetchData();
    const [linkIndex, setLinkIndex] = useState(0);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar os dados.</p>;

    const { destinations, crew, technology } = data;
    const currentDestination = destinations[linkIndex] || {};

    return (
    <div>
        <p className='page-actual'>
            <span className='num'>01</span>
            PICK YOUR DESTINATION
        </p>
        <img className={styles.img}
        src={currentDestination.images?.png || ''} 
        alt={currentDestination.name || 'Imagem'} 
        />
        <ul>
        {destinations.map((dest, index) => (
            <li onClick={() => setLinkIndex(index)} key={index}>
            {dest.name}
            </li>
        ))}
        </ul>
        <h1>{currentDestination.name}</h1>
        <p>{currentDestination.description}</p>
        <hr />
        <div className="distance">
            <span>AVG. DISTANCE</span>
            <br />
            <span className="info">{currentDestination.distance}</span>
        </div>
        <div className="travel-time">
            <span>EST. TRAVEL TIME</span>
            <br />
            <span className="info">{currentDestination.travel}</span>
        </div>
    </div>
    );
}


export default NavDestination