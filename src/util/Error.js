import React from 'react';
import './Error.css';

export const Error = (props) => {
    return (<h3 className="error">{props.errorMessage}</h3>);
}