import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import Cookie from "js-cookie"
import { userSigninReducer, userRegisterReducer, userUpdateReducer,  } from './reducers/userReducers';
import thunk from 'redux-thunk'
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {userSigninReducer:{userInfo}}

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;
