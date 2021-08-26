import { Grid, Typography } from '@material-ui/core'
import { Component } from 'react'

import { getUrbanAreaDetails } from '../../../helpers/utilities'

import LeftPane from './GridPanes/LeftPane'
import RightPane from './GridPanes/RightPane'
import UrbanAreaStatisticsBarChart from '../../../components/UrbanAreaStatisticsBarChart'

import './CityContainer.css'

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

    styles = {
        Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
    }

    render() {
        const { full_name, population, latitude, longitude, categories } = this.state

        return (
            <>
                <Typography className="city-container-header"
                    variant="inherit"
                    align="center" // Doesn't appear to be working properly, using external CSS
                >
                    {full_name}
                </Typography>
                <Grid container>
                    <Grid item sm>
                        <LeftPane
                            population={population}
                            latitude={latitude}
                            longitude={longitude}
                            styles={this.styles}
                        />
                    </Grid>
                    <Grid item sm>
                        <RightPane
                            categories={categories}
                            styles={this.styles}
                        />
                    </Grid>
                </Grid>
                <UrbanAreaStatisticsBarChart categories={categories} styles={this.styles}/>
            </>
        )
    }
}

export default CityContainer