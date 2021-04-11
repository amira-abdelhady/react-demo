import React, { useEffect, useState } from 'react'
import axios from "axios"
import { axiosInstance2 } from '../../pages/network'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../../store/actionThunk'
function ProductsThunk() {
    const data=useSelector((s)=>s.products)
        const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productsAction())
    },[])
        console.log("ProductsThunk",data);
    const renderData=()=>{
        return(
            data?data.map((d,i)=>{
                return <div className="container">
                    <div className="card  mt-3"  key={i} >
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

export default ProductsThunk
