const defaultAutocomplete = [ 'mcdonald\'s', 'kfc', 'sushi', 'subway',
                            'pizza', 'steakhouse', 'korean', 'german', 
                            'french', 'ethiopian', 'arab', 'uzbek', 
                            'greek', 'italian', 'thai', 'vietnamese', 
                            'indian', 'chinese', 'russian', 'mexican', 
                            'american', 'cuban', 'ukrainian', 'canadian',
                            'japanese', 'steak', 'downtown', 'shawarma',
                            'mediterranean', 'fast food', 'bbq', 'brazilian',
                            'vegetarian', 'punjabi', 'korean', 'gujarati', 'pakistani'];

const getSuggestions = async (location) => {
    return defaultAutocomplete;
}

export default getSuggestions;
