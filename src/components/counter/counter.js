import React,{Component, useEffect} from 'react'
import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {icreaseCounter} from '../../store/actions'
export default function Counter() {
    let c=useSelector((state)=>state.count)
    //console.log(c);
    const disptch=useDispatch();
    useEffect(() => {
        console.log(c);
    }, [c])
    return (
        <div className="container">
            counter {c}
            <div className="row mt-3">
            <button className="btn btn-success mr-3" onClick={()=>{
                disptch(icreaseCounter(++c))
            }}>
              +
            </button>
          <button className="btn btn-success " onClick={()=>{
                disptch(icreaseCounter(--c))
                
            }}>
              -
            </button>
          </div>
        </div>
    )
}

/* class Counter extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
            counter {this.props.count}
            <div className="row mt-3">
            <button className="btn btn-success mr-3" onClick={()=>{
                // let o=++this.props.count
                console.log("oooo",this.props.count++);
            //    this.props.icreaseCounter(this.props.count)
            }}>
              +
            </button>
          <button className="btn btn-success " onClick={()=>{
                this.props.icreaseCounter(--this.props.count)
            }}>
              -
            </button>
          </div>
        </div>
        )
    }
}

const mapStateToProps=({count})=>{
    return{
        count
    }
}

export default connect(mapStateToProps,{icreaseCounter})(Counter) */