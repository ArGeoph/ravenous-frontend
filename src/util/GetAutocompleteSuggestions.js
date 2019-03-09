import { apiKey } from './ApiKeys';
import { geoMapKey } from './ApiKeys';

const defaultAutocomplete = ['german', 'greek', 'italian', 'thai', 'vietnamese', 'indian', 'chinese', 'russian', 'mexican', 'american', 'cuban', 'ukranian'];

const getSuggestions = async (location) => {
    try {
        const coordinates = await getLatitudeAndLongitude(location);

        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?latitude=${coordinates.lat}&longitude=${coordinates.lng}&text="korea"`,
        {headers: {
            'Authorization' : `Bearer ${apiKey}`
        }});

        if (response.ok) {
            const jsonResponse = await response.json();


            return defaultAutocomplete.concat(
                jsonResponse.categories.map(catObject => catObject.alias),
                jsonResponse.terms.map(termsObj => termsObj.text));
        }  
    }
    catch(error) {
        console.log(error);
    }
}

const getLatitudeAndLongitude = async (location) => {
    try {
        const response = await fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${geoMapKey}&location=1053 10 St SW Calgary"`);

        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse.results[0].locations[0].latLng;
        }
    }
    catch(error) {
        console.log(error);
    }
};

export default getSuggestions;