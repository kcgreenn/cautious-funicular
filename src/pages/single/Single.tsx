import classNames from 'classnames';
import React from 'react';
import NormalChart from '../../components/charts/normal/NormalChart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';

import classes from './Single.module.scss';

type Props = {};

const Single = (props: Props) => {
   return (
      <div className={classes.single}>
         <Sidebar />
         <div className={classes.singleContainer}>
            <Navbar />
            <div className={classes.top}>
               <div className={classes.left}>
                  <div className={classes.editButton}>Edit</div>
                  <h1 className={classes.title}>Information</h1>
                  <div className={classes.item}>
                     <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                        alt=""
                        className={classes.itemImg}
                     />
                     <div className={classes.details}>
                        <h1 className={classes.itemTitle}>John Doe</h1>
                        <div className={classes.detailItem}>
                           <span className={classes.itemKey}>Email: </span>
                           <span className={classes.itemValue}>
                              johndoe@email.com
                           </span>
                        </div>
                        <div className={classes.detailItem}>
                           <span className={classes.itemKey}>Phone: </span>
                           <span className={classes.itemValue}>
                              +1 555 555 5555
                           </span>
                        </div>
                        <div className={classes.detailItem}>
                           <span className={classes.itemKey}>Address: </span>
                           <span className={classes.itemValue}>
                              123 Apple St, New York, New York
                           </span>
                        </div>
                        <div className={classes.detailItem}>
                           <span className={classes.itemKey}>Country: </span>
                           <span className={classes.itemValue}>
                              United States
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={classes.right}>
                  <NormalChart
                     aspect={3 / 1}
                     title="User Spending (Last 6 Months)"
                  />
               </div>
            </div>
            <div className={classes.bottom}>
               <h1 className={classes.title}>Latest Transactions</h1>
               <Table />
            </div>
         </div>
      </div>
   );
};

export default Single;
