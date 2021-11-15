import { useState, useEffect, useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import axios from 'axios';
import Logo from '../App/utils/landingPartials/Logo/Logo';
// style
import './landing.css';
import InputLanding from '../App/utils/landingPartials/InputLanding/InputLanding';

const Landing = () => {
    const state = useContext(GlobalState);
    // eslint-disable-next-line
    const [clientId, setClientId] = state.clientId;
    const [localId] = state.localId;

    const [message, setMessage] = useState(false);
    const [openInit, setOpenInit] = useState(false);
    const [id, setId] = useState({ id: "" });

    const generateNewId = async () => {
        const res = await axios.get('/genid');

        return await setId({ id: res.data.id });
    }

    const rememberId = () => {
        localId ? setMessage(false) : setMessage(true);
        console.log(message)
        if(localId) setId({ id: localId });
    }

    const handleClick = () => openInit ? setOpenInit(false) : setOpenInit(true);

    const handleSubmit = async () => {
        if (id.id) setClientId(id.id);
        else alert('Você deve informar um id de cliente de sua preferencia ou gerar um novo!')
    }

    useEffect(() => {
        if (localId === id.id) window.location.href = `/lot/${localId}`;
    }, [localId, id, id.id])

    return (
        <div id="container">
            <div className="landing_container">
                <div className="landing_display">
                    <Logo />
                    {
                        openInit ?
                            <InputLanding id={id} setId={setId} generateNewId={generateNewId} rememberId={rememberId} message={message} setMessage={setMessage} />
                            :
                            null
                    }
                    <span className="btnLanding init_btn" onClick={!openInit ? handleClick : handleSubmit}>
                        Iniciar
                    </span>
                </div>
                <span className="dev">Desenvolvido por Hoffmann 😄</span>
            </div>
        </div>
    )
}

export default Landing;