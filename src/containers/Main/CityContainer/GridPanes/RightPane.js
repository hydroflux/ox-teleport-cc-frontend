import { Grid, Paper, Typography } from "@material-ui/core";

import DemographicsContainer from "../../DemographicsContainer/DemographicsContainer";
// import UrbanAreaStatisticsBarChart from "../../../../components/UrbanAreaStatisticsBarChart";

export default function RightPane({ categories, styles }) {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="inherit">
                    <DemographicsContainer categories={categories}/>
                </Typography>
            </Paper>
            {/* <UrbanAreaStatisticsBarChart categories={categories} styles={styles}/> */}
        </Grid>
    )
}
