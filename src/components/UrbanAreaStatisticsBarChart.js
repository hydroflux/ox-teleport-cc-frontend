import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';

export default function UrbanAreaStatisticsBarChart({ categories, styles }) {
  return (
    <Paper style={styles.Paper}>
        <Chart
          data={categories}
          rotated={true}
        >
            <Title text="Urban Area Statistics Bar Chart" />
            <ArgumentAxis />
            <ValueAxis max={10} />
            <BarSeries
                name="urban-area-statistics-bar-chart"
                valueField="score_out_of_10"
                argumentField="name"
            />
            <Animation />
            <EventTracker />
            <Tooltip />
        </Chart>
    </Paper>
  )
}