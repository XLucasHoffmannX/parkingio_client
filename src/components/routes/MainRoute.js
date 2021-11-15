import { useContext } from 'react';
import { GlobalState } from '../../GlobalState';
/* Instalar a versao @^5.3.0 */
import { Switch, Route } from 'react-router'

// components
import Landing from '../landing/Landing';
import Main from '../main/Main';
import {Error, AuthError} from '../App/err/Errors';

const MainRoute = ()=>{
    const state = useContext(GlobalState);
    const [logged] = state.logged;
    
    return(
        <Switch>
            <Route path="/" exact component={Landing} />

            <Route path="/lot/:id" exact component={logged ? Main : AuthError} />

            <Route path="*" exact component={Error} />
        </Switch>
    )
}

export default MainRoute;