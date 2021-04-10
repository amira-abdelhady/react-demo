 

import { combineReducers } from "redux";
import {counterReducer} from './counterReducer'
import {cartReducer} from './cartReducer'
export default combineReducers({
    count:counterReducer,
    cartLength:cartReducer
});
 