import { useEffect, useState } from 'react';
import axios from 'axios';


const LotsApi = (localId) => {
    const [lots, setLots] = useState([]);
    const [search, setSearch] = useState();
    const [callback, setCallback] = useState(false);

    useEffect(() => {
        const getLots = async () => {
            try {
                if (search) {
                    const res = await axios.get(`/parking/${localId}?ref=${search}`);

                    setLots(res.data);
                } else {
                    const res = await axios.get(`/parking/${localId}`);

                    setLots(res.data);
                }
            } catch (error) { alert(error.response.data.msg) }
        }
        getLots();
    }, [search, callback, localId])
    return {
        lots: [lots, setLots],
        callback: [callback, setCallback],
        search: [search, setSearch]
    }
}

export default LotsApi;