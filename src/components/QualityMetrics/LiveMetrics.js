import { CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useStyles } from '../../styles/styles';
import MetricsTable from '../Table/Table';

const LiveMetrics = ({ cities }) => {
  const classes = useStyles();
//   const rows = [
//       {
//         name: 'City',
//         align: ''
//       },
//       {
//         name: 'AQI',
//         align: 'right'
//       },
//       {
//         name: 'Timestamp',
//         align: 'right'
//       }
//   ]


  return (
    <div>
      <Card className={classes.liveDataCard}>
        <CardContent className={classes.liveCardContent}>
          <div className={classes.headerLight}>
            <Typography variant='subtitle1' >
              Last updated at ({cities[0].lu})
            </Typography>
          </div>
          <div className={classes.columnContainer}>
            <MetricsTable  data={cities}></MetricsTable>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveMetrics;
