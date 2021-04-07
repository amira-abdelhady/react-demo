import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Buttons from "./buttons";
import Result from "./result";
export default function Calc() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <Container style={{ fontSize: "50px" }}>
      <Row>
        <Col>
          {" "}
          <Result />
        </Col>
      </Row>
      <Row>
        <div className="col-8">
          <Buttons bgColor="" border="brown" color="" text={"clear"} />
        </div>
        <div className="col-4">
          <Buttons bgColor="brown" color="white" text={"/"} />
        </div>
      </Row>
      <Row style={{ backgroundColor: "brown", color: "white" }}>
        {numbers.map((n) => {
          return (
            <div className="col-4">
              <Buttons bgColor="" color="" border="brown" text={n} key={n} />
            </div>
          );
        })}
        <Buttons bgColor="brown" color="white" text={"-"} />
      </Row>
    </Container>
  );
}
