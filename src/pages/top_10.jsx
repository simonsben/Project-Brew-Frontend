import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdvTable from '../components/table';
import { assemble_beers, header, is_numeric } from '../actions/assemble_data';

const Top10 = props => {
    const top_10 = props.beers.slice(0, 10);
    console.log('top 10', top_10);

    return (
        <Fragment>
            <Row className='top_pad'>
                <Col>
                    <h1 className='display-4 center_text'>Top 10 tings</h1>
                    <p className='lead larger center_text'>Below is a summary of the top 10 beers based on the mL of alcohol per dollar.</p>
                </Col>
            </Row>
            {/* <Row>Graph is here.</Row> */}
            <Row>
                <AdvTable header={ header } data={ assemble_beers(top_10) } is_numeric={ is_numeric } />
            </Row>
        </Fragment>
    )
}

export default Top10;
