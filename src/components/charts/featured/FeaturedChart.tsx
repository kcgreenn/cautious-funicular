import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import classes from './FeaturedChart.module.scss';
import cx from 'classnames';

type Props = {};

const FeaturedChart = (props: Props) => {
   return (
      <div className={classes.featured}>
         <div className={classes.top}>
            <h1 className={classes.title}>Total Revenue</h1>
            <MoreVertIcon fontSize="small" />
         </div>
         <div className={classes.bottom}>
            <div className={classes.featuredChart}>
               <CircularProgressbar value={70} text={'70%'} strokeWidth={3} />
            </div>
            <p className={classes.title}>Total sales today</p>
            <p className={classes.amount}>$500</p>
            <p className={classes.desc}>
               Previous transactions processing. Last payments may not be
               included.
            </p>
            <div className={classes.summary}>
               <div className={classes.item}>
                  <div className={classes.itemTitle}>Target</div>
                  <div className={cx(classes.itemResult, classes.positive)}>
                     <KeyboardArrowUpIcon fontSize="small" />
                     <div className={classes.resultAmount}>$12.4k</div>
                  </div>
               </div>
               <div className={classes.item}>
                  <div className={classes.itemTitle}>Last Week</div>
                  <div className={cx(classes.itemResult, classes.negative)}>
                     <KeyboardArrowDownIcon fontSize="small" />
                     <div className={classes.resultAmount}>$9.7k</div>
                  </div>
               </div>
               <div className={classes.item}>
                  <div className={classes.itemTitle}>Last Month</div>
                  <div className={cx(classes.itemResult, classes.positive)}>
                     <KeyboardArrowUpIcon fontSize="small" />
                     <div className={classes.resultAmount}>$236k</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeaturedChart;
