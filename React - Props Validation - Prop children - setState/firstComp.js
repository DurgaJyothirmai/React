import React from 'react';
import PropTypes from 'prop-types';

export class FirstComp extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}
{
    //proptypes r used to identify type of props
    //if types of prop mismatches then error wil cme - ex: type of prop "name" will throw err 
}
FirstComp.propTypes = {
    name: PropTypes.number,
    age: PropTypes.string
}
