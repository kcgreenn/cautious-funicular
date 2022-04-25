import React from 'react';
import Datatable from '../../components/datatable/Datatable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import classes from './List.module.scss';

const List = () => {
   return (
      <div className={classes.list}>
         <Sidebar />
         <div className={classes.listContainer}>
            <Navbar />
            <Datatable />
         </div>
      </div>
   );
};

export default List;
