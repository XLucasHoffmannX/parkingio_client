import { useContext } from 'react'
import { GlobalState } from '../../../../../GlobalState';

// styles
import { FiSearch } from 'react-icons/fi';
import './search.css';

const Search = () => {
    const state = useContext(GlobalState);
    // eslint-disable-next-line
    const [search, setSearch] = state.lotsApi.search;
    
    const changeSearch = e =>{
        const { value } = e.target;
        setSearch(value)
    }

    return (
        <div className="display_add">
            <div className="search_input">
                <div className="search_icon"><FiSearch /></div>
                <input type="text" placeholder="Busque pela placa do veículo..." onChange={changeSearch}/>
            </div>
        </div>
    )
}

export default Search;