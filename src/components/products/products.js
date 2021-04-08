import React, { useEffect, useState } from 'react'
import axios from "axios"
import { axiosInstance2 } from '../../pages/network'
function Products(props) {
    const [data,setData]=useState(null)
    useEffect(()=>{
        axiosInstance2.get('/products')
        .then((res)=>{
            setData(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    },[])
    const open=({id})=>{
        props.history.push('/products'+id)
    }
    const renderData=()=>{
        return(
            data?data.map((d,i)=>{
                return <div className="container">
                    <div className="card  mt-3"  key={i} onClick={()=>open(d.id)}>
                       <div className=" card-body"> 
                    {d.name}</div>
                    </div>
                </div>
            })
            :<div>...loading</div>
        )
    }
    return (
        <>
            <div >
               {renderData()}
            </div>
        </>
    )
}

export default Products
