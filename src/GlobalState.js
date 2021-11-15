import { createContext, useState, useEffect } from 'react';
import LotsApi from './api/LotsApi';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [paramsWeb, setParamsWeb] = useState();
    const [clientId, setClientId] = useState();
    const [localId, setLocalId] = useState();

    useEffect(() => {
        if (clientId) {
            localStorage.setItem('client', clientId);
        }

        const clientExist = localStorage.getItem('client');

        if (clientExist) {
            setLogged(true);
            setLocalId(clientExist);
            if (paramsWeb !== localId) setLogged(false);
        }

    }, [clientId, localId, paramsWeb, logged])

    const state = {
        clientId: [clientId, setClientId],
        logged: [logged, setLogged],
        localId: [localId, setLocalId],
        paramsWeb : [paramsWeb, setParamsWeb],
        lotsApi: LotsApi(localId)
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
