import React from 'react';
import cx from 'classNames';

import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './Table.module.scss';

type Props = {};

type RowsType = {
   id: number;
   product: string;
   img: string;
   customer: string;
   date: string;
   amount: number;
   method: string;
   status: string;
};

const Table = (props: Props) => {
   const rows: Array<RowsType> = [
      {
         id: 1143155,
         product: 'Acer Nitro 5',
         img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
         customer: 'John Smith',
         date: '1 March',
         amount: 785,
         method: 'Cash on Delivery',
         status: 'Approved',
      },
      {
         id: 2235235,
         product: 'Playstation 5',
         img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
         customer: 'Michael Doe',
         date: '1 March',
         amount: 900,
         method: 'Online Payment',
         status: 'Pending',
      },
      {
         id: 2342353,
         product: 'Redragon S101',
         img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
         customer: 'John Smith',
         date: '1 March',
         amount: 35,
         method: 'Cash on Delivery',
         status: 'Pending',
      },
      {
         id: 2357741,
         product: 'Razer Blade 15',
         img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
         customer: 'Jane Smith',
         date: '1 March',
         amount: 920,
         method: 'Online',
         status: 'Approved',
      },
      {
         id: 2342355,
         product: 'ASUS ROG Strix',
         img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
         customer: 'Harold Carol',
         date: '1 March',
         amount: 2000,
         method: 'Online',
         status: 'Pending',
      },
   ];

   return (
      <div className={classes.table}>
         <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell align="center" className={classes.tableCell}>
                        Tracking ID
                     </TableCell>
                     <TableCell align="center" className={classes.tableCell}>
                        Product
                     </TableCell>
                     <TableCell align="right" className={classes.tableCell}>
                        Customer
                     </TableCell>
                     <TableCell align="right" className={classes.tableCell}>
                        Date
                     </TableCell>
                     <TableCell align="right" className={classes.tableCell}>
                        Amount
                     </TableCell>
                     <TableCell align="right" className={classes.tableCell}>
                        Payment Method
                     </TableCell>
                     <TableCell align="right" className={classes.tableCell}>
                        Status
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow
                        key={row.id}
                        sx={{
                           '&:last-child td, &:last-child th': { border: 0 },
                        }}
                     >
                        <TableCell component="th" scope="row" align="center">
                           {row.id}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="center">
                           <div className={classes.cellWrapper}>
                              <img
                                 src={row.img}
                                 alt={row.product}
                                 className={classes.image}
                              />
                              {row.product}
                           </div>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                           {row.customer}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                           {row.date}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                           ${row.amount}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                           {row.method}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                           <span
                              className={cx(
                                 classes.status,
                                 row.status == 'Approved'
                                    ? classes.approved
                                    : classes.pending
                              )}
                           >
                              {row.status}
                           </span>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </MuiTable>
         </TableContainer>
      </div>
   );
};

export default Table;
