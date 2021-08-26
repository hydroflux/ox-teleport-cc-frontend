import { Component } from 'react'

import { getUrbanAreaDetails } from '../../../helpers/utilities'

import DemographicsContainer from '../DemographicsContainer/DemographicsContainer'

class CityContainer extends Component {

    state = {
        full_name: "",
        geoname_id: "",
        latitude: "",
        longitude: "",
        name: "",
        population: "",
        categories: []
    }

    componentDidMount(){ this.setCityDetails() }

    setCityDetails(){
        const { city_details } = this.props.location.state
        this.setGeneralDetails( city_details )
        this.setUrbanAreaDetails( city_details )
    }

    setGeneralDetails = ( city_details ) => {
        const { full_name, geoname_id, location, name, population } = city_details
        this.setState({ 
            full_name, geoname_id, name, population,
            latitude: location.latlon.latitude,
            longitude: location.latlon.longitude
        })
    }

    setUrbanAreaDetails = ( city_details ) => {
        getUrbanAreaDetails( city_details )
            .then( this.updateCategories )
    }

    updateCategories = categories => this.setState({ categories })

    render() {
        const { full_name, population, latitude, longitude, categories } = this.state

        return (
            <section className="city-container">
                <h1>{full_name}</h1>
                <h2>Population: {population}</h2>
                <h3>Latitude: {latitude}</h3>
                <h3>Longitude: {longitude}</h3>
                <DemographicsContainer categories={categories} />
            </section>
        )
    }
}

export default CityContainer