import { Typography } from "@material-ui/core"

export default function DemographicCategory({ name, score_out_of_10 }) {
    return (
        <Typography>
            {name}: {score_out_of_10}/10
        </Typography>
    )
}
