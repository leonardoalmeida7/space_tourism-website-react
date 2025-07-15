import useFetchData from '../Hooks/useFetchDestinations'
import { useState } from 'react';
import styles from './Crew.module.css'


const Crew = () => {
    const { data, loading, error } = useFetchData();
    const [linkIndex, setLinkIndex] = useState(0);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar os dados.</p>;
    const { destinations, crew, technology } = data;
    console.log(crew);
  return (
    <div className={styles.main}>
        <p className={styles.pageActual}>
            <span className={styles.num}>02</span>
            MEET YOUR CREW
        </p>
        {crew[linkIndex] && (
          <div>
            <div className={styles.info}>
              <span className={styles.role}>
                {crew[linkIndex].role}
              </span>
              <h1 className={styles.name}>
                {crew[linkIndex].name}
              </h1>
              <p className={styles.bio}>
                {crew[linkIndex].bio}
              </p>
              <div className={styles.circles}>
              </div>
            </div>
            <div>
              <div className={styles.circles}>
                {crew.map((member, index) => (
                  <div  key={index}>
                    <div onClick={() => setLinkIndex(index)} className={linkIndex === index ? styles.activeCircle : styles.circle}></div>
                  </div>
                ))}
              </div>
              <div className={styles.imgContainer}>'
              <img className={styles.img} 
                src={crew[linkIndex].images?.png || ''} 
                alt={crew[linkIndex].name || 'Imagem'}
              /> 
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Crew