import React, { } from 'react';
import AreaCharts from './AreaCharts';
import MixBarChart from './MixBarChart';
import TwoLevelPieChart from './TwoLevelPieChart';
const Dashboard = () => {
    return (
        <main className='grid grid-cols-1 text-center lg:grid-cols-3 md:mb-[180px] p-4 '>
            <div className='w-[300px] mx-auto '>
                <h1 className='text-3xl font-medium text-pink-500 py-3'>AreaChart:-</h1>
                <AreaCharts/>
            </div>
            <div className='w-[300px] mx-auto ' >
                <h1 className='text-3xl font-medium text-pink-500 py-3'>BarChart:-</h1>
                <MixBarChart/>
            </div>
            <div className='w-[300px] mx-auto'>
                <h1 className='text-3xl font-medium text-pink-500 py-3'>PieChart:-</h1>
                <TwoLevelPieChart/>
            </div>
        </main>
    );
};
export default Dashboard;