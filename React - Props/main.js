import React from 'react';
import ReactDOM from 'react-dom';
import {Parent}from './src/components/ParentComponent';

class App extends React.Component {
    render() {
        return(
            <div>
                {
                    //sending properties to component
                }
                <Parent name="Ram" age="25" Company = "TCS"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('myApp'));