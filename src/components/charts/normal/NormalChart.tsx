import React from 'react';

import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
} from 'recharts';

import classes from './NormalChart.module.scss';

type Props = {};

type ChartData = {
   name: string;
   uv: number;
   pv: number;
   amt: number;
};

const NormalChart = (props: Props) => {
   const data: Array<ChartData> = [
      {
         name: 'Jan',
         uv: 4000,
         pv: 2400,
         amt: 2400,
      },
      {
         name: 'Feb',
         uv: 3000,
         pv: 1398,
         amt: 2210,
      },
      {
         name: 'Mar',
         uv: 2000,
         pv: 9800,
         amt: 2290,
      },
      {
         name: 'Apr',
         uv: 2780,
         pv: 3908,
         amt: 2000,
      },
      {
         name: 'May',
         uv: 1890,
         pv: 4800,
         amt: 2181,
      },
      {
         name: 'June',
         uv: 2390,
         pv: 3800,
         amt: 2500,
      },
   ];

   return (
      <div className={classes.normal}>
         <div className={classes.title}>Last 6 Months Revenue</div>
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart
               width={500}
               height={400}
               data={data}
               margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
               }}
            >
               <CartesianGrid
                  strokeDasharray="3 3"
                  className={classes.chartGrid}
               />
               <XAxis dataKey="name" stroke="gray" />
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
               />
               <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
               />
               <Area
                  type="monotone"
                  dataKey="amt"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
};

export default NormalChart;
