import { Component } from 'react'

import SearchBar from 'material-ui-search-bar'
import { parseHTTPResponse, searchCity } from '../../helpers/utilities'

export default class SearchContainer extends Component {

    state = {
        searchTerm: '',
        results: []
    }

    handleChange = searchTerm => this.setState({ searchTerm })

    handleSearch = () => {
        const { searchTerm } = this.state
        // const { history } = this.props
        searchCity(searchTerm)
            .then( parseHTTPResponse )
            .then( console.log )
            .then( response => {
                this.SetState({
                    results: response._embedded["city:search-results"]})})
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
