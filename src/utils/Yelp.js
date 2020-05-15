import { apiKey } from './ApiKeys';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${ term }&location=${ location }&sort_by=${ sortBy }`,
                    { headers: {
                        'Authorization' : `Bearer ${ apiKey }`
                    } }
        ).then((response) => { 
            return response.json();
        }).then((jsonResponse) => {
                return jsonResponse.businesses.map((business) => {
                    if (jsonResponse.businesses) {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[ 0 ].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url,
                            phone: business.phone,
                            priceRange: business.price
                        };
                    }
                    else {
                        throw Error('Nothing was returned');
                    }

                });
            }).catch(() => {
                return [];
            });
    }
}