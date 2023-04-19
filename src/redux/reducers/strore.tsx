import {legacy_createStore as createStore,  } from 'redux';
import {combineReducers} from '@reduxjs/toolkit';
import { incdecReducer } from './incdecReducer';
import { LoginReducer } from './LoginReducer';
import { rootReducer } from '../rootReducer';


const allReducer = combineReducers({
    incdecReducer:incdecReducer,
    LoginReducer:LoginReducer,
    rootReducer:rootReducer
});

const store = createStore(allReducer,{});

export default store;
