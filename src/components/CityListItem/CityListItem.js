import { ListItem } from "@material-ui/core"

import { parseHTTPResponse } from "../../helpers/utilities"

import './CityListItem.css'

export default function CityListItem({ city, history }) {

    const link = city["_links"]["city:item"]["href"]
    const name = city.matching_full_name

    const showCityDetails = () => {
        fetch( link )
            .then( parseHTTPResponse )
            .then( city_details => {
                history.push(
                    `/show?city=${name}`, { name, city_details }
                )
            })
    }

    return (
            <ListItem
                className="city-list-item"
                button
                onClick={showCityDetails}
            >
                {name}
            </ListItem>
        )
}
