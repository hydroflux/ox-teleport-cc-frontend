export const parseHTTPResponse = response => response.json()

let searchURL = 'https://api.teleport.org/api/cities/'
export const searchCity = (searchTerm) => {
    searchURL = `${searchURL}?search=${searchTerm}`
    return fetch( searchURL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
}