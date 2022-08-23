import { legacy_createStore } from "redux"
//import { createStore } from "redux" [DEPRECADO, use legacy_...]
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducers/rootReducer";


export const createAppStore = () => {
    // let store = createStore [DEPRECADO]
    let store = legacy_createStore(rootReducer, composeWithDevTools());

    return store;
}