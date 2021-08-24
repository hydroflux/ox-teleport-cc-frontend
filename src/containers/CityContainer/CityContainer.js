import { Component } from 'react'

class CityContainer extends Component {

    state = {
        full_name: "",
        geoname_id: "",
        latitude: "",
        longitude: "",
        name: "",
        population: "",
    }

    componentDidMount(){
        this.getCityDetails()
    }

    getCityDetails(){
        console.log(this.props.location.state)
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
        const { _links } = this.props.location.state.city_details
        console.log(' urban area details ', _links)
    }

    render() {
        const { full_name, population, latitude, longitude } = this.state

        return (
            <section className="city-container">
                <h1>{full_name}</h1>
                <h2>Population: {population}</h2>
                <h3>Latitude: {latitude}</h3>
                <h3>Longitude: {longitude}</h3>
            </section>
        )
    }
}

// full_name: "",
// geoname_id: "",
// location: {},
// name: "",
// population: "",
// links: {}

export default CityContainer