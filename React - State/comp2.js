import React from 'react';

export class ThirdApp extends React.Component {
    constructor(props) {
        {
            //to access props inside costructor pass it in super and constructor as well.
            //if we are not passing props - error props is undefined
        }
        super(props);
        console.log(this.props.name);
        {
            //declaring array
        }
        this.state = {
            subjects : ['Maths', 'Physics', 'Chemistry'],
            data :  [
                {
                    name: 'Rakesh',
                    age: '23'
                },
                {
                    name: 'Suma',
                    age: '25'
                }
            ]
        }
    }
    render() {
        return(
            <div>
                Subjects List - {this.state.subjects}
                <br/>
                Name - {this.state.data.map((person) => person.name)}
            </div>
        )
    }
}