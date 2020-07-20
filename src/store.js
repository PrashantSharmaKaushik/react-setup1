import { createStore,  combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import { getUser, userType } from './utils';

const checkTokenExpirationMiddleware = store => next => action => {
    
    let user = userType(window.location.pathname);
    const token = JSON.parse(localStorage.getItem(user)) && JSON.parse(localStorage.getItem(user))["token"];
    if (token && jwtDecode(token).exp < Date.now() / 1000) {
        localStorage.removeItem(user);
        next(action);
    }
    next(action);
};
const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk , checkTokenExpirationMiddleware)
);

export default store;