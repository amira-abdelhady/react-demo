import React from "react";
import { Container, Row, Col,Image } from "react-bootstrap";
export default function Section1({num}) {
  console.log(num);
  return (
    <Container fluid style={{backgroundColor:num?num:"grey"}}>
      <Row>
        <Col> Sals</Col>
        <Col> 
        <Image src="/images/1.jpg" style={{height:'500px'}}/>
        </Col>
      </Row>
    </Container>
  );
}
