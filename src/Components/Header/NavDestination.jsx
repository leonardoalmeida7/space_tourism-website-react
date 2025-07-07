import { useEffect, useState } from 'react'

const NavDestination = () => {
    const [image, setImage] = useState('');
    const [linkIndex, setLinkIndex] = useState(0);
    const [datas, setDatas] = useState('');

    console.log(datas)

    const dataUrl = './data.json';
    useEffect(() => {
        const getData = async() => {
            try {
                const data = await fetch(dataUrl);
                const json = await data.json();
                const destination = json.destinations
                console.log(destination)
                setDatas(destination);
            }catch(erro) {
                console.log('Erro ao carregar os dados:' + erro)
            }
        }

        getData();

    },[])

    

  return (
    <div>
        {datas && (
            <div>
                <img src={datas ? datas[linkIndex].images.png : ''} alt="Moon" />
                <ul>
                    {datas && datas.map((data, index) => (
                        <li onClick={() => {setLinkIndex(index)}} key={index}>{data.name}</li>
                    ))}
                </ul>
                <h1>{datas[linkIndex].name}</h1>
                <p>{datas[linkIndex].description}</p>
            </div>
        )}
    </div>
  )
}

export default NavDestination