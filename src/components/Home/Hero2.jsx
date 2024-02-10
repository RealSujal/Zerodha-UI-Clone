import React from 'react';

function Hero2() {
  return (
    <div className="px-32 flex flex-row max-sm:flex-col max-sm:px-5 justify-center items-center gap-20 text-gray-700 leading-loose">
      <div className="w-1/2 max-sm:w-full flex max-sm:justify-center">
        <img className='h-80'
          src="https://zerodha.com/static/images/index-education.svg"
          alt=""
        />
      </div>
      <div className="w-1/2 max-sm:w-full">
        <h1 className="text-xl font-medium pb-5">
          Free and open market education
        </h1>
        <div>
          <p className="pb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <button className="pb-4 font-medium text-blue-600">
            Varsity <i class="ri-arrow-right-line"></i>
          </button>
        </div>
        <div>
          <p className="pb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <button className="pb-4 font-medium text-blue-600">
            TradingQ&A <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
