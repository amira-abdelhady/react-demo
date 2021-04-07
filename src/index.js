import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Header from "./components/header/header";
import reportWebVitals from "./reportWebVitals";
import Section1 from "./components/section/section1";
import Calc from "./components/calc/calc";
import App from "./App";

ReactDOM.render(
  <>
    {/* <Header />
    <Section1 num={""}/>
    <Calc/> */}
    <App/>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
