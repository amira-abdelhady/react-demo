export const productsReducer=(state=[],action)=>{
    // console.log("action",action);
            console.log("action payload",action.payload);
    switch (action.type) {
        case "GET_PRODUCTS":
            return action.payload
        default:
            return state
    }
}