import CityListItem from '../../components/CityListItem';

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
        <section>
            <h1>Please Select A City</h1>
            { displayCities() }
        </section>
    )
}
