import React, { useContext } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from './datatablesource';
import classes from './Datatable.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

type Props = {};

const Datatable = (props: Props) => {
   const { state, dispatch } = useContext(DarkModeContext);

   const actionColumn = [
      {
         field: 'action',
         headerName: 'Action',
         width: 200,
         renderCell: () => {
            return (
               <div className={classes.cellAction}>
                  <Link
                     className={classes.viewButton}
                     style={{ textDecoration: 'none' }}
                     to="/users/12345"
                  >
                     View
                  </Link>
                  <div className={classes.deleteButton}>Delete</div>
               </div>
            );
         },
      },
   ];
   return (
      <div
         className={cx(classes.datatable, state.darkMode ? classes.dark : null)}
      >
         <div className={classes.dataTableTitle}>
            <Link
               to="/users/new"
               style={{
                  textDecoration: 'none',
                  color: 'white',
                  textAlign: 'center',
               }}
            >
               Add New
            </Link>
         </div>
         <DataGrid
            sx={{
               color: state.darkMode ? 'white' : 'black',
            }}
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
         />
      </div>
   );
};

export default Datatable;
