import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Supplier extends Component {
  render() {
    const { supplier } = this.props;
    return (
      <ListGroup.Item>
        <Container fluid="true">
          <Row>
            <Col md="1">{supplier.id}</Col>
            <Col md="2">{supplier.name}</Col>
            <Col md="3">{supplier.address}</Col>{" "}
            <Col md="1">{supplier.contact}</Col>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  }
}

export default Supplier;
