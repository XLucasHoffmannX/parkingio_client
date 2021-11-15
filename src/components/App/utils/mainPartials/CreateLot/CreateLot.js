import { useEffect, useContext, useState } from 'react';
import { GlobalState } from '../../../../../GlobalState';
import axios from 'axios';

//style
import './createLot.css'

const initialInputState = {
    model: "",
    ref: "",
    category: "",
    description: ""
}

const CreateLot = () => {
    const state = useContext(GlobalState);
    const [localId] = state.localId;
    const [callback, setCallback] = state.lotsApi.callback;
    const [clientId, setClientId] = useState();
    const [lot, setLot] = useState(initialInputState)

    useEffect(() => { setClientId(localId) }, [setClientId, localId])

    // inputs

    const changeInput = e => {
        const { name, value } = e.target;
        setLot({ ...lot, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/parking', { ...lot, client_id: clientId });

            callback ? setCallback(false) : setCallback(true);
            setLot('');
        } catch (error) { alert(error) }
    }

    return (
        <div className="display_add">
            <form className="form_add" onSubmit={handleSubmit}>
                <div className="form_add_control">
                    <input type="text" placeholder="Modelo de veículo" name="model" value={lot.model|| ''} onChange={changeInput} />
                    <select name="category" value={lot.category|| ''} onChange={changeInput}>
                        <option value="">Selecione uma categoria</option>
                        <option value="Pequeno">Pequeno</option>
                        <option value="Médio">Médio</option>
                        <option value="Grande">Grande</option>
                    </select>
                </div>
                <div className="form_add_control">
                    <input type="text" placeholder="Placa de veículo" name="ref" value={lot.ref || ''} onChange={changeInput} required />
                    <input type="text" placeholder="Descrição" name="descripition" value={lot.descripition || ''} onChange={changeInput} />
                </div>
                <div className="form_add_control">
                    <button type="reset" className="cancel">Cancelar</button>
                    <button type="submit" className="submit">Adicionar</button>
                </div>
            </form>
        </div>
    )
}

export default CreateLot;