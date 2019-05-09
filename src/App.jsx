import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import NavBar from "./components/navbar.jsx";
import Tools from "./components/tools.jsx";
import Buttons from "./components/buttons.jsx";
import Suppliers from "./components/suppliers.jsx";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";

class App extends Component {
    state = {
        items: [
            {
                id: 1000,
                name: "Knock Bits",
                qty: 88,
                price: 12.67,
                supplierID: 8015
            },
            {
                id: 1001,
                name: "Widgets",
                qty: 10,
                price: 35.5,
                supplierID: 8004
            }
        ],
        itemSearch: [
            {
                id: 1000,
                name: "Knock Bits",
                qty: 88,
                price: 12.67,
                supplierID: 8015
            },
            {
                id: 1001,
                name: "Widgets",
                qty: 10,
                price: 35.5,
                supplierID: 8004
            }
        ],
        suppliers: [
            {
                id: 8001,
                name: "Grommet Builders",
                address: "788 30th St., SE, Calgary",
                contact: "Fred"
            },
            {
                id: 8002,
                name: "Pong Works",
                address: "749 Dufferin Blvd., SE, Calgary",
                contact: "Bart"
            }
        ],
        itemSearchInput: ""
    };

    render() {
        return (
            <React.Fragment>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Tool Shop</Navbar.Brand>
                </Navbar>
                <Tab.Container id="toolshop-tabs" defaultActiveKey="items">
                    <NavBar
                        items={this.state.items}
                        suppliers={this.state.suppliers}
                    />
                    <Tab.Content>
                        <Tab.Pane eventKey="items">
                            <Row>
                                <Buttons
                                    importFile={this.readTextFile}
                                    type={"Item"}
                                />
                                <Tools
                                    items={this.state.itemSearch}
                                    onOrder={this.handleOrder}
                                    onSell={this.handleSell}
                                    onRemove={this.handleRemove}
                                    onSearch={this.handleSearch}
                                />
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="suppliers">
                            <Row>
                                <Buttons
                                    importFile={this.readTextFile}
                                    type={"Supplier"}
                                />
                                <Suppliers suppliers={this.state.suppliers} />
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders" />
                    </Tab.Content>
                </Tab.Container>
            </React.Fragment>
        );
    }

    handleOrder = item => {
        const items = [...this.state.items];
        const index = items.indexOf(item);
        items[index] = { ...item };
        items[index].qty++;
        this.setState({ items });
        this.doSearch(items);
    };

    handleSell = item => {
        const items = [...this.state.items];
        const index = items.indexOf(item);
        items[index] = { ...item };
        items[index].qty--;
        this.setState({ items });
        this.doSearch(items);
    };

    handleRemove = itemID => {
        const items = this.state.items.filter(i => i.id !== itemID);
        this.setState({ items });
        this.doSearch(items);
    };

    handleSearch = input => {
        this.state.itemSearchInput = input.target.value.toLowerCase();
        this.doSearch(this.state.items);
    };

    doSearch = items => {
        if (this.state.itemSearchInput === "") {
            const itemSearch = items;
            this.setState({ itemSearch });
        } else {
            const itemSearch = items.filter(item => {
                const check = item.name + item.id;
                const lowerCheck = check.toLowerCase();
                return lowerCheck.includes(this.state.itemSearchInput);
            });
            console.log(itemSearch);
            this.setState({ itemSearch });
        }
    };

    readTextFile = type => {
        const rawFile = new XMLHttpRequest();
        const file = "text/" + type.toLowerCase() + "s.txt";
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    const allText = rawFile.responseText;
                    const a = allText.split("\n");
                    if (type === "Item") {
                        this.readItems(a);
                    } else if (type === "Supplier") {
                        this.readSuppliers(a);
                    }
                }
            }
        };
        rawFile.send(null);
    };

    readItems = data => {
        const items = [];
        data.map(item => {
            const b = item.split(";");
            const c = {
                id: b[0],
                name: b[1],
                qty: b[2],
                price: b[3],
                supplierID: b[4]
            };
            items.push(c);
        });
        this.setState({ items });
        this.doSearch(items);
    };

    readSuppliers = data => {
        const suppliers = [];
        data.map(supplier => {
            const b = supplier.split(";");
            const c = {
                id: b[0],
                name: b[1],
                address: b[2],
                contact: b[3]
            };
            suppliers.push(c);
        });
        this.setState({ suppliers });
    };
}

export default App;
