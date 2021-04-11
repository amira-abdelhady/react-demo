 

import { combineReducers } from "redux";
import {counterReducer} from './counterReducer'
import {cartReducer} from './cartReducer'
import { productsReducer } from "./productsReducer";
export default combineReducers({
    count:counterReducer,
    cartLength:cartReducer,
    products:productsReducer
});
 