import { List } from '@material-ui/core';
import CityListItem from '../../components/CityListItem/CityListItem';

import './CityList.css'

export default function CityList({ cities, history }) {

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
    
    return (
        <>
            <List className="city-list" component="nav">
                { displayCities() }
            </List>
        </>
    )
}
