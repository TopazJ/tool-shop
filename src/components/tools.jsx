import React, { Component } from "react";
import Tool from "./tool.jsx";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "../App.css";

class Tools extends Component {
    render() {
        const { items, onOrder, onSell, onRemove, onSearch } = this.props;

        return (
            <Col sm={9}>
                <Form>
                    <Form.Group controlId="searchForm">
                        <Form.Control
                            as="input"
                            type="search"
                            placeholder="Search"
                            onChange={onSearch}
                        />
                    </Form.Group>
                </Form>
                <Container fluid="true">
                    <Row>
                        <Col md="1">ID</Col>
                        <Col md="3">Item Name </Col>
                        <Col md="2">Quantity</Col>
                        <Col md="2">Price</Col>
                        <Col md="1">SupplierID </Col>
                    </Row>
                </Container>
                <ListGroup bsPrefix="list-group1">
                    {items.map(item => (
                        <Tool
                            key={item.id}
                            item={item}
                            onOrder={onOrder}
                            onSell={onSell}
                            onRemove={onRemove}
                        />
                    ))}
                </ListGroup>
            </Col>
        );
    }
}

export default Tools;
