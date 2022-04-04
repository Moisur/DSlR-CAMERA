import React from 'react';
import { Link } from 'react-router-dom';
import useE from '../../Hook/useEffect';
import images from '../../Images/camera.png'
import ProductReviews from '../../ProductReviews/ProductReviews';
const Home = () => {
    const [products]= useE()
    return (
        <div className=' bg-[#87867f49] pb-10'>
            <div className='grid px-2  mb-7 md:px-12  grid-cols-1 gap-5 md:grid-cols-2'>
                <article className='order-2 md:order-none px-3  pt-40'>
                    <h1 className='text-5xl  font-bold text-pink-500'>A camera is an optical instrument that captures a visual image</h1>
                    <h1 className='text-2xl my-3 text-[#615a5ae4]'>A camera is a device that records pictures. It consists of a sealed box that catches the light rays given off by a source. A lens at the front of the camera brings the light rays to a focus and makes the picture seem closer or further away!</h1>
                    <button className='bg-pink-500 text-white text-lg font-bold mx-2 p-4 py-2 rounded-lg'>See More...</button>
                </article>
                <article className='order-1 md:order-none pt-10 mx-auto'>
                    <img src={images} alt="" />
                </article>
            </div>
            <div className='text-center'>
                <h1 className='bg-pink-500 rounded-lg p-3 w-[300px] mt-10 mb-10 mx-auto uppercase text-2xl font-medium text-white '>Customer Reviews</h1>
                <div className='md:flex text-white my-20 text-lg font-medium px-3 md:px-0 md:justify-around items-center'>
                    {
                       products.slice(0,3).map(pd=><ProductReviews
                       key={pd.id}
                       pd={pd}
                       ></ProductReviews>)
                    }
                </div>
                <Link to='/reviews' className='bg-pink-500 rounded-lg py-2 px-4 w-[300px] my-10 mx-auto uppercase text-2xl font-medium text-white '>All Reviews</Link>
            </div>
            
        </div>
    );
};

export default Home;