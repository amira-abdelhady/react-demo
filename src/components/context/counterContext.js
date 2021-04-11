import React, { useContext } from 'react'
import CounterContext from '../../counterContext'

export default function CounterContextCom() {
    let{counter,setCounter}=useContext(CounterContext)
    console.log(counter);
    return (
        <div className="container">
            counter {counter}
            <div className="row mt-3">
            <button className="btn btn-success mr-3" onClick={()=>{
                setCounter(++counter)
            }}>
              +
            </button>
          <button className="btn btn-success " onClick={()=>{
                setCounter(--counter)
            }}>
              -
            </button>
          </div>
        </div>
    )
}
