import React, { useEffect, useState ,} from "react";
import axios from "axios";
import { axiosInstance } from "../../pages/network";
import {  useDispatch,useSelector } from 'react-redux'
import {addToCart,addItemsToCart} from "../../store/actions"
//'https://www.googleapis.com/auth/books/v1/volumes'
function Books() {
  const [data, setData] = useState(null);
 
  const [book, setbook] = useState("");
  useEffect(() => {
    console.log(book);
  }, [book]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('name',book);

    axiosInstance
      .get("/volumes", {
        params: {
          q: book,
        },
      })
      .then((res) => {
        setData(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setbook(e.target.value);
    
  };
  let cart=useSelector((state)=>state.cartLength.cart)
  let items=useSelector((state)=>state.cartLength.items)
console.log(items);
  const disptch=useDispatch();
  return (
    <>
      <div className="container  mt-3">
        <form className={"row"} onSubmit={handleSubmit}>
          <input type="task" name="task" value={book} onChange={handleChange} />

          <div className="row">
            <button className="btn btn-success " type="submit">
              search
            </button>
          </div>
        </form>
      </div>
      <div className="container align-center row">
        {data ? (
          data.map((d, i) => {
            return (
              <div className="col-3" key={i} onClick={()=>{
                disptch(addToCart(++cart))                
                disptch(addItemsToCart(d.volumeInfo.title))

            }}>
              <div className="card  mt-3">
                <div className=" card-body"> {d.volumeInfo.title}</div>
                <img src={d.volumeInfo.imageLinks?d.volumeInfo.imageLinks.smallThumbnail:""} style={{maxWidth:"200px",maxHeight:"200px"}}/>
              </div>
            </div>
            );
          })
        ) : (
          <div className="container row">search fro a book ...</div>
        )}
      </div>
    </>
  );
}

export default Books;
