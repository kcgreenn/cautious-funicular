import React from 'react';
import FeaturedChart from '../../components/charts/featured/FeaturedChart';
import NormalChart from '../../components/charts/normal/NormalChart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';

import classes from './Home.module.scss';

const Home = () => {
   return (
      <div className={classes.home}>
         <Sidebar />
         <div className={classes.homeContainer}>
            <Navbar />
            <div className={classes.widgets}>
               <Widget type="user" />
               <Widget type="order" />
               <Widget type="earnings" />
               <Widget type="balance" />
            </div>
            <div className={classes.charts}>
               <FeaturedChart />
               <NormalChart />
            </div>
            <div className={classes.listContainer}>
               <div className={classes.listTitle}>Latest Transactions</div>
               <Table />
            </div>
         </div>
      </div>
   );
};

export default Home;
