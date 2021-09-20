import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    height: '100%'
  },
  tableContainer: {
    height: '75%'
  }
});

const MetricsTable = (props) => {
  const classes = useStyles();
  const { data} = props;

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >City</TableCell>
            <TableCell >AQI</TableCell>
            <TableCell >Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.city}>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.formattedAqi}</TableCell>
              <TableCell>{row.lu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MetricsTable;