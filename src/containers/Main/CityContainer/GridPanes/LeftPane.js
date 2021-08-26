import { Grid, Paper } from "@material-ui/core";

export default function LeftPane({ population, latitude, longitude, styles }) {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                <h2>Population: {population}</h2>
                <h3>Latitude: {latitude}</h3>
                <h3>Longitude: {longitude}</h3>
            </Paper>
        </Grid>
    )
}
