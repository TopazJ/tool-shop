import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Tool extends Component {
    render() {
        const { item, onOrder, onSell, onRemove } = this.props;
        return (
            <ListGroup.Item>
                <Container fluid="true">
                    <Row>
                        <Col md="1">{item.id}</Col>
                        <Col md="3">{item.name}</Col>
                        <Col md="2">
                            <Badge variant="warning">{item.qty}</Badge>
                        </Col>
                        <Col md="2">{item.price}</Col>{" "}
                        <Col md="1">{item.supplierID}</Col>
                        <Col md="3">
                            <Button
                                bsPrefix="btn btn-primary btn-sm m-2"
                                onClick={() => onSell(item)}
                            >
                                Sell
                            </Button>
                            <Button
                                bsPrefix="btn btn-primary btn-sm m-2"
                                onClick={() => onOrder(item)}
                            >
                                Order
                            </Button>
                            <Button
                                bsPrefix="btn btn-primary btn-sm m-2"
                                onClick={() => onRemove(item.id)}
                            >
                                Remove
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </ListGroup.Item>
        );
    }
}

export default Tool;
