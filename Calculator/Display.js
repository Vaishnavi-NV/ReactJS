import React, {Component} from 'react';
import './Calculator.css';
 
class Display extends Component
{
    render()
    {
        return(
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}
 
export default Display;
