import { applyMiddleware, createStore} from "redux";
import combineReducers from "./combine";

//redux dev tool
// const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

   import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
// const store = createStore(combineReducers, composeWithDevTools() );

// with thunk
const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)) );

export default store;
