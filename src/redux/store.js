import {applyMiddleware, combineReducers, createStore} from "redux";
import {concertReducer} from './reducers/concert-reducer'
import thunk from "redux-thunk";

const reducers = combineReducers({
    concert: concertReducer
})


export const store = createStore(reducers, applyMiddleware(thunk))