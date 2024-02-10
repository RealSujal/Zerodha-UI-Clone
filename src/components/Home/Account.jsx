import React from 'react';
import SignupBtn from './SignupBtn';

function Account() {
  return (
    <div className="text-center my-24 text-gray-700">
      <h1 className="pb-5 font-medium" style={{ fontSize: '2rem' }}>
        Open a Zerodha account
      </h1>
      <p className="pb-12">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <SignupBtn />
    </div>
  );
}

export default Account;
