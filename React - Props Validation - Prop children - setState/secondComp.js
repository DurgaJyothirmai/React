import React from 'react';
import '../React - Props Validation/Style.css';

export class Secondcomp extends React.Component {
    render() {
        return(
            <div>
                {
                    //to access children we need to use props.children
                }
                <p className="title">{this.props.title} - 
                    <span className="children">{this.props.children}</span>
                </p>
            </div>
        );
    }
}