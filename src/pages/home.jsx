import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.scss';

const Home = props => {
    return (
        <div className='landing'>
            <Row className='top_pad'>
                <Col>
                    <h1 className='display-2 text-center'>Project Brew</h1>
                    <p className='larger lead text-center'>The name of the game is information, and you need the best when it comes to your beer.</p>
                </Col>
            </Row>
            <hr />
            
            <Row>
                <Col>
                    <p className='h1'>Why does this project exist?</p>
                    <p className='lead'>This project exists because I care, maybe too much, that you know what's what with The Beer Store's prices.</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className='home-right'>
                    <p className='h1'>Why should I trust this?</p>
                    <p className='lead'>
                        A beer's price isn't a matter of opinion, either it's cheap or it's not. <br />
                        The information is updated automatically every morning from <a href='https://www.thebeerstore.ca/'>The Beer Store</a> website.
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
