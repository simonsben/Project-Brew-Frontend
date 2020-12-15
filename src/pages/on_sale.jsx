import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdvTable from '../components/table';
import { assemble_beer_info } from '../actions/assemble_data';
import { arg_max } from '../actions/utilies';


const sale_target = {
    key: 'sale_percent',
    name: 'Sale (%)',
    is_numeric: true,
    formatter: value => (value * 100).toFixed(2)
};


const OnSale = props => {
    const beers = props.beers
        .map(beer => {
            let has_sale = false;
            beer['containers'].forEach(container => {
                if (container['sale_percent'] > 0)
                    has_sale = true;
            });
            
            if (!has_sale)
                return null;
            
            beer = {
                ...beer,
                main: arg_max(beer['containers'], null, 'sale_percent')['max_index']
            }
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

            return beer_b['containers'][b_index]['sale_percent'] - beer_a['containers'][a_index]['sale_percent'];
        });
    
    
    const { header, beer_info, is_numeric } = assemble_beer_info({beers, target: sale_target});

    return (
        <Fragment>
            <Row className='top_pad'>
                <Col>
                    <h1 className='display-4 text-center'>Beers on sale</h1>
                    <p className='lead text-center'>
                        <span className='larger'>Here are the beers on sale, ranked by how big the sale is. </span><br />
                        Click on a beer for more information.
                    </p>
                </Col>
            </Row>
            <Row>
                <AdvTable header={ header } data={ beer_info } is_numeric={ is_numeric } />
            </Row>
        </Fragment>
    )
}

export default OnSale;
