import './component_select.css';

const ComponentSelect = ({ select, setSelect }) => {
    let title;
    const infoTitle = ()=>{
        if(select === 1 ) title = 'Adicionar';
        if(select === 2 ) title = 'Buscar';
        if(select === 3 ) title = 'Configurações';
        
        return title;
    }
    return (
        <div className="component_select">
            <h2>{infoTitle()}</h2>
            <ul>
                <li className={select === 1 ? 'actv' : null } onClick={()=>{setSelect(1)}}>Adicionar</li>
                <li className={select === 2 ? 'actv' : null } onClick={()=>{setSelect(2)}}>Buscar</li>
                <li className={select === 3 ? 'actv' : null } onClick={()=>{setSelect(3)}}>Configurações</li>
            </ul>
        </div>
    )
}

export default ComponentSelect;