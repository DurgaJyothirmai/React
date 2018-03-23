import React from 'react';

export class Parent extends React.Component {
    render() {
        return(
            <div>
                Person Details
                {
                    //using props to access data from another component - we wil pass(name,age and company) as an attribute to the class <parent />
                }
                <p>Name - {this.props.name}</p>
                <p>Age - {this.props.age}</p>
                <p>Company - {this.props.Company}</p>
            </div>
        );
    }
}