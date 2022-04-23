import React from 'react';

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

import classes from './Sidebar.module.scss';

type Props = {};

const Sidebar = (props: Props) => {
   return (
      <div className={classes.sidebar}>
         <div className={classes.top}>
            <span className={classes.logo}>Funicular</span>
         </div>
         <hr />
         <div className={classes.center}>
            <ul>
               <p className={classes.title}>Main</p>
               <li>
                  <DashboardIcon className={classes.icon} />
                  <span>Dashboard</span>
               </li>
               <p className={classes.title}>Lists</p>
               <li>
                  <PersonIcon className={classes.icon} />
                  <span>Users</span>
               </li>
               <li>
                  <InventoryIcon className={classes.icon} />
                  <span>Products</span>
               </li>
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
            <div className={classes.colorOptions}></div>
            <div className={classes.colorOptions}></div>
         </div>
      </div>
   );
};

export default Sidebar;
