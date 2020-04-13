import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import '../App.scss'
import { Link } from "react-router-dom";

export default class Navigasi extends Component {
    render() {
        return (
            <div>

                    <Nav className="justify-content-center bg-dark" activeKey="/home">
                    
                    <a href="#" className="navbar-brand text-left">Muhamad Khairavi</a>
                    
                    <Nav.Item>
                        <Nav.Link className="text-light" as={Link} to={"/"}>FunctionBase</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-light" as={Link} to={"/classbase"}>ClassBase</Nav.Link>
                    </Nav.Item>
                    </Nav>              
            </div>
        )
    }
}
