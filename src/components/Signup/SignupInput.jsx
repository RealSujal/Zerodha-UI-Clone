import React from 'react';

function SignupInput() {
  return (
    <div className="w-full md:w-1/3">
      <label
        className="text-gray-500 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Mobile number
      </label>
      <input
        className="flex h-10 w-full rounded border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="+91 "
        id="number"
        maxLength="10"
        inputMode="numeric"
        size="2"
      ></input>
      <p className="my-5 text-xs text-gray-500">
        You will receive an OTP on your number
      </p>
    </div>
  );
}

export default SignupInput;
