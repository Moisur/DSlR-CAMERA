import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hook/useChart';

const MixBarChart = () => {
    const [chart]=useChart()
    return (
        <BarChart
          width={300}
          height={300}
          data={chart}
          className='bg-pink-200 rounded'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
          <Bar dataKey="revenue" fill="#ffc658" />
        </BarChart>
    );
};

export default MixBarChart;