import React from 'react';
import SignupInput from './SignupInput';

function Signup() {
  return (
    <div>
      <div className="flex h-full flex-row max-sm:w-full px-32 max-sm:items-start max-sm:p-10 max-sm:flex-col justify-center items-center gap-24 text-gray-700">
        <div className="pt-32 w-3/5 max-sm:w-full flex max-sm:justify-center max-sm:shrink">
          <img
            className="h-auto max-sm:w-auto"
            src="https://signup.zerodha.com/img/landing.46a77378.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start w-2/5 sm:mt-20">
          <h2 className="font-medium mb-3 mt-0" style={{ fontSize: '2rem' }}>
            Signup now
          </h2>
          <h3 className="mb-5">Or track your existing application.</h3>
          <SignupInput />
          <button className="bg-blue-600 hover:bg-blue-400 mb-3 font-normal text-base text-white px-8 py-2 rounded">
            Continue
          </button>
          <p className="text-blue-700 text-xs">Want to open an NRI account?</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
