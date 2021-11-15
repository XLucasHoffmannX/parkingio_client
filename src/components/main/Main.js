import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';

//components
import ComponentSelect from '../App/utils/mainPartials/ComponentSelect/ComponentSelect';
import CreateLot from '../App/utils/mainPartials/CreateLot/CreateLot';
import Table from '../App/utils/mainPartials/Table/Table';
//style
import { LogoIco } from '../App/utils/Icon'
import './main.css';
import Search from '../App/utils/mainPartials/Search/Search';
import Settings from '../App/utils/mainPartials/Settings/Settings';
import EditLot from '../App/utils/mainPartials/EditLotModal/EditLot';

const Main = () => {
    const state = useContext(GlobalState);
    // eslint-disable-next-line
    const [paramsWeb, setParamsWeb] = state.paramsWeb;
    const [select, setSelect] = useState(1);
    const [close, setClose] = useState(false);
    const [editInfo, setEditInfo] = useState(false);

    const paramsLocal = useParams();

    const componenSelect = () => {
        if (select === 1) return <CreateLot />
        if (select === 2) return <Search />
        if (select === 3) return <Settings />
    }

    useEffect(() => {
        setParamsWeb(paramsLocal.id);
    }, [editInfo, select, paramsLocal.id, setParamsWeb])

    return (
        <div className="container">
            { close ? <EditLot setClose={setClose} editInfo={editInfo} /> : null }
            <LogoIco className="logo_header" />
            <ComponentSelect select={select} setSelect={setSelect} />
            {componenSelect()}
            {select !== 3 ? <Table close={close} setClose={setClose} editInfo={editInfo} setEditInfo={setEditInfo} /> : null}
        </div>
    )
}

export default Main;