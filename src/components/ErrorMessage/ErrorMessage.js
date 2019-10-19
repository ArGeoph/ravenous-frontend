import React from 'react';
import './ErrorMessage.css';

/**
 * Renders error message
 * @param props
 * @returns {*}
 * @constructor
 */
export const ErrorMessage = React.memo(function ErrorMessage(props) {
    return <h3 className="error">{props.errorMessage}</h3>;
});// End of functional component
// End of file
