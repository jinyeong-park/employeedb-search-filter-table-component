import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, department, age) {
  return { name, department, age };
}


export default function TableLayout({data}) {

  // console.log('data in table', data)
  const classes = useStyles();
  let num = 1

  return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Age</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow key={employee.name}>
              <TableCell component="th" scope="row">
                {num++}
              </TableCell>
              <TableCell align="center">{employee.name}</TableCell>
              <TableCell align="center">{employee.department}</TableCell>
              <TableCell align="center">{employee.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}