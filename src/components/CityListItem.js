import { parseHTTPResponse, searchCity } from "../helpers/utilities"

export default function CityListItem({ city }) {

    const link = city["_links"]["city:item"]
    const name = city.matching_full_name
    console.log(link)

    const searchCityExact = () => {
        
    }

    return (
            <div className="city-list-item">
                <h3 onClick={searchCityExact}>{name}</h3>
            </div>
        )
}
