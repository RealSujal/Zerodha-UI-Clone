import React from 'react';
import Menu from './Menu';

function Burger() {
  return (
    <div className="top-16 border border-t-2 bg-white mx-32 max-lg:mx-0 min-w-full max-w-full h-auto z-40 shadow-lg text-gray-600 sticky max-lg:h-auto max-lg:w-auto max-lg:-left-10 max-lg:top-16">
      <div className="lg:hidden flex flex-wrap justify-center p-5 border border-b-2">
        <Menu />
      </div>
      <div className="flex flex-row flex-wrap justify-between items-center gap-20 text-center opacity-85 p-8 text-nowrap">
        <div className="cursor-pointer w-auto flex flex-col justify-center items-center hover:text-blue-500">
          <img
            className="hover:opacity-80"
            src="https://zerodha.com/static/images/products/kite-logo.svg"
            alt="kite"
          />
          <h3 className="text-sm font-semibold mb-1">Kite</h3>
          <p className="text-xs text-gray-500 font-medium max-lg:hidden">
            Trading platform
          </p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center hover:text-blue-500">
          <img
            className="hover:opacity-80"
            src="https://zerodha.com/static/images/products/console.svg"
            alt="console"
          />
          <h3 className="text-sm font-semibold mb-1">Console</h3>
          <p className="text-xs text-gray-500 font-medium max-lg:hidden">
            Backoffice
          </p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center hover:text-blue-500">
          <img
            className="hover:opacity-80"
            src="https://zerodha.com/static/images/products/kite-connect.svg"
            alt="kite connect"
          />
          <h3 className="text-sm font-semibold mb-1">Kite Connect</h3>
          <p className="text-xs text-gray-500 font-medium max-lg:hidden">
            Trading APIs
          </p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center hover:text-blue-500">
          <img
            className="hover:opacity-80"
            src="https://zerodha.com/static/images/products/coin.svg"
            alt="zerodha coin"
          />
          <h3 className="text-sm font-semibold mb-1">Coin</h3>
          <p className="text-xs text-gray-500 font-medium max-lg:hidden">
            Mutual funds
          </p>
        </div>
      </div>

      <div className="flex flex-row bg-gray-50 gap-20 p-8 tracking-wide text-nowrap">
        <div className="cursor-pointer">
          <h3 className="mb-4 text-base font-medium">Utilities</h3>
          <div className="text-sm leading-loose text-gray-500">
            <p className="hover:text-blue-500">Brokerage calculator</p>
            <p className="hover:text-blue-500">Margin calculator</p>
            <p className="hover:text-blue-500">Holiday calculator</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <h3 className="mb-4 text-base font-medium">Updates</h3>
          <div className="text-sm leading-loose text-gray-500">
            <p className="hover:text-blue-500">Z-Connect blog</p>
            <p className="hover:text-blue-500">Pulse news</p>
            <p className="hover:text-blue-500">Circulars / Bulletin</p>
            <p className="hover:text-blue-500">IPOs</p>
          </div>
        </div>
        <div className="max-lg:hidden cursor-pointer">
          <h3 className="mb-4 text-base font-medium text-left">Education</h3>
          <div className="flex flex-row justify-center items-center text-sm gap-8 text-gray-500 ">
            <div className="flex flex-col justify-center items-center hover:text-blue-500">
              <img
                className="mb-4"
                src="https://zerodha.com/static/images/products/varsity.png"
                alt=""
              />
              <p>Varsity</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-blue-500">
              <img
                className="mb-5"
                src="https://zerodha.com/static/images/products/tqna.png"
                alt=""
              />
              <p>Trading Q&A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Burger;
