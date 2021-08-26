import { Grid, Paper, Typography } from "@material-ui/core";

import DemographicsContainer from "../../DemographicsContainer/DemographicsContainer";

export default function RightPane({ categories, styles }) {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="inherit">
                    <DemographicsContainer categories={categories}/>
                </Typography>
            </Paper>
        </Grid>
    )
}
