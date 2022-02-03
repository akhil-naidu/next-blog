import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section className='w-full px-6 pb-12 antialiased'>
        <div className='mx-auto max-w-7xl'>
          <div className='container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center'>
            <h1 className='text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-200 md:text-center sm:leading-none md:text-6xl lg:text-7xl'>
              <span className='inline md:block'>Start Crafting Your</span>{' '}
              <span className='relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-pink-200 md:inline-block'>
                Next Great Community
              </span>
            </h1>
            <div className='mx-auto mt-5 text-gray-200 md:mt-12 md:max-w-lg md:text-center lg:text-lg'>
              Simplifying the creation of landing pages, blog pages, application pages and so much
              more!
            </div>
            <div className='flex flex-col items-center mt-12 text-center'>
              <span className='relative inline-flex w-full md:w-auto'>
                <a
                  href='#_'
                  type='button'
                  className='inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-pink-600 border border-transparent rounded-full md:w-auto hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 transition duration-500'
                >
                  Purchase Now
                </a>
                <span className='absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full'>
                  only $50/mo
                </span>
              </span>
              <a href='#' className='mt-3 text-sm text-white'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
