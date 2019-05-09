import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

class Buttons extends Component {
    render() {
        const { importFile, type } = this.props;
        return (
            <Col sm={2}>
                <ListGroup>
                    <Button bsPrefix="btn btn-success btn-sm m-2">
                        Add {type}
                    </Button>
                    <Button
                        bsPrefix="btn btn-success btn-sm m-2"
                        onClick={() =>
                            importFile("./text/" + type + "s.txt", type)
                        }
                    >
                        Import {type}s
                    </Button>
                    <Button bsPrefix="btn btn-success btn-sm m-2">
                        Refresh
                    </Button>
                </ListGroup>
            </Col>
        );
    }
}

export default Buttons;
