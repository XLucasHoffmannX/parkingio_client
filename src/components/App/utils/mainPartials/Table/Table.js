import { useEffect, useContext, useState } from 'react';
import { GlobalState } from '../../../../../GlobalState';
import Loading from '../../../utils/loading/Loading';
import axios from 'axios';
//styles
import './table.css'

const Table = ({close, setClose, editInfo, setEditInfo}) => {
    const state = useContext(GlobalState);
    const [lots] = state.lotsApi.lots;
    const [callback, setCallback] = state.lotsApi.callback;
    const [loadInfo, setLoadInfo] = useState();
    const [load, setLoad] = useState(false);

    const removeLot = id =>{
        try {
            (async ()=>{
                await axios.delete(`/parking/${id}`)
                callback ? setCallback(false) : setCallback(true);
            })()
        } catch (error) { alert(error) }
    }

    const handleEdit = (data)=>{
        setClose(true);
        setEditInfo(data);
    }

    useEffect(() => {
        if (lots.length <= 0) {
            setLoad(true);
            setTimeout(() => {
                setLoad(false);
                setLoadInfo('Não há registros!');
            }, 1600)
        }
    }, [lots.length, setLoad, setLoadInfo])
    return (
        <>
            {
                lots.length === 0 ?
                    <div className="load_table">{load ? <Loading /> : loadInfo}</div>
                    :
                    <div className="display_table">
                        <table>
                            <thead>
                                <tr>
                                    <td>Modelo</td>
                                    <td>Placa</td>
                                    <td>Descrição</td>
                                    <td>Categoria</td>
                                    <td>Entrada</td>
                                    <td>Editar</td>
                                    <td>Finalizar</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lots.map((lot, key) => (
                                        <tr key={key}>
                                            <td>{lot.model}</td>
                                            <td>{lot.ref}</td>
                                            <td>{lot.descripition}</td>
                                            <td>{lot.category}</td>
                                            <td>{lot.createAt}</td>
                                            <td className="btn edit" onClick={()=>handleEdit(lot)}>
                                                Editar
                                            </td>
                                            <td className="btn finish" onClick={()=>removeLot(lot._id)}>
                                                Finalizar
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>

    )
}

export default Table;