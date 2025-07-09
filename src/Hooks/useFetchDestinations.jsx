import { useEffect, useState } from 'react';

const useFetchData = (dataUrl = './data.json') => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(dataUrl);
                const json = await response.json();
                setData(json); // agora salva o objeto inteiro
            } catch (err) {
                console.error('Erro ao carregar os dados: ', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [dataUrl]);

    return { data, loading, error };
};

export default useFetchData;
