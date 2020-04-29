import React from 'react';
import Header from './components/header'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Router>
                <Header />

                <Switch>
                    <Route path="/top_10">
                        top
                    </Route>
                    <Route path="/contact">
                    </Route>
                    <Route path="/">
                        home
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
