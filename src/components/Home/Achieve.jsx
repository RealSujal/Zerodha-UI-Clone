import React from 'react';

function Achieve() {
  return (
    <div className="p-32 gap-10 flex max-sm:flex-col max-lg:p-5">
      <div className="w-1/2 max-sm:w-full">
        <img
          className="h-80 w-full object-contain"
          src="https://zerodha.com/static/images/largest-broker.svg"
          alt=""
        />
      </div>
      <div className="w-1/2 max-sm:w-full">
        <div>
          <h2
            className="font-medium text-gray-700 pb-5"
            style={{ fontSize: '2rem' }}
          >
            Largest stock broker in India
          </h2>
          <p className="text-gray-700 leading-relaxed pb-8">
            1.3+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
        </div>
        <div className="flex justify-start gap-20 pl-5 pb-7 leading-loose">
          <ul style={{ listStyleType: 'disc' }}>
            <li>Future and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
          <ul style={{ listStyleType: 'disc' }}>
            <li>Stock & IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and Govt. Securities</li>
          </ul>
        </div>
        <img src="https://zerodha.com/static/images/press-logos.png" alt="" />
      </div>
    </div>
  );
}

export default Achieve;
