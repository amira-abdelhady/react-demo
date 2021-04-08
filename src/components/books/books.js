import React, { useEffect, useState } from 'react'
import axios from "axios"
import { axiosInstance } from '../../pages/network'
//'https://www.googleapis.com/auth/books/v1/volumes'
function Books() {
    const [data,setData]=useState(null)
    useEffect(()=>{
        axiosInstance.get('/volumes',{
            params:{
                q:"js"
            }
        })
        .then((res)=>{
            setData(res.data.items)
            console.log(res.data.items);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    },[])
    useEffect(()=>{console.log(data);},[data])
    const [book, setbook] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
      console.log(e.target.value);
    setbook( e.target.value);
    console.log(book);
  };
    return (
        <>
        <div className="container  mt-3">
      <form className={"row"} onSubmit={handleSubmit}>
        <input
          type="task"
          name="task"
          value={book}
          onChange={handleChange}
        />
       
        <div className="row">
          <button className="btn btn-success " type="submit">
            search
          </button>
        </div>
      </form>
    </div>
            <div className="container align-center">
                {data?data.map((d,i)=>{
                    return <div className="card  mt-3" key={i} >
                       <div className=" card-body"> {d.volumeInfo.title}</div>
                    </div>
                })
                :<div>...loading</div>
                }
            </div>
        </>
    )
}

export default Books
