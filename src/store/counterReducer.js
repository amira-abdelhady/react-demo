
export const counterReducer=(state=0,action)=>{
    switch (action.type) {
        case "INCREASE_COUNTER":
            return action.payload
    
        default:
            return state
    }
}