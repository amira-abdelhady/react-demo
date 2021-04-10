import { createStore} from "redux";
import combineReducers from "./combine";

//redux dev tool
// const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

   import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(combineReducers, composeWithDevTools() );

export default store;
