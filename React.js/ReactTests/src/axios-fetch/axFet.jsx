/* 
    Fetch: Nativo do navegador
    Usa de response.ok / response.status / response.json()
    Precisa usar AbortController para cancelar
    Precisa checar o response.ok pra dar um throw em erros

    Axios: npm i axios
    Transforma json automaticamente, tem response.data, trata status
    via catch (HTTP erros cai no catch)
    Interceptadores
*/

// Fetch
import { useEffect, useState } from 'react';

function Users() {
    const [state, setState] = useState({loading : true, data : null, error : false});

    useEffect(() => {
        const AbortControll = new AbortController();

        async function Load() {
            try {
                const res = await fetch('/api/users', {signal: AbortControll.signal});
                if (!res.ok) throw new Error('HTTP ${res.status}');
                const data = res.json();

                setState((prev) => prev = {loading: false, data: data, error: false});

            } catch (error) {
                if (error.name === "AbortError") return; // Cancela
                setState((prev) => prev = {loading: false, data: null, error:error.mesage});
            }
        }

        load();
        return () => AbortControll.abort(); // Cleanup

    }, []) // Dependências
}

// Axios
