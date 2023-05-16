import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from '@material-ui/core';
import { TableDataType } from '../App';
import React, { MouseEventHandler, useState } from 'react';

const useStyles = makeStyles({
  table: { width: '80%', margin: 'auto' },
});

type MyTableProps = {
  rows: TableDataType;
};
export default function MyTable({ rows }: MyTableProps) {
  const classes = useStyles();
  
  const handleClick : MouseEventHandler<HTMLButtonElement> =(e) =>{
    const userid = e.currentTarget.id;
    console.log(userid);
    window.open(`https://jsonplaceholder.typicode.com/users/${userid}`);
  };

  //button css먹이는방법
  // const divStyle:React.CSSProperties = {
  //   backgroundColor:'rgb(051, 204, 051)',
  //   borderRadius:'18%',
  // };

  return (
    <TableContainer
      component={Paper}
      // style={{ width: '80%', margin: 'auto' }}
      className={classes.table}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">InfoLink</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right"><Button onClick={handleClick} id={String(row.id)} style={{backgroundColor :'rgb(051, 204, 051)' }}>Link</Button></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
