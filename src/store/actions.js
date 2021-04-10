
export const icreaseCounter =(payload)=>({
    type:"INCREASE_COUNTER"
    ,payload:payload<0?0:payload
})
export const addToCart =(payload)=>{
    return({
    type:"ADD_TO_CART"
    ,payload:payload
})}

export const addItemsToCart =(payload)=>{
    return({
    type:"ADD_ITEMS_TO_CART"
    ,payload:payload
})}