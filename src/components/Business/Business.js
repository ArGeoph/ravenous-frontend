import React from 'react';
import './Business.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { GOOGLE_MAPS_URL } from '../../utils/Constants';
library.add(faMapMarkerAlt, faPhone);

/**
 *  Renders individual business card
 */
export const Business = (props) => {
    const {
        address,
        city,
        category,
        imageSrc,
        name,
        state,
        phone,
        priceRange,
        rating,
        reviewCount,
        url,
        zipCode
    } = props.business;

    return (
        <div className='Business'>
            <div className='image-container'>
                <img
                    src={ imageSrc }
                    alt=''
                    loading='lazy'
                />

                <h2>{name}</h2>
                <div className='Business-information'>
                    <div className='Business-address'>
                        <p>
                            <a
                                href={ `${ GOOGLE_MAPS_URL }${ address } ${ city }` }
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {address} <FontAwesomeIcon icon='map-marker-alt' />
                            </a>
                        </p>
                        <p>{city}</p>
                        <p>{state} {zipCode}</p>
                        <p>
                            {phone}<FontAwesomeIcon icon='phone' />
                        </p>
                    </div>

                    <div className='Business-reviews'>
                        <h3>{category}</h3>
                        <h3>{priceRange}</h3>
                        <h3 className='rating'>
                            {rating} star{rating > 0 && rating <= 1 ? '' : 's'}
                        </h3>
                        <p>{reviewCount} review{reviewCount === 1 ? '' : 's'}</p>
                    </div>
                </div>
                <a href={ url } target='_blank' rel='noopener noreferrer'>Open business's page</a>
            </div>
        </div>
    );
}// End of Business component
// End of file
