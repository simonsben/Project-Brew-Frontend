import React from 'react'
import beer from '../../resources/beer.svg'
import './landing.css'

export const Landing = props => {
    return (
        <div className='container'>
            <div className='brand_container'>
                <div className='brand header'>Welcome to project brew</div>
                <div className='brand_content'>
                    We're here to help you get just a little more 
                    alcohol, one bottle at a time. Having said that,
                    always drink responsibly, whatever that means to you.
                </div>
                <img className='brand_icon' src={beer}></img>
            </div>
            <div className='content'>
                <div className='content_item'>
                    
                </div>
            </div>
        </div>
    );
}