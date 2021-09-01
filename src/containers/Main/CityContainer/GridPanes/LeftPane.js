import { Grid, Paper, Typography } from "@material-ui/core";
import { Fragment } from "react";
import LocationMap from "../../../../components/LocationMap";

export default function LeftPane({ population, latitude, longitude, styles }) {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="subtitle1"
                    align="center"
                    display="block"
                >Discrete Statistics</Typography>
                <Fragment>
                    <Typography variant="subtitle2">Population: {population}</Typography>
                    <Typography variant="subtitle2">Latitude: {latitude}</Typography>
                    <Typography variant="subtitle2">Longitude: {longitude}</Typography>
                </Fragment>
                <LocationMap latitude={latitude} longitude={longitude}/>
            </Paper>
        </Grid>
    )
}
