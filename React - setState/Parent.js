import React from 'react';

export class Parent extends React.Component {
    constructor() {
        super();
        this.getDetails = this.getDetails.bind(this);
    }
    getDetails() {
        {
            //this will refer to prop defined in parent component
        }
        this.props.change();
    }
    render() {
        return(
            <div>{this.props.Name}
            <button onClick= {this.getDetails}>Click</button>
            </div>
        )
    }
}