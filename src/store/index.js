import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from "./reducer";


export default createStore(
    combineReducers(reducers),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
        )

    )
    
);