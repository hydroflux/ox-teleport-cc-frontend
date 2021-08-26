import { Grid, Paper, Typography } from "@material-ui/core";

export default function LeftPane({ population, latitude, longitude, styles }) {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="inherit">
                    <Typography>Population: {population}</Typography>
                    <Typography>Latitude: {latitude}</Typography>
                    <Typography>Longitude: {longitude}</Typography>
                </Typography>
            </Paper>
        </Grid>
    )
}
