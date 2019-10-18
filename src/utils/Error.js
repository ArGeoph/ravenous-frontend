import React from 'react';
import './Error.css';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Error = (props) => {
    return (<h3 className="error">{props.errorMessage}</h3>);
};
// End of file
