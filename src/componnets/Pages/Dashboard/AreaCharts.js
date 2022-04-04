import React from 'react';
import { Area, AreaChart,CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hook/useChart';
const AreaCharts = () => {
    const  [chart] =useChart()
    return (
        <AreaChart
            width={300}
            height={300}
            data={chart}
            className='bg-pink-200 rounded'
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
};

export default AreaCharts;