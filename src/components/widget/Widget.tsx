import * as React from 'react';
import cx from 'classnames';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import classes from './Widget.module.scss';
import { spacing } from '@mui/system';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

type WidgetProps = {
   type: String;
};

type WidgetData = {
   title: string;
   isMoney: boolean;
   link: string;
   linkText: string;
   icon?: React.ReactElement;
};

const Widget = ({ type }: WidgetProps): JSX.Element => {
   let data: WidgetData = {
      title: '',
      isMoney: false,
      link: '',
      linkText: '',
   };

   // temporary
   const amount = 100;
   const diff = 20;

   switch (type) {
      case 'user':
         data = {
            title: 'USERS',
            isMoney: false,
            linkText: 'View all users',
            link: '/users',
            icon: (
               <PersonOutlinedIcon
                  className={classes.icon}
                  style={{
                     color: 'crimson',
                     backgroundColor: ' rgba(255, 0, 0, 0.2)',
                  }}
               />
            ),
         };
         break;
      case 'order':
         data = {
            title: 'ORDERS',
            isMoney: false,
            linkText: 'View all orders',
            link: '/orders',
            icon: (
               <ShoppingCartOutlined
                  className={classes.icon}
                  style={{
                     color: 'goldenrod',
                     backgroundColor: ' rgba(216, 165, 32, 0.2)',
                  }}
               />
            ),
         };
         break;
      case 'earnings':
         data = {
            title: 'EARNINGS',
            isMoney: true,
            linkText: 'View net earnings',
            link: '/users',
            icon: (
               <MonetizationOnOutlinedIcon
                  className={classes.icon}
                  style={{
                     color: 'green',
                     backgroundColor: ' rgba(0, 128, 0, 0.2)',
                  }}
               />
            ),
         };
         break;
      case 'balance':
         data = {
            title: 'BALANCE',
            isMoney: true,
            linkText: 'View balance',
            link: '/balance',
            icon: (
               <AccountBalanceWalletOutlinedIcon
                  className={classes.icon}
                  style={{
                     color: 'purple',
                     backgroundColor: ' rgba(128, 0, 128, 0.2)',
                  }}
               />
            ),
         };
         break;
      default:
         break;
   }
   return (
      <div className={classes.widget}>
         <div className={classes.left}>
            <span className={classes.title}>{data.title}</span>
            <span className={classes.counter}>
               {data.isMoney && '$'} {amount}
            </span>
            <a href={data.link} className={classes.link}>
               {data.linkText}
            </a>
         </div>
         <div className={classes.right}>
            <span className={cx(classes.percentage, classes.positive)}>
               {diff > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               {diff}%
            </span>
            <>{data.icon}</>
         </div>
      </div>
   );
};

export default Widget;
