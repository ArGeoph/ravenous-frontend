import React from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business';

/**
 * Renders list of business tiles filled with information received from Yelp API
 * @param props
 * @returns {*}
 * @constructor
 */
export const BusinessList = React.memo((props) => {
    return (
        <div className='BusinessList'>
            {/*Iterate through all business objects received from Yelp, and create an individual tile for each of them*/}
            {props.businesses.map(business => <Business key={ business.id } business={ business } />)}
        </div>
    );
});// End of BusinessList Component
// End of file
