import React from 'react';
import { NavLink } from 'react-router-dom';

function SignupBtn() {
  return (
    <button className="bg-blue-600 hover:bg-black font-medium text-lg text-white px-8 py-2 rounded">
      <NavLink to="signup">Sign up now</NavLink>
    </button>
  );
}

export default SignupBtn;
