import { Typography } from "@material-ui/core"

export default function DemographicCategory({ name, score_out_of_10 }) {
    return (
        <Typography
            variant="subtitle2"
            style={{ textTransform: 'capitalize' }}
        >
            {name}: {score_out_of_10}/10
        </Typography>
    )
}
