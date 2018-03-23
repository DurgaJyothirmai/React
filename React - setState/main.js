import React from 'react';
import ReactDOM from 'react-dom';
import {Parent} from './Parent.js';

class Main extends React.Component {
    constructor() {
        super();
        console.log(this);
        this.state = {
            name: 'Suman',
            company: 'TCS'
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange() {
        this.setState({
            name: 'Rahul'
        })
    }
    render() {
        return(
            <Parent Name = {this.state.name} change = {this.onChange}/>
        );
    }
}

ReactDOM.render(<Main/>,document.getElementById('app'));