import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './RouteComponent.js';

class Main extends React.Component {
    render() {
        return(
            <Routes/>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('app'));