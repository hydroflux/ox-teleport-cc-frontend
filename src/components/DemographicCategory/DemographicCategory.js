import { Box, Typography } from "@material-ui/core"
import { Fragment } from "react"

export default function DemographicCategory({ name, score_out_of_10 }) {
    return (
        <Fragment>
            <Typography
                variant="subtitle2"
                style={{ textTransform: 'capitalize' }}
            >
                <Box 
                    component="span"
                    fontWeight="fontWeightMedium" m={0.5}
                >
                    {name}:
                </Box>
                <Box
                    component="span"
                    fontWeight="fontWeightLight" m={0.5}
                >
                    { Math.round(score_out_of_10 * 100) / 100 }/10
                </Box>
                
            </Typography>
        </Fragment>
    )
}
