import React from 'react'
import './nav.css'

export const Nav = props => {
    return (
        <div className='nav'>
            <span className='nav_main header'>Project Brew</span>

            <span className='nav_item'>Top 10</span>
            <span className='nav_item'>All Beers</span>
            <span className='nav_item'>On Sale</span>
            <span className='nav_item'>Kegs</span>
            <span className='nav_item'>Search</span>
        </div>
    )
}