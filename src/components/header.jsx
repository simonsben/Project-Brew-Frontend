import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import '../App.scss';

const header_items = [
    { name: 'Top 10', route: '/top_10' },
    { name: 'All Beers', route: '/all_beers' },
    { name: 'On Sale', route: '/on_sale' },
    { name: 'Kegs', route: '/kegs' },
    // { name: 'search', route: '/search' }
];

const Header = props => {

    return (
        <Navbar bg="dark" variant="dark">
            <Link to='/' className='navbar-brand'>
                <img src="/assets/favicon-32x32.png" width="30" height="30" className="navbar_icon" alt='' />{' '}
                Project Brew
            </Link>
            <Nav className="mr-auto">
                {
                    header_items.map(item => (
                        <Link 
                            key={item.name} 
                            to={item.route} 
                            className='nav-link'> 
                            { item.name } 
                        </Link>
                    ))
                }
            </Nav>
        </Navbar>
    );
};

export default Header;
