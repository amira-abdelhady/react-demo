import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class Buttons extends Component {
    constructor(){
        super()
        
    }
  render() {
    let buttonStyle={
        backgroundColor: this.props.bgColor ? this.props.bgColor : "white",
        color:this.props.color?this.props.color:"brown",
        textAlign:"center",border:"10px solid "+this.props.border
      }
    return (
      <div
        style={buttonStyle}
      >
        {this.props.text}
      </div>
    );
  }
}
