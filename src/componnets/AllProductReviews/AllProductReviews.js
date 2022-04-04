import React from 'react';

const AllProductReviews = ({ pd }) => {
    const { img, name, Rating, cmd } = pd
    return (
        <div className='md:w-[350px] mx-auto m-4 bg-pink-500 rounded p-5'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 justify-center items-center'>
                    <img className='w-[70px] rounded-full' src={img} alt="" />
                    <span className='text-2xl underline text-slate-200'>{name}</span>
                </div>
                <p>{Rating}</p>
            </div>
            <p className='py-2'>{cmd}</p>
        </div>
    );
};

export default AllProductReviews;