import React from "react";

const HomePage = () => {
  return (
    <div>
      <section className="w-full px-6 pb-12 antialiased">
        <div className="mx-auto max-w-7xl">
          <div className="container mx-auto max-w-lg px-4 py-32 text-left md:max-w-none md:text-center">
            <h1 className="text-left text-5xl font-extrabold leading-10 tracking-tight text-gray-200 sm:leading-none md:text-center md:text-6xl lg:text-7xl">
              <span className="inline md:block">Start Crafting Your</span>{" "}
              <span className="relative mt-2 bg-gradient-to-br from-yellow-200 to-pink-200 bg-clip-text text-transparent md:inline-block">
                Next Great Community
              </span>
            </h1>
            <div className="mx-auto mt-5 text-gray-200 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
              Simplifying the creation of landing pages, blog pages, application
              pages and so much more!
            </div>
            <div className="mt-12 flex flex-col items-center text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <a
                  href="#_"
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-pink-600 px-8 py-4 text-base font-bold leading-6 text-white transition duration-500 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 md:w-auto"
                >
                  Purchase Now
                </a>
                <span className="absolute top-0 right-0 -mt-3 -mr-6 rounded-full bg-green-400 px-2 py-1 text-xs font-medium leading-tight text-white">
                  only $50/mo
                </span>
              </span>
              <a href="#" className="mt-3 text-sm text-white">
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
