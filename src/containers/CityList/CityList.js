import CityListItem from '../../components/CityListItem';

export default function CityList({ cities }) {
    const displayCities = () => {
        return cities.map( city => {
            return <CityListItem key={city.matching_full_name} city={city} />
        })
    }
    
    return (
        <section>
            
            <h1>Sample Cities</h1>
            { displayCities() }
        </section>
    )
}
