// import { apiKey } from './ApiKeys';
// import { geoMapKey } from './ApiKeys';

const defaultAutocomplete = ['mcdonald"s', 'kfc', 'sushi', 'subway', 
                            'pizza', 'steakhouse', 'korean', 'german', 
                            'french', 'ethiopian', 'arab', 'uzbek', 
                            'greek', 'italian', 'thai', 'vietnamese', 
                            'indian', 'chinese', 'russian', 'mexican', 
                            'american', 'cuban', 'ukranian', 'canadian',
                            'japanese', 'steak', 'downtown',
                            'mediterranean', 'fast food', 'bbq', 'brazilian',
                            'vegetarian', 'punjabi'];

const getSuggestions = async (location) => {
    // !!! Fix later ///
    // try {
    //     // const coordinates = await getLatitudeAndLongitude(location);

    //     const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?latitude=${coordinates.lat}&longitude=${coordinates.lng}&text="restaurants"`,
    //     {headers: {
    //         'Authorization' : `Bearer ${apiKey}`
    //     }});

    //     if (response.ok) {
    //         const jsonResponse = await response.json();


    //         return defaultAutocomplete.concat(
    //             jsonResponse.categories.map(catObject => catObject.alias),
    //             jsonResponse.terms.map(termsObj => termsObj.text));
    //     }  
    // }
    // catch(error) { // If there's a network error (i.e. no internet connection, or api is unavailable return default autocomplete list)
    //     console.log(error);

    //     return defaultAutocomplete;
    // }

    return defaultAutocomplete;
}

// const getLatitudeAndLongitude = async (location) => {
//     try {
//         const response = await fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${geoMapKey}&location=17 Ave SW Calgary"`);

//         if (response.ok) {
//             const jsonResponse = await response.json();

//             return jsonResponse.results[0].locations[0].latLng;
//         }
//     }
//     catch(error) { 
//         console.log(error);
//     }
// };

export default getSuggestions;