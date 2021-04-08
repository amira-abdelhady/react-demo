import React,{useEffect,useState} from 'react'
import { axiosInstance2 } from '../../pages/network'

export default function ProductDetails(props) {
    const id=props.match.params.id
    const [data,setData]=useState(null)
    useEffect(()=>{
       /*  axiosInstance2.get('todos/'+id)
        .then((res)=>{
            // setData(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        }) */
        
    },[])
    const renderData=()=>{
        return(
            data?data.map((d)=>{
                return <div>
                    {/* {d.title} */}
                </div>
            })
            :<div>...loading</div>
        )
    }
    console.log(id);
    return (
        <div>
            {renderData}
        </div>
    )
}
