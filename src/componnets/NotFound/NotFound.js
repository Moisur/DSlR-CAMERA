import React from 'react';

const NotFound = () => {
    return (
        <div className=' md:flex h-[88vh] gap-10 px-5 justify-around items-center'>
            <h1 className='text-7xl text-center py-10 font-mono font-medium text-pink-500'>Not Found</h1>
            <div>
                 <img className='w-[500px] mx-auto rounded-lg' src="https://miro.medium.com/max/1400/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg" alt="" />
            </div>
           
        </div>
    );
};

export default NotFound;