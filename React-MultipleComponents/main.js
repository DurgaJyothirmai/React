alert("hi");

import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './src/components/HeaderComponent';
import {Footer} from './src/components/FooterComponent';

class App extends React.Component {
    render() {
        return(
            <div>
               <p><Header /></p>
               <p><Footer /></p>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('mApp'));