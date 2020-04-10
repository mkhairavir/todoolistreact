import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import '../App.scss'
import { Link } from "react-router-dom";

export default class Navigasi extends Component {
    render() {
        return (
            <div>

                    <Nav className="justify-content-center bg-dark" activeKey="/home">
                    {/* <Link to="/"> */}
                    <a href="#" className="navbar-brand text-left !important;">Muhamad Khairavi</a>
                    {/* </Link> */}
                    <Nav.Item>
                       {/* <Link to="/component/Function"> */}
                    <Nav.Link className="text-light">FunctionBase</Nav.Link>
                    {/* </Link> */}
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="text-light">ClassBase</Nav.Link>
                    </Nav.Item>
                    </Nav>              
            </div>
        )
    }
}
