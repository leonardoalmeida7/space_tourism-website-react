import useFetchData from '../Hooks/useFetchDestinations'
import { useState } from 'react';


const Crew = () => {
    const { data, loading, error } = useFetchData();
    const [linkIndex, setLinkIndex] = useState(0);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar os dados.</p>;
  return (
    <div>
        <p>
            <span className='num'>02</span>
            MEET YOUR CREW
        </p>
    </div>
  )
}

export default Crew