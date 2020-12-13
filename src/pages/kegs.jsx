import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdvTable from '../components/table';
import { assemble_beer_info } from '../actions/assemble_data';
import { arg_max } from '../actions/utilies';


const value_target = {
    key: 'value',
    name: 'Value (mL/$)',
    is_numeric: true,
    // formatter: value => (value * 100).toFixed(2)
};

const keg_accessor = container => {
    if (container['container_type'] !== 'Keg')
        return 0;
    return container['value'];
}


const Kegs = props => {
    const beers = props.beers
        .map(beer => {
            let has_kegs = false;
            beer['containers'].forEach(container => {
                if (container['container_type'] === 'Keg')
                    has_kegs = true;
            });
            
            if (!has_kegs)
                return null;

            beer = {
                ...beer,
                main: arg_max(beer['containers'], keg_accessor)['max_index']
            };
            Object.keys(beer).forEach(key => {
                const main_container = beer['containers'][beer['main']];

                if (key in main_container)
                    beer[key] = main_container[key];
            })
            
            return beer;
        })
        .filter(beer => beer !== null)
        .sort((beer_a, beer_b) => {
            const a_index = beer_a['main'];
            const b_index = beer_b['main'];

            return beer_b['containers'][b_index]['value'] - beer_a['containers'][a_index]['value'];
        });
    
    
    const to_remove = ['quantity', 'container_type'];
    const { header, beer_info, is_numeric } = assemble_beer_info({beers, target: value_target, to_remove});

    return (
        <Fragment>
            <Row className='top_pad'>
                <Col>
                    <h1 className='display-4 center_text'>Kegs! Kegs! Kegs!</h1>
                    <p className='lead larger center_text'>Here are the kegs sold by the beer store, ranked by amount of beer per dollar.</p>
                </Col>
            </Row>
            <Row>
                <AdvTable header={ header } data={ beer_info } is_numeric={ is_numeric } />
            </Row>
        </Fragment>
    )
}

export default Kegs;
