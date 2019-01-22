import React from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business';

//React component used to nicely render information about restaurants received from YELP API, for now we will use static object business in Business.js
export class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business => {
                    return <Business key={business.id} business={business} />
                })}
            </div>
        );
    }
}