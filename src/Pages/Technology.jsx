import{ useState, useEffect } from 'react';

import styles from './Technology.module.css'
import useFetchData from '../Hooks/useFetchDestinations'


const Technology = () => {
    
    const { data, loading, error } = useFetchData();
    const [linkIndex, setLinkIndex] = useState(0);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar os dados.</p>;

    const { technology } = data;
    const currentTech = technology[linkIndex];

  return (
    <div className={styles.main}>
        <p className={styles.pageActual}>
            <span className={styles.num}>03</span>
            SPACE LAUNCH 101
        </p>
        <div className={styles.techContainer}>
            <picture className={styles.techImgContainer}>
                <source media="(min-width: 540px)" srcSet={currentTech?.images.landscape} />
                <img src={currentTech?.images.portrait} alt={currentTech?.name} />
            </picture>
        </div>
        <div className='d-flex justify-content-center'>
            {technology && technology.map((tech, index) => (
                <div onClick={() => setLinkIndex(index)} key={index} className={`d-flex justify-content-center align-items-center mx-2 ${linkIndex == index ? styles.active : styles.link}`}>
                    {index + 1}
                </div>
            ))}
        </div>
        <div className={styles.textContainer}>
            <h1>THE TERMINOLOGY...</h1>
            <h2 className={styles.name}>{currentTech?.name}</h2>
            <p>{currentTech?.description}</p>
        </div>
    </div>
  )
}

export default Technology