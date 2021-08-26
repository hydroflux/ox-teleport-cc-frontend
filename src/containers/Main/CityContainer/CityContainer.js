import { Component } from 'react'
import { parseHTTPResponse } from '../../../helpers/utilities'
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

    componentDidMount(){
        this.getCityDetails()
    }

    getCityDetails(){
        this.setGeneralDetails()
        this.getUrbanAreaDetails()
    }

    setGeneralDetails(){
        const { full_name,
                geoname_id,
                location,
                name,
                population } = this.props.location.state.city_details
        this.setState({ full_name, geoname_id, name, population })
        this.setState({
            latitude: location.latlon.latitude,
            longitude: location.latlon.longitude
        })
    }

    getUrbanAreaDetails(){
        const { href } = this.props.location.state.city_details._links["city:urban_area"]
        const urbanAreaDetailsURL = `${href}scores`
        fetch( urbanAreaDetailsURL )
            .then( parseHTTPResponse )
            .then( response => {
                if (response.categories != null) {
                    this.setState({ categories: response.categories })
                }
            })
    }

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