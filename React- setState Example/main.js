import React from 'react';
import ReactDOM from 'react-dom';
import {First} from './firstComponent.js';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'How are you?'
        }
        this.changeTxtMsg = this.changeTxtMsg.bind(this);
    }
    changeTxtMsg() {
        this.setState({
            text: 'I am good'
        })
    }
    render() {
        return(
            <First txtMsg = {this.state.text} elemChange={this.changeTxtMsg}/>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('app'));