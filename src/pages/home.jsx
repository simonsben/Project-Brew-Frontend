import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.scss';

const Home = props => {
    return (
        <div className='landing'>
            <Row className='top_pad'>
                <Col>
                    <h1 className='display-2 center_text'>Project Brew</h1>
                    <p className='lead larger center_text'>The name of the game is information, and you need the best when it comes to your beer.</p>
                </Col>
            </Row>
            <hr />
            
            <Row>
                <Col>
                    <p className='h1'>Why does this project exist?</p>
                    <p className='lead'>This project exists because I care, maybe too much, that you know what's what with beer store prices.</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className='text-right'>
                    <p className='h1'>How can I trust this?</p>
                    <p className='lead'>
                        There is no reason for me to lie to you, all I do is pay the server fees. <br/>
                        The information is collected automatically every morning <a href='https://www.thebeerstore.ca/'>The Beer Store</a> and presented here.
                    </p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <p className='h1'>Enough reading, I want cheap beer.</p>
                    <p className='lead'>Me too friend, me too. Why not start by checking out the <a href='/top_10'>10 cheapest beers</a> right now?</p>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
