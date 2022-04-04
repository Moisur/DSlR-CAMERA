import React from 'react';

const Blogs = () => {
    return (
        <main className='bg-pink-800'>
            <div className='container py-20 px-4 mx-auto text-[#b8b2b2] font-serif text-xl'>
                <div className='mb-20'>
                    <h1 className='text-3xl pb-4 text-white'>What is context API ?</h1>
                    <p>
                        Context API is React API that can solve a lot of problems, that modern applications face related to state management. Modern applications brack the site into smaller components. This small components need some data to work properly. That why we will have to pass data through props from the parent component to the child component. Sometimes props is become too complicated  and it slow down our web application. This new Context API solves major problem  of prop drilling.The Context API can used to share data with multiple components, without passing data through props manually.

                    </p>
                </div>
                <div>
                    <h1  className='text-3xl pb-4 text-white'>What is a semantic tag?</h1>
                    <p>
                        Semantic tags makes HTML more comprehensible by better defining the different sections and layout of web pages. Semantic tags gives our many more hooks for styling your content. The semantic tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements or tags are much easier to read. A programmer  Easily can understand or  reading through hundreds or thousands of lines of code by this semantic tag. Some semantic tag are
                    </p>
                </div>
            </div>
        </main>

    );
};

export default Blogs;