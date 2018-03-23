import React from 'react';
import ReactDOM from 'react-dom';
import {First} from './src/Components/firstComponent';
import {Second , Third} from './src/Components/secondComponent';

class App extends React.Component {
    render() {
        return(
            <div>
               <p><First/></p>
               <p><Second/></p> 
               <p><Third/></p>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('myApp'));

