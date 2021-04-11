import { axiosInstance2 } from "../pages/network";

export const productsAction=()=>(dispatch)=>{
    axiosInstance2.get('/products')
    .then((res)=>{
        dispatch({
            type:'GET_PRODUCTS',
            payload:res.data
        })
    }).catch((err)=>{
            console.log(err);
        })
}