import { parseHTTPResponse } from "../helpers/utilities"

export default function CityListItem({ city, history }) {

    const link = city["_links"]["city:item"]["href"]
    const name = city.matching_full_name

    const searchCityExact = () => {
        fetch( link )
            .then( parseHTTPResponse )
            .then( city_details => {
                history.push(
                    `/search?city=${name}`, { city_details }
                )
            })
    }

    return (
            <div className="city-list-item">
                <h3 onClick={searchCityExact}>{name}</h3>
            </div>
        )
}
