import React from 'react';
import './ErrorMessage.css';

/**
 * Renders error message
 * @param props
 * @returns {*}
 * @constructor
 */
export const ErrorMessage = React.memo(({ errorMessage }) => {
    return <h3 className="error">{ errorMessage }</h3>;
});// End of functional component
// End of file
