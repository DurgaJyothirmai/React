import React from "react";
import '../React-FirstComponent/style.css';

class Firstapp extends React.Component {
    render() {
        return(
            <div>
                {
                    //React returns only values from single div.So all code should go in one single div.
                    // to apply css we need to do npm install --save css-loader and add loader in webpack.config.js + use className in html
                }
                <h3 className="app-header">React JSX PROS</h3>
                <p> - It is faster because it performs optimization while compiling code to JavaScript</p>
                <p> - It is also type-safe and most of the errors can be caught during compilation</p>
                <p> - It makes it easier and faster to write templates, if you are familiar with HTML.</p>
            </div>
        )
    }
}

export default Firstapp;