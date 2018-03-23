import React from 'react';
import ReactDOM from 'react-dom';
import {SecondApp} from './comp1';
import {ThirdApp} from './comp2';

class MyApp extends React.Component {
    render() {
        return(
            <div>
                <SecondApp/>
                <ThirdApp name="Suresh" company="TCS"/>
            </div>
        );
    }
}

ReactDOM.render(<MyApp/>,document.getElementById('apps'));