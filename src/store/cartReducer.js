export const cartReducer=(state={cart:0,items:[]},action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart:action.payload}
    case "ADD_ITEMS_TO_CART":
        return {
            ...state,
            items:state.items.concat(action.payload)
        }
        default:
            return state
    }
}