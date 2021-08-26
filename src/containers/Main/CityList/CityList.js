import { List, Typography } from '@material-ui/core';
import CityListItem from '../../../components/CityListItem/CityListItem';

import './CityList.css'

export default function CityList({ cities, history, match }) {

    const displayCities = () => {
        return cities.map( city => {
            return (
                <CityListItem
                    key={city.matching_full_name}
                    city={city}
                    history={history}
                />)
        })
    }

    const displayHeader = () => {
        return (
            match.path === "/"
            ? 'Select a city to learn more below, or use the search bar to update results:' 
            : (`Your search of "${history.location.state.searchTerm}" 
                returned ${history.location.state.cities.length} results:`)
        )
    }
    
    return (
        <>
            { console.log(history)}
            <Typography
                className="city-list-header"
                variant="h6"
                align="center"
            >
                { displayHeader() }
            </Typography>
            <List className="city-list" component="nav">
                { displayCities() }
            </List>
        </>
    )
}
