<<<<<<< HEAD
import {createStore,compose,applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk';
import root from './models/root'

const reducer=combineReducers({
    root
});




const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


=======
import {createStore,compose,applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk';
import root from './models/root'
import user from './models/user'

const reducer=combineReducers({
    root,
    user
});




const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


>>>>>>> hui
export default store;