import React from 'react';
import ReactDOM from 'react-dom';
import {FirstComp} from './firstComp.js';
import {Secondcomp} from './secondComp.js';
import {ThirdComp} from './thirdComp.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstComp name="Ravi" age="25"/>
                {
                    //Way to put children while invoking component
                }
                <Secondcomp title="Browsers">
                    <p>Google Chrome</p>
                    <p>Internet Explorer</p>
                    <p>Safari</p>
                    <p>Mozilla Firefox</p>
                </Secondcomp>
                <ThirdComp/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('apps'));