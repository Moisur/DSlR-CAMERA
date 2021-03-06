import React from 'react';
import AllProductReviews from '../../AllProductReviews/AllProductReviews';
import useE from '../../Hook/useEffect';

const Reviews = () => {
    const [products]= useE()
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 p-3  text-white text-lg font-medium'>
           {
             products.map(pd=><AllProductReviews
             key={pd.id}
             pd={pd}
             ></AllProductReviews>)  
           }
        </div>
    );
};

export default Reviews;