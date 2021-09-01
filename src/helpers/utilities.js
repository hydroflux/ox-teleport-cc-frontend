export const parseHTTPResponse = response => response.json()

export const getSampleCities = () => {
    return fetch('https://api.teleport.org/api/cities', {
        headers: {
          'Content-Type': 'application/json'
        }})
            .then( parseHTTPResponse )
            .then( ({_embedded}) => _embedded["city:search-results"] )
}

export const searchCity = (searchTerm) => {
    let searchURL = 'https://api.teleport.org/api/cities/'
    searchURL = `${searchURL}?search=${searchTerm}`

    return fetch( searchURL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then( parseHTTPResponse )
}

export const getUrbanAreaDetails = city_details => {
    if ( city_details._links["city:urban_area"] ){
        const { href } = city_details._links["city:urban_area"]
        const urbanAreaDetailsURL = `${href}scores`
    
        return fetch( urbanAreaDetailsURL )
            .then( parseHTTPResponse )
            .then( ({  categories }) => categories )
    } else {
        return new Promise( () => [])
    }
}