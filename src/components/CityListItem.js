export default function CityListItem({ city }) {

    // const link = city["_links"]["city:item"]
    const name = city.matching_full_name

    return (
            <div className="city-list-item">
                <h3 >{name}</h3>
            </div>
        )
}
