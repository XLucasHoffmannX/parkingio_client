import { Link } from 'react-router-dom';
// style
import './error.css';

export const Error = ()=>{
    return(
        <div class='error_display'>
            <h1>404</h1>
            <span>Não foi possivel acessar essa página, <Link to="/">volte aqui</Link></span>
        </div>
    )
}


export const AuthError = ()=>{
    return(
        <div class='error_display'>
            <h1>401</h1>
            <span>Você não possui autorização para acessar essa página, <Link to="/">volte aqui</Link></span>
        </div>
    )
}