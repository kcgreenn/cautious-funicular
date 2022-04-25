import React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from './datatablesource';
import classes from './Datatable.module.scss';

type Props = {};

const Datatable = (props: Props) => {
   const actionColumn = [
      {
         field: 'action',
         headerName: 'Action',
         width: 200,
         renderCell: () => {
            return (
               <div className={classes.cellAction}>
                  <div className={classes.viewButton}>View</div>
                  <div className={classes.deleteButton}>Delete</div>
               </div>
            );
         },
      },
   ];
   return (
      <div className={classes.datatable}>
         <DataGrid
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
