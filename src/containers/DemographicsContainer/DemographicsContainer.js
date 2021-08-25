import DemographicCategory from '../../components/DemographicCategory/DemographicCategory'

export default function DemographicsContainer({ categories }) {

    const displayDemographicsCategories = () => {
        return categories.map( category => {
            return <DemographicCategory key={category.name} {...category}/>
        })
    }

    return (
        <section>
            { displayDemographicsCategories() }
        </section>
    )
}
