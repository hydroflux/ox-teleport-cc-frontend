import { Component } from 'react'
import SearchBar from 'material-ui-search-bar'

import { searchCity } from '../../helpers/utilities'
import './SearchContainer.css'

export default class SearchContainer extends Component {

    state = {
        searchTerm: '',
        city_results: []
    }

    handleChange = searchTerm => this.setState({ searchTerm })

    handleSearch = () => {
        const { searchTerm } = this.state
        const { history } = this.props

        searchCity(searchTerm)
            .then( response => {
                const cities = response._embedded["city:search-results"]
                this.props.updateCities( cities )
                history.push(`/search?q=${searchTerm}`, { searchTerm, cities })
        })
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
