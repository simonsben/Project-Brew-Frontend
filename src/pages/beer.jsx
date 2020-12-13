import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdvTable, { make_url } from '../components/table';
import { assemble_beer_info } from '../actions/assemble_data';


const Beer = props => {
    const { beer_name } = props.match.params;

    const target = props.beers.filter(beer => make_url(beer['name']) === beer_name);
    if (target.length > 1)
        console.log('WARNING: Multiple hits, using first one.');
    else if (target.length <= 0)
        return null
    
    const beer = target[0];

    const to_remove = ['name'];
    const containers = beer['containers']
        .map((_, index) => ({...beer, main: index}))
        .sort((beer_a, beer_b) => {
            const index_a = beer_a['main'];
            const index_b = beer_b['main'];

            return beer_b['containers'][index_b]['alcohol_value'] - beer_a['containers'][index_a]['alcohol_value'];
        });


    const { header, beer_info, is_numeric } = assemble_beer_info({beers: containers, to_remove});

    return (
        <Fragment>
            <Row className='top_pad bot_pad'>
                <Col className='align-middle'>
                    <h1 className='display-4'>{ beer['name'] }</h1>
                    <p className='lead larger'>{ beer['description'] }</p>
                </Col>
                <Col>
                    <img src={beer['image_link']} alt='' />
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    { JSON.stringify(beer) }
                </Col>
            </Row> */}
            <Row>
                <AdvTable no_url header={ header } data={ beer_info } is_numeric={ is_numeric } />
            </Row>
        </Fragment>
    )
}

export default Beer;
