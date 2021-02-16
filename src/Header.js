import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';

function Header() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Link to="/">
                <Navbar.Brand>
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                TeenMarket
                </Navbar.Brand>
            </Link>
            <Link to="/cart">
                <Navbar.Brand>
                Cart {cart?.length}
                </Navbar.Brand>
            </Link>
        </Navbar>
        </>
    )
}

export default Header
