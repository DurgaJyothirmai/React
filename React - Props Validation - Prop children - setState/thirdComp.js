import React from 'react';

export class ThirdComp extends React.Component {
    constructor() {
        super();
        this.state = {
            age : 35
        }
        this.getInfo = this.getInfo.bind(this);
    }
    getInfo() {
        {
            //to update the value of state we need to use setState
        }
        this.setState(
            {
                age: this.state.age + 8
            }
        )
    }
    render() {
        return(
            <div>
                {
                    //event handling - way to call a function when event occurs
                }
                <button onClick={this.getInfo}>Click Me..!!</button>
                {this.state.age}
            </div>
        );
    }
}