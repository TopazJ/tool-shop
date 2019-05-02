import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

class NavBar extends Component {
  render() {
    const { items, suppliers } = this.props;
    return (
      <Nav variant="tabs" className="flex-row">
        <Col md="auto">
          <Nav.Item>
            <Nav.Link eventKey="items">
              Items <Badge variant="secondary">{items.length}</Badge>
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col md="auto">
          <Nav.Item>
            <Nav.Link eventKey="suppliers">
              Suppliers <Badge variant="secondary">{suppliers.length}</Badge>
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col md="auto">
          <Nav.Item>
            <Nav.Link eventKey="orders">
              Orders <Badge variant="secondary">Total # of Orders Here</Badge>
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Nav>
    );
  }
}

export default NavBar;
