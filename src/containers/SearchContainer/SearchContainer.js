import { Component } from 'react'

import SearchBar from 'material-ui-search-bar'
import { parseHTTPResponse } from '../../helpers/utilities'

let searchURL = 'https://api.teleport.org/api/cities/'

export default class SearchContainer extends Component {

    state = {
        searchTerm: ''
    }

    handleChange = searchTerm => this.setState({ searchTerm })

    handleSearch = () => {
        const { searchTerm } = this.state

        searchURL = `${searchURL}?search=${searchTerm}`

        fetch( searchURL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( parseHTTPResponse )
        .then(console.log)

    }
    render() {
        return (
            <SearchBar 
                className="search-bar"
                name="searchTerm"
                value={ this.state.searchTerm }
                placeholder="Search by city name"
                // cancelOnEscape={ true }
                onCancelSearch={ this.handleSearch }
                onRequestSearch={ this.handleSearch }
                onChange={this.handleChange}
            />
        )
    }
}
