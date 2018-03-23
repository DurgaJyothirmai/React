import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Home} from './Home.js';
import {Login} from './Login.js';

export class Routes extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}