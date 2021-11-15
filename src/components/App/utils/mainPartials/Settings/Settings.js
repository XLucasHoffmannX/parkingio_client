import { useEffect, useContext, useState } from 'react';
import { GlobalState } from '../../../../../GlobalState';
import {Link} from 'react-router-dom';

const Settings = () => {
    const state = useContext(GlobalState);
    const [localId, setLocalId] = state.localId;
    const [id, setId] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setId(localId);
    }, [localId])

    const changeInput = e => {
        const { value } = e.target;
        setId(value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        try {
            setOpen(true);
            localStorage.setItem('client', id);

        } catch (error) { alert(error) }
    }

    const logout = ()=>{
        localStorage.clear();
        window.location.href = '/'
    }

    return (
        <div className="display_add">
            <div className="settings">
                <form className="form_add" onSubmit={handleSubmit}>
                    <div className="form_add_control">
                        <label>Seu Id de cliente:</label>
                        <input type="text" onChange={changeInput} value={id || ''} />
                    </div>
                    {
                        open ? 
                            <span>Você mudou seu id de cliente! <Link to={`/lot/${id}`} target="_blank" onClick={()=>setLocalId(id)}>Acesse aqui!</Link></span>
                        :
                        null
                    }
                    <div className="form_add_control">
                        <button type="reset" className="cancel" onClick={logout}>Sair do do app</button>
                        <button type="submit" className="submit">Salvar alterações</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings;