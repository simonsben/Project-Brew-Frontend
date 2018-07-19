import React from 'react'

export const Content = props => {
    const firstItem = 'Check out the top 10 beers right now!';
    const secondItem = "Maybe consider picking up one that's on sale!";
    const thirdItem = 'Or maybe consider checking out the vast list of brews!';

    return (
        <div className='landing_content'>
            <div className='content_item'>
                <PadContent text={firstItem}/>
            </div>
            <div className='content_item right'>
                <PadContent text={secondItem}/>
            </div>
            <div className='content_item'>
                <PadContent text={thirdItem}/>
            </div>
        </div>
    );
}

const PadContent = props => (
    <div className='inner_content'>{props.text}</div>
)