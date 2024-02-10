import React from 'react';
import Button from './SignupBtn';

function SignupCard() {
  return (
    <div className="h-full w-full py-32 max-lg:px-5 flex flex-col justify-center items-center">
      <div>
        <img
          className="h-64"
          src="https://zerodha.com/static/images/landing.png"
          alt=""
        />
      </div>
      <div className="text-center opacity-80">
        <p className="font-medium pb-3" style={{ fontSize: '2.75rem' }}>
          Invest in everything
        </p>
        <p className="text-lg pb-14 text-wrap">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Button />
      </div>
    </div>
  );
}

export default SignupCard;
