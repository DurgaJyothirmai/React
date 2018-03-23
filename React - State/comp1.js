import React from 'react';

export class SecondApp extends React.Component {
    constructor() {
        {
            //we will pass props to super() i.e super(props) only when we are accessing props value inside constructor
        }
        super();
        this.state = {
            name: 'Ram'
        }
    }
    render() {
        return(
            <div>{this.state.name}</div>
        );
    }
}