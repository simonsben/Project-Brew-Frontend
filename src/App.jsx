import React, { Component, Fragment } from 'react';
import { Landing } from './app/landing/Landing';
import { Footer } from './app/footer/Footer'
import { Nav } from './app/nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nav />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
