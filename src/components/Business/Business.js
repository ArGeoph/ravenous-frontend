import React from 'react';
import './Business.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
// import { faPinterestF } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt, faPhone);

//React component class, which will be used to render information about each business
export class Business extends React.Component {
    render() {
        const business = this.props.business;
        
        return (
            <div className="Business">
                <div className="image-container">
                    <img 
                        src={business.imageSrc} 
                        alt=""                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                    />    

                    <h2>{business.name}</h2>  
                    <div className="Business-information">
                        <div className="Business-address">
                            <p>                                
                                <a href={"https://www.google.com/maps/place/" + business.address + " " + business.city} target="_blank" rel="noopener noreferrer">
                                    {business.address}  <FontAwesomeIcon icon="map-marker-alt" />   
                                </a>

                            </p>
                            <p>{business.city}</p>
                            <p>{business.state} {business.zipCode}</p>
                            <p>
                                {business.phone} 
                                <FontAwesomeIcon icon="phone" />
                            </p>
                        </div>

                        <div className="Business-reviews">
                            <h3>{business.category}</h3>
                            <h3>{business.priceRange}</h3>
                            <h3 className="rating">{business.rating} star{business.rating > 0 && business.rating <= 1 ? "" : "s"}</h3>
                            <p>{business.reviewCount} review{business.reviewCount === 1 ? "" : "s"}</p>
                        </div>
                    </div>   
                    <a href={business.url} target="_blank" rel="noopener noreferrer">Open restaurant's page</a>
                    <div></div>
                </div>           
            </div>
        );
    }
}