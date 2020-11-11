import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import numeral from 'numeral';

const StyledTableCell = withStyles((theme) => ({
   head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
   },
   body: {
      fontSize: 14,
   },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
   root: {
      '&:nth-of-type(odd)': {
         backgroundColor: theme.palette.action.hover,
      },
   },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
   container: {
      borderBottom: `1px solid ${theme.palette.action.hover}`,
      boxShadow: 'none',
      height: '400px',
   },
   headerTitle: {
      marginBottom: 15,
      marginTop: 5,
   },
   table: {
      minWidth: '100%',
   },
}));

const tableDataProses = (data, type) => {
   return data.sort((a, b) => (a[type] > b[type] ? -1 : 1));
};

export default function CustomizedTables({ data, dataType = 'cases' }) {
   const classes = useStyles();
   return (
      <>
         <h3 className={classes.headerTitle}>Live Cases by Country</h3>
         <TableContainer className={classes.container} component={Paper}>
            <Table
               className={classes.table}
               size="small"
               stickyHeader
               aria-label="sticky table"
            >
               <TableBody>
                  {data[0] &&
                     tableDataProses(data, dataType).map((country) => (
                        <StyledTableRow key={country.country}>
                           <StyledTableCell component="th" scope="row">
                              {country.country}
                           </StyledTableCell>
                           <StyledTableCell align="right">
                              {numeral(country[dataType]).format('0,0')}
                           </StyledTableCell>
                        </StyledTableRow>
                     ))}
               </TableBody>
            </Table>
         </TableContainer>
      </>
   );
}
