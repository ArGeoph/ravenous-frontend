import React from 'react';
import { Business } from '../Business/Business';
import './BusinessList.css';

/**
 * Renders list of business tiles filled with information received from Yelp API
 * @param props
 * @returns {*}
 * @constructor
 */
export const BusinessList = React.memo(({ businesses }) => {
    return (
        <div className='BusinessList'>
            {businesses.map(business => <Business key={ business.id } business={ business } />)}
        </div>
    );
});// End of BusinessList Component
// End of file
