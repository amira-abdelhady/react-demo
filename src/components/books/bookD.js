import React,{useEffect,useState} from 'react'
import { axiosInstance } from '../../pages/network'

export default function BookDetails(props) {
    const [data,setData]=useState(null)
    useEffect(()=>{
       /*  axiosInstance.get('todos/'+props)
        .then((res)=>{
            setData(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        }) */
        
    },[])
    console.log(props);
    return (
        <div>
            BookDetails
        </div>
    )
}
