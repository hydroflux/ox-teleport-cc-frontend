import { Grid, Paper } from "@material-ui/core";

import DemographicsContainer from "../../DemographicsContainer/DemographicsContainer";

export default function RightPane({ categories, styles }) {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                <DemographicsContainer categories={categories}/>
            </Paper>
        </Grid>
    )
}
