import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

const header_items = [
    { name: 'Home', route: '/' },
    { name: 'Top 10', route: '/top_10' },
    { name: 'All Beers', route: '/all_beers' }
]

const Header = props => {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img src="assets/favicon-32x32.png" width="30" height="30" className="navbar_icon" />{' '}
                Project Brew
            </Navbar.Brand>
            <Nav className="mr-auto">
                {
                    header_items.map(item => (
                        <Nav.Link href={item.route} key={item.route}>
                            { item.name }
                        </Nav.Link>
                    ))
                }
            </Nav>
        </Navbar>
    );
}

export default Header;
