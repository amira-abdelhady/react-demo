import React, { Component } from 'react'

export class Result extends Component {
    render() {
        let Style={
            backgroundColor: this.props.bgColor ? this.props.bgColor : "grey",
            color:this.props.color?this.props.color:"white",
            textAlign:"right",border:"10px solid "+this.props.border
          }
        return (
            <div style={Style}>
                0
            </div>
        )
    }
}

export default Result
