import React, { Component } from "react";
import Supplier from "./supplier";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "../App.css";

class Suppliers extends Component {
    render() {
        const { suppliers } = this.props;

        return (
            <Col sm={9}>
                <Form>
                    <Form.Group controlId="searchForm">
                        <Form.Control
                            as="input"
                            type="search"
                            placeholder="Search"
                        />
                    </Form.Group>
                </Form>
                <Container fluid="true">
                    <Row>
                        <Col md="1">ID</Col>
                        <Col md="2">Name </Col>
                        <Col md="3">Address</Col>
                        <Col md="1">Contact</Col>
                    </Row>
                </Container>
                <ListGroup bsPrefix="list-group1">
                    {suppliers.map(supplier => (
                        <Supplier key={supplier.id} supplier={supplier} />
                    ))}
                </ListGroup>
            </Col>
        );
    }
}

export default Suppliers;
