import React, { useState } from "react";
import propTypes from 'prop-types';

const Hover = (props) => {
    const style = props.defaultStyle || {backgroundColor: '#00000000'};
    const hover = props.hoverStyle || {backgroundColor: '#00000066'};

    const [divStyle, setDivStyle] = useState(style);

    return (
        <div
        style={divStyle} 
        onMouseEnter={() => setDivStyle({...style, ...hover})}
        onMouseLeave={() => setDivStyle(style)}>
            {props.children}
        </div>
    );
}
Hover.propTypes = {
    defaultStyle: propTypes.object,
    hoverStyle: propTypes.object,
};
