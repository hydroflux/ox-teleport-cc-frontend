import { Fragment } from "react"
import { Typography } from "@material-ui/core"

import DemographicCategory from "../../../components/DemographicCategory/DemographicCategory"

export default function DemographicsContainer({ categories }) {

    const displayDemographicsCategories = () => {
        return categories.map( category => {
            return <DemographicCategory key={category.name} {...category}/>
        })
    }

    return (
        <Fragment>
            <Typography
                variant="subtitle1"
                align="center"
                display="block"
            >Urban Area Statistics</Typography>
            { displayDemographicsCategories() }
        </Fragment>
    )
}
