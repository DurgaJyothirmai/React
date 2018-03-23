import React from 'react';

export class First extends React.Component {
    constructor() {
        super();
        this.changeText = this.changeText.bind(this);
    }
    changeText() {
        this.props.elemChange();
    }
    render() {
        return(
            <div>{this.props.txtMsg}
                <button onClick={this.changeText}>Click Me</button>
            </div>
        )
    }
}