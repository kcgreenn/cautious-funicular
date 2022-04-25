import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import cx from 'classnames';

import classes from './Sidebar.module.scss';
import { DarkModeContext } from '../../context/darkModeContext';

type Props = {};

const Sidebar = (props: Props) => {
   const { state, dispatch } = useContext(DarkModeContext);

   return (
      <div
         className={cx(classes.sidebar, state.darkMode ? classes.dark : null)}
      >
         <div className={classes.top}>
            <Link to="/" style={{ textDecoration: 'none' }}>
               <span className={classes.logo}>Admin Panel</span>
            </Link>
         </div>
         <hr />
         <div className={classes.center}>
            <ul>
               <p className={classes.title}>Main</p>
               <Link to="/" style={{ textDecoration: 'none' }}>
                  <li>
                     <DashboardIcon className={classes.icon} />
                     <span>Dashboard</span>
                  </li>
               </Link>
               <p className={classes.title}>Lists</p>
               <Link to="/users" style={{ textDecoration: 'none' }}>
                  <li>
                     <PersonIcon className={classes.icon} />
                     <span>Users</span>
                  </li>
               </Link>
               <Link to="/products" style={{ textDecoration: 'none' }}>
                  <li>
                     <InventoryIcon className={classes.icon} />
                     <span>Products</span>
                  </li>
               </Link>
               <li>
                  <CreditCardIcon className={classes.icon} />
                  <span>Orders</span>
               </li>
               <li>
                  <LocalShippingIcon className={classes.icon} />
                  <span>Delivery</span>
               </li>
               <p className={classes.title}>Useful Links</p>
               <li>
                  <InsertChartIcon className={classes.icon} />
                  <span>Stats</span>
               </li>
               <li>
                  <NotificationsNoneIcon className={classes.icon} />
                  <span>Notifications</span>
               </li>
               <p className={classes.title}>Service</p>
               <li>
                  <HealthAndSafetyIcon className={classes.icon} />
                  <span>System Health</span>
               </li>
               <li>
                  <SettingsIcon className={classes.icon} />
                  <span>Settings</span>
               </li>
               <p className={classes.title}>User</p>
               <li>
                  <AccountCircleIcon className={classes.icon} />
                  <span>Profile</span>
               </li>
               <li>
                  <ExitToAppIcon className={classes.icon} />
                  <span>Logout</span>
               </li>
            </ul>
         </div>
         <div className={classes.bottom}>
            <a
               className={classes.colorOptions}
               href="#"
               title="Light Mode"
               onClick={(e) => dispatch({ type: 'LIGHT' })}
            />
            <a
               className={classes.colorOptions}
               href="#"
               title="Dark Mode"
               onClick={(e) => dispatch({ type: 'DARK' })}
            />
         </div>
      </div>
   );
};

export default Sidebar;
