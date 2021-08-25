export const parseHTTPResponse = response => response.json()

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

export const getSampleCities = () => {
    return fetch('https://api.teleport.org/api/cities', {
        headers: {
          'Content-Type': 'application/json'
        }})
            .then( parseHTTPResponse )
            .then( ({_embedded}) => _embedded["city:search-results"] )
}